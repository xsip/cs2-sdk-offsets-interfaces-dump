// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x548
// BaseClass: : public CS2::server::CPointEntity
export const server_CPathTrack  = {
	...server_CPointEntity,
	m_pnext: 1264n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_pprevious: 1272n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_paltpath: 1280n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_flRadius: 1288n, // float32 m_flRadius; |  0x508 | Schema_Builtin | Size: 0x4
	m_length: 1292n, // float32 m_length; |  0x50c | Schema_Builtin | Size: 0x4
	m_altName: 1296n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nIterVal: 1304n, // int32_t m_nIterVal; |  0x518 | Schema_Builtin | Size: 0x4
	m_eOrientationType: 1308n, // server::TrackOrientationType_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnPass: 1312n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
