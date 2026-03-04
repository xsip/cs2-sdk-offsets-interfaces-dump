// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x650
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_EnvVolumetricFogVolume  = {
	...client_C_BaseEntity,
	m_bActive: 1544n, // bool m_bActive; |  0x608 | Schema_Builtin | Size: 0x1
	m_vBoxMins: 1548n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vBoxMaxs: 1560n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bStartDisabled: 1572n, // bool m_bStartDisabled; |  0x624 | Schema_Builtin | Size: 0x1
	m_bIndirectUseLPVs: 1573n, // bool m_bIndirectUseLPVs; |  0x625 | Schema_Builtin | Size: 0x1
	m_flStrength: 1576n, // float32 m_flStrength; |  0x628 | Schema_Builtin | Size: 0x4
	m_nFalloffShape: 1580n, // int32_t m_nFalloffShape; |  0x62c | Schema_Builtin | Size: 0x4
	m_flFalloffExponent: 1584n, // float32 m_flFalloffExponent; |  0x630 | Schema_Builtin | Size: 0x4
	m_flHeightFogDepth: 1588n, // float32 m_flHeightFogDepth; |  0x634 | Schema_Builtin | Size: 0x4
	m_fHeightFogEdgeWidth: 1592n, // float32 m_fHeightFogEdgeWidth; |  0x638 | Schema_Builtin | Size: 0x4
	m_fIndirectLightStrength: 1596n, // float32 m_fIndirectLightStrength; |  0x63c | Schema_Builtin | Size: 0x4
	m_fSunLightStrength: 1600n, // float32 m_fSunLightStrength; |  0x640 | Schema_Builtin | Size: 0x4
	m_fNoiseStrength: 1604n, // float32 m_fNoiseStrength; |  0x644 | Schema_Builtin | Size: 0x4
	m_TintColor: 1608n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bOverrideTintColor: 1612n, // bool m_bOverrideTintColor; |  0x64c | Schema_Builtin | Size: 0x1
	m_bOverrideIndirectLightStrength: 1613n, // bool m_bOverrideIndirectLightStrength; |  0x64d | Schema_Builtin | Size: 0x1
	m_bOverrideSunLightStrength: 1614n, // bool m_bOverrideSunLightStrength; |  0x64e | Schema_Builtin | Size: 0x1
	m_bOverrideNoiseStrength: 1615n, // bool m_bOverrideNoiseStrength; |  0x64f | Schema_Builtin | Size: 0x1
}
