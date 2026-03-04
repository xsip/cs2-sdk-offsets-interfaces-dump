// generated - do not edit!

import {server_CBeam} from './CBeam';
// Class size: 0x868
// BaseClass: : public CS2::server::CBeam
export const server_CEnvBeam  = {
	...server_CBeam,
	m_active: 2000n, // int32_t m_active; |  0x7d0 | Schema_Builtin | Size: 0x4
	m_spriteTexture: 2008n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_iszStartEntity: 2016n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEndEntity: 2024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_life: 2032n, // float32 m_life; |  0x7f0 | Schema_Builtin | Size: 0x4
	m_boltWidth: 2036n, // float32 m_boltWidth; |  0x7f4 | Schema_Builtin | Size: 0x4
	m_noiseAmplitude: 2040n, // float32 m_noiseAmplitude; |  0x7f8 | Schema_Builtin | Size: 0x4
	m_speed: 2044n, // int32_t m_speed; |  0x7fc | Schema_Builtin | Size: 0x4
	m_restrike: 2048n, // float32 m_restrike; |  0x800 | Schema_Builtin | Size: 0x4
	m_iszSpriteName: 2056n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_frameStart: 2064n, // int32_t m_frameStart; |  0x810 | Schema_Builtin | Size: 0x4
	m_vEndPointWorld: 2068n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vEndPointRelative: 2080n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_radius: 2092n, // float32 m_radius; |  0x82c | Schema_Builtin | Size: 0x4
	m_TouchType: 2096n, // server::Touch_t  | Schema_DeclaredEnum | Size: 0x4
	m_iFilterName: 2104n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hFilter: 2112n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszDecal: 2120n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnTouchedByEntity: 2128n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
