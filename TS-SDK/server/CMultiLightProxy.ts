// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x4E8
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CMultiLightProxy  = {
	...server_CLogicalEntity,
	m_iszLightNameFilter: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLightClassFilter: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flLightRadiusFilter: 1208n, // float32 m_flLightRadiusFilter; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_flBrightnessDelta: 1212n, // float32 m_flBrightnessDelta; |  0x4bc | Schema_Builtin | Size: 0x4
	m_bPerformScreenFade: 1216n, // bool m_bPerformScreenFade; |  0x4c0 | Schema_Builtin | Size: 0x1
	m_flTargetBrightnessMultiplier: 1220n, // float32 m_flTargetBrightnessMultiplier; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_flCurrentBrightnessMultiplier: 1224n, // float32 m_flCurrentBrightnessMultiplier; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_vecLights: 1232n, // server::CUtlVector<GlobalTypes::CHandle<server::CLightEntity>>  | Schema_Atomic | Size: 0x18
}
