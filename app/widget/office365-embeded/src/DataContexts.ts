import { DataContext, UIView, jsonServerProvider } from "@tuval/forms";


export const RealmoceanDataContext = (content:  UIView) => (
    DataContext(content).dataProvider(jsonServerProvider('/realmocean'))
)

export const RealmDataContext = (content:  UIView) => (
    DataContext(content).dataProvider(jsonServerProvider('/api'))
)