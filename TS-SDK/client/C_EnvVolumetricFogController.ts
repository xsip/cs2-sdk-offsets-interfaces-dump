// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x6A8
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_EnvVolumetricFogController  = {
	...client_C_BaseEntity,
	m_flScattering: 1528n, // float32 m_flScattering; |  0x5f8 | Schema_Builtin | Size: 0x4
	m_TintColor: 1532n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flAnisotropy: 1536n, // float32 m_flAnisotropy; |  0x600 | Schema_Builtin | Size: 0x4
	m_flFadeSpeed: 1540n, // float32 m_flFadeSpeed; |  0x604 | Schema_Builtin | Size: 0x4
	m_flDrawDistance: 1544n, // float32 m_flDrawDistance; |  0x608 | Schema_Builtin | Size: 0x4
	m_flFadeInStart: 1548n, // float32 m_flFadeInStart; |  0x60c | Schema_Builtin | Size: 0x4
	m_flFadeInEnd: 1552n, // float32 m_flFadeInEnd; |  0x610 | Schema_Builtin | Size: 0x4
	m_flIndirectStrength: 1556n, // float32 m_flIndirectStrength; |  0x614 | Schema_Builtin | Size: 0x4
	m_nVolumeDepth: 1560n, // int32_t m_nVolumeDepth; |  0x618 | Schema_Builtin | Size: 0x4
	m_fFirstVolumeSliceThickness: 1564n, // float32 m_fFirstVolumeSliceThickness; |  0x61c | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimX: 1568n, // int32_t m_nIndirectTextureDimX; |  0x620 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimY: 1572n, // int32_t m_nIndirectTextureDimY; |  0x624 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimZ: 1576n, // int32_t m_nIndirectTextureDimZ; |  0x628 | Schema_Builtin | Size: 0x4
	m_vBoxMins: 1580n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vBoxMaxs: 1592n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bActive: 1604n, // bool m_bActive; |  0x644 | Schema_Builtin | Size: 0x1
	m_flStartAnisoTime: 1608n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartScatterTime: 1612n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartDrawDistanceTime: 1616n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartAnisotropy: 1620n, // float32 m_flStartAnisotropy; |  0x654 | Schema_Builtin | Size: 0x4
	m_flStartScattering: 1624n, // float32 m_flStartScattering; |  0x658 | Schema_Builtin | Size: 0x4
	m_flStartDrawDistance: 1628n, // float32 m_flStartDrawDistance; |  0x65c | Schema_Builtin | Size: 0x4
	m_flDefaultAnisotropy: 1632n, // float32 m_flDefaultAnisotropy; |  0x660 | Schema_Builtin | Size: 0x4
	m_flDefaultScattering: 1636n, // float32 m_flDefaultScattering; |  0x664 | Schema_Builtin | Size: 0x4
	m_flDefaultDrawDistance: 1640n, // float32 m_flDefaultDrawDistance; |  0x668 | Schema_Builtin | Size: 0x4
	m_bStartDisabled: 1644n, // bool m_bStartDisabled; |  0x66c | Schema_Builtin | Size: 0x1
	m_bEnableIndirect: 1645n, // bool m_bEnableIndirect; |  0x66d | Schema_Builtin | Size: 0x1
	m_bIsMaster: 1646n, // bool m_bIsMaster; |  0x66e | Schema_Builtin | Size: 0x1
	m_hFogIndirectTexture: 1648n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_nForceRefreshCount: 1656n, // int32_t m_nForceRefreshCount; |  0x678 | Schema_Builtin | Size: 0x4
	m_fNoiseSpeed: 1660n, // float32 m_fNoiseSpeed; |  0x67c | Schema_Builtin | Size: 0x4
	m_fNoiseStrength: 1664n, // float32 m_fNoiseStrength; |  0x680 | Schema_Builtin | Size: 0x4
	m_vNoiseScale: 1668n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fWindSpeed: 1680n, // float32 m_fWindSpeed; |  0x690 | Schema_Builtin | Size: 0x4
	m_vWindDirection: 1684n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bFirstTime: 1696n, // bool m_bFirstTime; |  0x6a0 | Schema_Builtin | Size: 0x1
}
