// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x538
// BaseClass: : public CS2::server::CBaseEntity
export const server_CEnvVolumetricFogVolume  = {
	...server_CBaseEntity,
	m_bActive: 1264n, // bool m_bActive; |  0x4f0 | Schema_Builtin | Size: 0x1
	m_vBoxMins: 1268n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vBoxMaxs: 1280n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bStartDisabled: 1292n, // bool m_bStartDisabled; |  0x50c | Schema_Builtin | Size: 0x1
	m_bIndirectUseLPVs: 1293n, // bool m_bIndirectUseLPVs; |  0x50d | Schema_Builtin | Size: 0x1
	m_flStrength: 1296n, // float32 m_flStrength; |  0x510 | Schema_Builtin | Size: 0x4
	m_nFalloffShape: 1300n, // int32_t m_nFalloffShape; |  0x514 | Schema_Builtin | Size: 0x4
	m_flFalloffExponent: 1304n, // float32 m_flFalloffExponent; |  0x518 | Schema_Builtin | Size: 0x4
	m_flHeightFogDepth: 1308n, // float32 m_flHeightFogDepth; |  0x51c | Schema_Builtin | Size: 0x4
	m_fHeightFogEdgeWidth: 1312n, // float32 m_fHeightFogEdgeWidth; |  0x520 | Schema_Builtin | Size: 0x4
	m_fIndirectLightStrength: 1316n, // float32 m_fIndirectLightStrength; |  0x524 | Schema_Builtin | Size: 0x4
	m_fSunLightStrength: 1320n, // float32 m_fSunLightStrength; |  0x528 | Schema_Builtin | Size: 0x4
	m_fNoiseStrength: 1324n, // float32 m_fNoiseStrength; |  0x52c | Schema_Builtin | Size: 0x4
	m_TintColor: 1328n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bOverrideTintColor: 1332n, // bool m_bOverrideTintColor; |  0x534 | Schema_Builtin | Size: 0x1
	m_bOverrideIndirectLightStrength: 1333n, // bool m_bOverrideIndirectLightStrength; |  0x535 | Schema_Builtin | Size: 0x1
	m_bOverrideSunLightStrength: 1334n, // bool m_bOverrideSunLightStrength; |  0x536 | Schema_Builtin | Size: 0x1
	m_bOverrideNoiseStrength: 1335n, // bool m_bOverrideNoiseStrength; |  0x537 | Schema_Builtin | Size: 0x1
}
