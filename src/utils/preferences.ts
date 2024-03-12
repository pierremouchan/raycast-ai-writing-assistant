import { getPreferenceValues } from "@raycast/api";

 interface PreferencesType {
  apiKey: string;
  commands:string

}


const PREFERENCES = getPreferenceValues<PreferencesType>();

export default PREFERENCES