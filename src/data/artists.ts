export type Artist={id:string;name:string;slug:string;bio?:string};
export const artists:Artist[] = [
 ['qaylun','Qaylun'],['cryoform','Cryoform'],['sub-dock','Sub Dock'],['subcoil','Subcoil'],['padubwan','Padubwan'],['midori-wakkusu','Midori Wakkusu'],['aurorynth','Aurorynth'],['spectr-drop','Spectr Drop'],['qowle','Qowle'],['flute-god','Flute God'],['xindub','Xindub'],['mecetry','Mecetry'],['ondalis','Ondalis'],['qalvex','Qalvex'],['vikrant','Vikrant']
].map(([id,name])=>({id,name,slug:id,bio:`${name} — an artist shaping the deeper side of the DEPTH UNIT signal.`}));
export const getArtistBySlug=(slug:string)=>artists.find(a=>a.slug===slug);
