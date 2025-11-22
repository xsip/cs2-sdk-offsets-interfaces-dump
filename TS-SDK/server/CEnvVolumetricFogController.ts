// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x5A0
// BaseClass: : public CS2::server::CBaseEntity
export const server_CEnvVolumetricFogController  = {
	...server_CBaseEntity,
	m_flScattering: 1264n, // float32 m_flScattering; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_TintColor: 1268n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flAnisotropy: 1272n, // float32 m_flAnisotropy; |  0x4f8 | Schema_Builtin | Size: 0x4
	m_flFadeSpeed: 1276n, // float32 m_flFadeSpeed; |  0x4fc | Schema_Builtin | Size: 0x4
	m_flDrawDistance: 1280n, // float32 m_flDrawDistance; |  0x500 | Schema_Builtin | Size: 0x4
	m_flFadeInStart: 1284n, // float32 m_flFadeInStart; |  0x504 | Schema_Builtin | Size: 0x4
	m_flFadeInEnd: 1288n, // float32 m_flFadeInEnd; |  0x508 | Schema_Builtin | Size: 0x4
	m_flIndirectStrength: 1292n, // float32 m_flIndirectStrength; |  0x50c | Schema_Builtin | Size: 0x4
	m_nVolumeDepth: 1296n, // int32_t m_nVolumeDepth; |  0x510 | Schema_Builtin | Size: 0x4
	m_fFirstVolumeSliceThickness: 1300n, // float32 m_fFirstVolumeSliceThickness; |  0x514 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimX: 1304n, // int32_t m_nIndirectTextureDimX; |  0x518 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimY: 1308n, // int32_t m_nIndirectTextureDimY; |  0x51c | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimZ: 1312n, // int32_t m_nIndirectTextureDimZ; |  0x520 | Schema_Builtin | Size: 0x4
	m_vBoxMins: 1316n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vBoxMaxs: 1328n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bActive: 1340n, // bool m_bActive; |  0x53c | Schema_Builtin | Size: 0x1
	m_flStartAnisoTime: 1344n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartScatterTime: 1348n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartDrawDistanceTime: 1352n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartAnisotropy: 1356n, // float32 m_flStartAnisotropy; |  0x54c | Schema_Builtin | Size: 0x4
	m_flStartScattering: 1360n, // float32 m_flStartScattering; |  0x550 | Schema_Builtin | Size: 0x4
	m_flStartDrawDistance: 1364n, // float32 m_flStartDrawDistance; |  0x554 | Schema_Builtin | Size: 0x4
	m_flDefaultAnisotropy: 1368n, // float32 m_flDefaultAnisotropy; |  0x558 | Schema_Builtin | Size: 0x4
	m_flDefaultScattering: 1372n, // float32 m_flDefaultScattering; |  0x55c | Schema_Builtin | Size: 0x4
	m_flDefaultDrawDistance: 1376n, // float32 m_flDefaultDrawDistance; |  0x560 | Schema_Builtin | Size: 0x4
	m_bStartDisabled: 1380n, // bool m_bStartDisabled; |  0x564 | Schema_Builtin | Size: 0x1
	m_bEnableIndirect: 1381n, // bool m_bEnableIndirect; |  0x565 | Schema_Builtin | Size: 0x1
	m_bIsMaster: 1382n, // bool m_bIsMaster; |  0x566 | Schema_Builtin | Size: 0x1
	m_hFogIndirectTexture: 1384n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_nForceRefreshCount: 1392n, // int32_t m_nForceRefreshCount; |  0x570 | Schema_Builtin | Size: 0x4
	m_fNoiseSpeed: 1396n, // float32 m_fNoiseSpeed; |  0x574 | Schema_Builtin | Size: 0x4
	m_fNoiseStrength: 1400n, // float32 m_fNoiseStrength; |  0x578 | Schema_Builtin | Size: 0x4
	m_vNoiseScale: 1404n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fWindSpeed: 1416n, // float32 m_fWindSpeed; |  0x588 | Schema_Builtin | Size: 0x4
	m_vWindDirection: 1420n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bFirstTime: 1432n, // bool m_bFirstTime; |  0x598 | Schema_Builtin | Size: 0x1
}
