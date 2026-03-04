// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x550
// BaseClass: : public CS2::server::CPointEntity
export const server_CAmbientGeneric  = {
	...server_CPointEntity,
	m_radius: 1192n, // float32 m_radius; |  0x4a8 | Schema_Builtin | Size: 0x4
	m_flMaxRadius: 1196n, // float32 m_flMaxRadius; |  0x4ac | Schema_Builtin | Size: 0x4
	m_iSoundLevel: 1200n, // client::soundlevel_t  | Schema_DeclaredEnum | Size: 0x4
	m_dpv: 1204n, // server::dynpitchvol_t  | Schema_DeclaredClass | Size: 0x64
	m_fActive: 1304n, // bool m_fActive; |  0x518 | Schema_Builtin | Size: 0x1
	m_fLooping: 1305n, // bool m_fLooping; |  0x519 | Schema_Builtin | Size: 0x1
	m_iszSound: 1312n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sSourceEntName: 1320n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hSoundSource: 1328n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nSoundSourceEntIndex: 1332n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
}
