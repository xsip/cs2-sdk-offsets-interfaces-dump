// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x530
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CMultiLightProxy  = {
	...server_CLogicalEntity,
	m_iszLightNameFilter: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLightClassFilter: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flLightRadiusFilter: 1280n, // float32 m_flLightRadiusFilter; |  0x500 | Schema_Builtin | Size: 0x4
	m_flBrightnessDelta: 1284n, // float32 m_flBrightnessDelta; |  0x504 | Schema_Builtin | Size: 0x4
	m_bPerformScreenFade: 1288n, // bool m_bPerformScreenFade; |  0x508 | Schema_Builtin | Size: 0x1
	m_flTargetBrightnessMultiplier: 1292n, // float32 m_flTargetBrightnessMultiplier; |  0x50c | Schema_Builtin | Size: 0x4
	m_flCurrentBrightnessMultiplier: 1296n, // float32 m_flCurrentBrightnessMultiplier; |  0x510 | Schema_Builtin | Size: 0x4
	m_vecLights: 1304n, // server::CUtlVector<GlobalTypes::CHandle<server::CLightEntity>>  | Schema_Atomic | Size: 0x18
}
