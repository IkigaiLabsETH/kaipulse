import { Metadata } from "next"
import FireContent from "./content"

export const metadata: Metadata = {
  title: "Retirement Is a Rugpull | MSTY",
  description: "The biggest lie ever sold was retirement at 65. A manifesto on why the climb is the point, not the summit.",
}

export default function FirePage() {
  return <FireContent />
}
