import { artists } from './artists';
export type Track={title:string;duration?:string;audioUrl?:string};
export type Release={id:string;slug:string;artistId:string;artistName:string;title:string;format:string;releaseDate:string;genres:string[];artwork:string;description:string;bandcampUrl?:string;soundcloudUrl?:string;youtubeUrl?:string;tracks:Track[]};
const art=(n:number)=>`https://images.unsplash.com/photo-${['1519608487953-e999c86e7455','1519608487953-e999c86e7455','1493225457124-a3eb161ffa5f','1514525253161-7a46d19cd819','1492684223066-81342ee5ff52'][n%5]}?auto=format&fit=crop&w=1200&q=80`;
export const releases:Release[]=[
 {id:'wuxia',slug:'wuxia',artistId:'xindub',artistName:'Xindub',title:'WUXIA',format:'EP',releaseDate:'2026-06-20',genres:['DUB','DOWNTEMPO','DUBSTEP'],artwork:art(0),description:'Dub ambient, atmospheric bass and Asian-inspired textures. A cinematic journey between weight, space and silence.',bandcampUrl:'https://xindub.bandcamp.com/',soundcloudUrl:'https://soundcloud.com/',tracks:[{title:'Wuxia'},{title:'Mountain Path'},{title:'Hidden Temple'}]},
 {id:'shambhala',slug:'shambhala',artistId:'xindub',artistName:'Xindub',title:'SHAMBHALA',format:'ALBUM',releaseDate:'2026-08-01',genres:['DUB','WORLD','AMBIENT'],artwork:art(1),description:'A deeper world of bass, ritual atmosphere and organic textures.',bandcampUrl:'https://xindub.bandcamp.com/',tracks:[{title:'Shambhala'},{title:'Blue Smoke'},{title:'Inner Gate'}]},
 {id:'void-lines',slug:'void-lines',artistId:'cryoform',artistName:'Cryoform',title:'VOID LINES',format:'SINGLE',releaseDate:'2026-07-12',genres:['DUBSTEP','NEUROFUNK'],artwork:art(2),description:'Cold pressure, fractured drums and low-end architecture.',soundcloudUrl:'https://soundcloud.com/',tracks:[{title:'Void Lines'}]},
 {id:'night-ritual',slug:'night-ritual',artistId:'qaylun',artistName:'Qaylun',title:'NIGHT RITUAL',format:'EP',releaseDate:'2026-05-03',genres:['TECHNO','BASS'],artwork:art(3),description:'Warehouse energy with a dark, hypnotic pulse.',youtubeUrl:'https://www.youtube.com/',tracks:[{title:'Night Ritual'},{title:'Afterimage'}]},
 {id:'roots-frequency',slug:'roots-frequency',artistId:'sub-dock',artistName:'Sub Dock',title:'ROOTS FREQUENCY',format:'LP',releaseDate:'2026-03-14',genres:['DUB','ROOTS','REGGAE'],artwork:art(4),description:'Heavy roots pressure and spacious dub engineering.',soundcloudUrl:'https://soundcloud.com/',tracks:[{title:'Roots Frequency'},{title:'Low Tide'}]},
];
export const getReleaseBySlug=(slug:string)=>releases.find(r=>r.slug===slug);
export const getReleasesByArtist=(artistId:string)=>releases.filter(r=>r.artistId===artistId);
export const getArtistName=(id:string)=>artists.find(a=>a.id===id)?.name||id;
