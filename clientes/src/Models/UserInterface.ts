export interface UserInterface{
    id: number,
    name: string,
    username: string,
    address: Address
    phone: string,
    website: string,
    company:Company
}

export interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo:Goe
}
export interface Company{
    name: string,
    catchPhrese: string
    bs:string
}
export interface Goe{
    lat: string
    lon:string
}