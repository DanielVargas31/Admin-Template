export interface Settings {
    settingId: string | undefined,
    surveyPercentage: string | null,
    initialRange: Date,
    initialRangeString: Date,
    days: number,
    numberInteractions: number | null,
    channelId: string | undefined,
    channelName: string,
    state: boolean
}
