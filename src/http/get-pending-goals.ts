type getPendingGoalsResponse = {
    id: string;
    title: string;
    desireWeeklyFrequency: number;
    completionCount: number;
}[]
  
  export async function getPendingGoals(): Promise<getPendingGoalsResponse> {
    const response = await fetch('http://localhost:3333/pending-goals')
    const data = await response.json()
  
    return data.pendingGoals
  }
  