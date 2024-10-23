type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      map(arg0: (goal: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
      id: string
      title: string
      compleTedAt: string
    }
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}
