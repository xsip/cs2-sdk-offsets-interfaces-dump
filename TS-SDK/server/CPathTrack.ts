// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x4F0
// BaseClass: : public CS2::server::CPointEntity
export const server_CPathTrack  = {
	...server_CPointEntity,
	m_pnext: 1192n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_pprevious: 1200n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_paltpath: 1208n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_flRadius: 1216n, // float32 m_flRadius; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_length: 1220n, // float32 m_length; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_altName: 1224n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nIterVal: 1232n, // int32_t m_nIterVal; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_eOrientationType: 1236n, // server::TrackOrientationType_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnPass: 1240n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
