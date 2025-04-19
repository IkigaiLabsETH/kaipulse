import { Metadata } from "next"
import AIContent from "./content"

export const metadata: Metadata = {
  title: "The New Startup Playbook | MSTY",
  description: "The Startup Playbook Has Been Rewritten—Forever. A deep dive into how AI, agents, and culture are reshaping the startup landscape.",
}

export default function AIPage() {
  return <AIContent />
} 