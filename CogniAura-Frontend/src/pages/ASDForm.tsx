import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useConfetti } from "../hooks/useConfitte";

interface PredictionResponse {
  prediction: string;
}

const ASDForm: React.FC = () => {
  const initialFields = {
    AQ1: "",
    AQ2: "",
    AQ3: "",
    AQ4: "",
    AQ5: "",
    AQ6: "",
    AQ7: "",
    AQ8: "",
    AQ9: "",
    AQ10: "",
    AQ11: "",
    AQ12: "",
    AQ13: "",
    AQ14: "",
  };

  const [formData, setFormData] = useState(initialFields);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { startConfetti } = useConfetti();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (currentQuestion < Object.keys(formData).length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const features = Object.values(formData).map(Number);
      const response = await axios.post<PredictionResponse>(
        "http://localhost:5000/predict",
        {
          features: features,
        }
      );
      setResult(response.data.prediction);
      startConfetti();
    } catch (error) {
      console.error("Error predicting ASD:", error);
      setResult("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const questions = [
    "I like playing with other children.",
    "I enjoy doing the same activities over and over.",
    "I can easily imagine stories in my head.",
    "I sometimes focus so much on one thing that I forget about everything else.",
    "I notice small sounds that others don't hear.",
    "I like looking at details in pictures or objects.",
    "I sometimes say things that might upset others without meaning to.",
    "When I read a story, I can easily picture what the characters look like.",
    "I like learning about different topics, like animals or space.",
    "I find it easy to follow what's happening when many people are talking.",
    "I enjoy meeting new people and making friends.",
    "I often notice things that others might miss.",
    "I prefer quiet activities over noisy ones.",
    "I enjoy making up my own stories and games."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#56E0E0] via-[#2A9CAC] to-[#02607E] flex items-center justify-center p-4">
    <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#56E0E0] to-[#02607E] text-white p-6">
        <h2 className="text-3xl font-bold text-center">Child Behavior Questionnaire</h2>
        <p className="text-center mt-2 text-[#E0F7FA]">
          Answer each question as it appears
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence>
            {Object.entries(formData).map(
              ([key, value], index) =>
                index <= currentQuestion && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded-lg shadow-md border border-[#2A9CAC]/20"
                  >
                    <label className="block text-[#02607E] mb-2 font-medium">{`Q${
                      index + 1
                    }: ${questions[index]}`}</label>
                    <div className="flex justify-between items-center">
                    <Input
                      name={key}
                      value={value}
                      onChange={handleChange}
                      type="number"
                      min="0"
                      max="3"
                      required
                      className="w-2/3 accent-[#2A9CAC]"
                      placeholder="Enter 0-3"
                    />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </form>
      </CardContent>
      <CardFooter className="bg-[#E0F7FA] p-6">
        <Button
          type="submit"
          disabled={
            loading || currentQuestion < Object.keys(formData).length - 1
          }
          className="w-full bg-gradient-to-r from-[#2A9CAC] to-[#02607E] hover:from-[#238A9A] hover:to-[#014E68] text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
          ) : currentQuestion < Object.keys(formData).length - 1 ? (
            "Please answer all questions"
          ) : (
            "Submit"
          )}
        </Button>
      </CardFooter>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 text-center bg-white"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#02607E]">Result</h3>
            {result === "Yes" ? (
              <p className="text-[#02607E] text-xl">ASD detected</p>
            ) : result === "No" ? (
              <p className="text-[#2A9CAC] text-xl">No ASD detected</p>
            ) : (
              <p className="text-[#56E0E0] text-xl">{result}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
    </div>
  );
};

export default ASDForm;
