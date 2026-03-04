// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x6B8
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_EnvVolumetricFogController  = {
	...client_C_BaseEntity,
	m_flScattering: 1544n, // float32 m_flScattering; |  0x608 | Schema_Builtin | Size: 0x4
	m_TintColor: 1548n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flAnisotropy: 1552n, // float32 m_flAnisotropy; |  0x610 | Schema_Builtin | Size: 0x4
	m_flFadeSpeed: 1556n, // float32 m_flFadeSpeed; |  0x614 | Schema_Builtin | Size: 0x4
	m_flDrawDistance: 1560n, // float32 m_flDrawDistance; |  0x618 | Schema_Builtin | Size: 0x4
	m_flFadeInStart: 1564n, // float32 m_flFadeInStart; |  0x61c | Schema_Builtin | Size: 0x4
	m_flFadeInEnd: 1568n, // float32 m_flFadeInEnd; |  0x620 | Schema_Builtin | Size: 0x4
	m_flIndirectStrength: 1572n, // float32 m_flIndirectStrength; |  0x624 | Schema_Builtin | Size: 0x4
	m_nVolumeDepth: 1576n, // int32_t m_nVolumeDepth; |  0x628 | Schema_Builtin | Size: 0x4
	m_fFirstVolumeSliceThickness: 1580n, // float32 m_fFirstVolumeSliceThickness; |  0x62c | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimX: 1584n, // int32_t m_nIndirectTextureDimX; |  0x630 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimY: 1588n, // int32_t m_nIndirectTextureDimY; |  0x634 | Schema_Builtin | Size: 0x4
	m_nIndirectTextureDimZ: 1592n, // int32_t m_nIndirectTextureDimZ; |  0x638 | Schema_Builtin | Size: 0x4
	m_vBoxMins: 1596n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vBoxMaxs: 1608n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bActive: 1620n, // bool m_bActive; |  0x654 | Schema_Builtin | Size: 0x1
	m_flStartAnisoTime: 1624n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartScatterTime: 1628n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartDrawDistanceTime: 1632n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartAnisotropy: 1636n, // float32 m_flStartAnisotropy; |  0x664 | Schema_Builtin | Size: 0x4
	m_flStartScattering: 1640n, // float32 m_flStartScattering; |  0x668 | Schema_Builtin | Size: 0x4
	m_flStartDrawDistance: 1644n, // float32 m_flStartDrawDistance; |  0x66c | Schema_Builtin | Size: 0x4
	m_flDefaultAnisotropy: 1648n, // float32 m_flDefaultAnisotropy; |  0x670 | Schema_Builtin | Size: 0x4
	m_flDefaultScattering: 1652n, // float32 m_flDefaultScattering; |  0x674 | Schema_Builtin | Size: 0x4
	m_flDefaultDrawDistance: 1656n, // float32 m_flDefaultDrawDistance; |  0x678 | Schema_Builtin | Size: 0x4
	m_bStartDisabled: 1660n, // bool m_bStartDisabled; |  0x67c | Schema_Builtin | Size: 0x1
	m_bEnableIndirect: 1661n, // bool m_bEnableIndirect; |  0x67d | Schema_Builtin | Size: 0x1
	m_bIsMaster: 1662n, // bool m_bIsMaster; |  0x67e | Schema_Builtin | Size: 0x1
	m_hFogIndirectTexture: 1664n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_nForceRefreshCount: 1672n, // int32_t m_nForceRefreshCount; |  0x688 | Schema_Builtin | Size: 0x4
	m_fNoiseSpeed: 1676n, // float32 m_fNoiseSpeed; |  0x68c | Schema_Builtin | Size: 0x4
	m_fNoiseStrength: 1680n, // float32 m_fNoiseStrength; |  0x690 | Schema_Builtin | Size: 0x4
	m_vNoiseScale: 1684n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fWindSpeed: 1696n, // float32 m_fWindSpeed; |  0x6a0 | Schema_Builtin | Size: 0x4
	m_vWindDirection: 1700n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bFirstTime: 1712n, // bool m_bFirstTime; |  0x6b0 | Schema_Builtin | Size: 0x1
}
