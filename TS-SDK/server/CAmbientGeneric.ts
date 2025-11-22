// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x598
// BaseClass: : public CS2::server::CPointEntity
export const server_CAmbientGeneric  = {
	...server_CPointEntity,
	m_radius: 1264n, // float32 m_radius; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_flMaxRadius: 1268n, // float32 m_flMaxRadius; |  0x4f4 | Schema_Builtin | Size: 0x4
	m_iSoundLevel: 1272n, // soundsystem::soundlevel_t  | Schema_DeclaredEnum | Size: 0x4
	m_dpv: 1276n, // server::dynpitchvol_t  | Schema_DeclaredClass | Size: 0x64
	m_fActive: 1376n, // bool m_fActive; |  0x560 | Schema_Builtin | Size: 0x1
	m_fLooping: 1377n, // bool m_fLooping; |  0x561 | Schema_Builtin | Size: 0x1
	m_iszSound: 1384n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sSourceEntName: 1392n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hSoundSource: 1400n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nSoundSourceEntIndex: 1404n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
}
