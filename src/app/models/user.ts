export interface User {
    userId: string | undefined,
    fullName: string,
    userName: string,
    roleId: string,
    roleName: string,
    state: boolean
}

export interface Login {
    userName: string | undefined,
}