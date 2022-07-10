import { TileSetAsset } from "./assets";


/**
 * Resolves the tile type if it doesn't exist
 * and returns all the valid tile types
 * @param tileType 
 * @param tileSetMap 
 */
export const tileSetResolve = (
  tileType: number,
  tileSetMap: TileSetAsset["seemlessMap"],
): Array<number> => {
  
  // Check if the tiletype exists if so just return it
  if (tileSetMap[tileType] !== undefined) {
    // Return the first texture
    return tileSetMap[tileType];
  }
  
  // Find which walls in the + sign
  // exists
  const tileMaskType = parseInt(`01011010`, 2) & tileType;
  
  const tileTypes: Array<number> = [];
  
  // Find every combination that also
  // has that plus sign
  for (let i = 0; i < 16; i++) {
    const a = i % 2;
    const b = Math.floor(i / 2) % 2;
    const c = Math.floor(i / 4) % 2;
    const d = Math.floor(i / 8) % 2;
    tileTypes.push(
      tileMaskType | parseInt(`${a}0${b}00${c}0${d}`, 2)
    )
  }
  
  return getTileTypesFrames(tileTypes, tileSetMap);
}



/**
 * Given an array of tile types
 * return an array containing all the frames
 * that belong to these tile types
 * @param tileTypes 
 * @param tileSetMap 
 * @returns 
 */
const getTileTypesFrames = (
  tileTypes: Array<number>,
  tileSetMap: TileSetAsset["seemlessMap"]
): Array<number> => {
  let out: Array<number> = [];
  for (const t of tileTypes) {
    const frames = tileSetMap[t];
    if (frames !== undefined) {
      out = out.concat(frames);
    }
  }
  
  return out;
}