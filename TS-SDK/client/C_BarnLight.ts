// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1198
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_BarnLight  = {
	...client_C_BaseModelEntity,
	m_bEnabled: 3720n, // bool m_bEnabled; |  0xe88 | Schema_Builtin | Size: 0x1
	m_nColorMode: 3724n, // int32_t m_nColorMode; |  0xe8c | Schema_Builtin | Size: 0x4
	m_Color: 3728n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flColorTemperature: 3732n, // float32 m_flColorTemperature; |  0xe94 | Schema_Builtin | Size: 0x4
	m_flBrightness: 3736n, // float32 m_flBrightness; |  0xe98 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 3740n, // float32 m_flBrightnessScale; |  0xe9c | Schema_Builtin | Size: 0x4
	m_nDirectLight: 3744n, // int32_t m_nDirectLight; |  0xea0 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 3748n, // int32_t m_nBakedShadowIndex; |  0xea4 | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 3752n, // int32_t m_nLightPathUniqueId; |  0xea8 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 3756n, // int32_t m_nLightMapUniqueId; |  0xeac | Schema_Builtin | Size: 0x4
	m_nLuminaireShape: 3760n, // int32_t m_nLuminaireShape; |  0xeb0 | Schema_Builtin | Size: 0x4
	m_flLuminaireSize: 3764n, // float32 m_flLuminaireSize; |  0xeb4 | Schema_Builtin | Size: 0x4
	m_flLuminaireAnisotropy: 3768n, // float32 m_flLuminaireAnisotropy; |  0xeb8 | Schema_Builtin | Size: 0x4
	m_LightStyleString: 3776n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flLightStyleStartTime: 3784n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_QueuedLightStyleStrings: 3792n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleEvents: 3816n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleTargets: 3840n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_StyleEvent: 3864n, // GlobalTypes::CEntityIOOutput[4]  | Schema_FixedArray | Size: 0x60
	m_hLightCookie: 3960n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_flShape: 3968n, // float32 m_flShape; |  0xf80 | Schema_Builtin | Size: 0x4
	m_flSoftX: 3972n, // float32 m_flSoftX; |  0xf84 | Schema_Builtin | Size: 0x4
	m_flSoftY: 3976n, // float32 m_flSoftY; |  0xf88 | Schema_Builtin | Size: 0x4
	m_flSkirt: 3980n, // float32 m_flSkirt; |  0xf8c | Schema_Builtin | Size: 0x4
	m_flSkirtNear: 3984n, // float32 m_flSkirtNear; |  0xf90 | Schema_Builtin | Size: 0x4
	m_vSizeParams: 3988n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRange: 4000n, // float32 m_flRange; |  0xfa0 | Schema_Builtin | Size: 0x4
	m_vShear: 4004n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBakeSpecularToCubemaps: 4016n, // int32_t m_nBakeSpecularToCubemaps; |  0xfb0 | Schema_Builtin | Size: 0x4
	m_vBakeSpecularToCubemapsSize: 4020n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nCastShadows: 4032n, // int32_t m_nCastShadows; |  0xfc0 | Schema_Builtin | Size: 0x4
	m_nShadowMapSize: 4036n, // int32_t m_nShadowMapSize; |  0xfc4 | Schema_Builtin | Size: 0x4
	m_nShadowPriority: 4040n, // int32_t m_nShadowPriority; |  0xfc8 | Schema_Builtin | Size: 0x4
	m_bContactShadow: 4044n, // bool m_bContactShadow; |  0xfcc | Schema_Builtin | Size: 0x1
	m_bForceShadowsEnabled: 4045n, // bool m_bForceShadowsEnabled; |  0xfcd | Schema_Builtin | Size: 0x1
	m_nBounceLight: 4048n, // int32_t m_nBounceLight; |  0xfd0 | Schema_Builtin | Size: 0x4
	m_flBounceScale: 4052n, // float32 m_flBounceScale; |  0xfd4 | Schema_Builtin | Size: 0x4
	m_bDynamicBounce: 4056n, // bool m_bDynamicBounce; |  0xfd8 | Schema_Builtin | Size: 0x1
	m_flMinRoughness: 4060n, // float32 m_flMinRoughness; |  0xfdc | Schema_Builtin | Size: 0x4
	m_vAlternateColor: 4064n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fAlternateColorBrightness: 4076n, // float32 m_fAlternateColorBrightness; |  0xfec | Schema_Builtin | Size: 0x4
	m_nFog: 4080n, // int32_t m_nFog; |  0xff0 | Schema_Builtin | Size: 0x4
	m_flFogStrength: 4084n, // float32 m_flFogStrength; |  0xff4 | Schema_Builtin | Size: 0x4
	m_nFogShadows: 4088n, // int32_t m_nFogShadows; |  0xff8 | Schema_Builtin | Size: 0x4
	m_flFogScale: 4092n, // float32 m_flFogScale; |  0xffc | Schema_Builtin | Size: 0x4
	m_bFogMixedShadows: 4096n, // bool m_bFogMixedShadows; |  0x1000 | Schema_Builtin | Size: 0x1
	m_flFadeSizeStart: 4100n, // float32 m_flFadeSizeStart; |  0x1004 | Schema_Builtin | Size: 0x4
	m_flFadeSizeEnd: 4104n, // float32 m_flFadeSizeEnd; |  0x1008 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeStart: 4108n, // float32 m_flShadowFadeSizeStart; |  0x100c | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeEnd: 4112n, // float32 m_flShadowFadeSizeEnd; |  0x1010 | Schema_Builtin | Size: 0x4
	m_bPrecomputedFieldsValid: 4116n, // bool m_bPrecomputedFieldsValid; |  0x1014 | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 4120n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 4132n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 4144n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 4156n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 4168n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPrecomputedSubFrusta: 4180n, // int32_t m_nPrecomputedSubFrusta; |  0x1054 | Schema_Builtin | Size: 0x4
	m_vPrecomputedOBBOrigin0: 4184n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles0: 4196n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent0: 4208n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin1: 4220n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles1: 4232n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent1: 4244n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin2: 4256n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles2: 4268n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent2: 4280n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin3: 4292n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles3: 4304n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent3: 4316n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin4: 4328n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles4: 4340n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent4: 4352n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin5: 4364n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles5: 4376n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent5: 4388n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bInitialBoneSetup: 4464n, // bool m_bInitialBoneSetup; |  0x1170 | Schema_Builtin | Size: 0x1
	m_VisClusters: 4472n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
