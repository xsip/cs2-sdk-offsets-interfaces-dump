// generated - do not edit!

import {server_CBeam} from './CBeam';
// Class size: 0x920
// BaseClass: : public CS2::server::CBeam
export const server_CEnvBeam  = {
	...server_CBeam,
	m_active: 2168n, // int32_t m_active; |  0x878 | Schema_Builtin | Size: 0x4
	m_spriteTexture: 2176n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_iszStartEntity: 2184n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEndEntity: 2192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_life: 2200n, // float32 m_life; |  0x898 | Schema_Builtin | Size: 0x4
	m_boltWidth: 2204n, // float32 m_boltWidth; |  0x89c | Schema_Builtin | Size: 0x4
	m_noiseAmplitude: 2208n, // float32 m_noiseAmplitude; |  0x8a0 | Schema_Builtin | Size: 0x4
	m_speed: 2212n, // int32_t m_speed; |  0x8a4 | Schema_Builtin | Size: 0x4
	m_restrike: 2216n, // float32 m_restrike; |  0x8a8 | Schema_Builtin | Size: 0x4
	m_iszSpriteName: 2224n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_frameStart: 2232n, // int32_t m_frameStart; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_vEndPointWorld: 2236n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vEndPointRelative: 2248n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_radius: 2260n, // float32 m_radius; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_TouchType: 2264n, // server::Touch_t  | Schema_DeclaredEnum | Size: 0x4
	m_iFilterName: 2272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hFilter: 2280n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszDecal: 2288n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnTouchedByEntity: 2296n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
