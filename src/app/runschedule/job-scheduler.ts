export interface JobScheduler {
    id: number;
    jobName: string;
    batchFilePath: string;
    scheduleDate: Date;
    status: string;
}
