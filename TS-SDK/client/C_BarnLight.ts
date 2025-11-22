// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1200
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_BarnLight  = {
	...client_C_BaseModelEntity,
	m_bEnabled: 3760n, // bool m_bEnabled; |  0xeb0 | Schema_Builtin | Size: 0x1
	m_nColorMode: 3764n, // int32_t m_nColorMode; |  0xeb4 | Schema_Builtin | Size: 0x4
	m_Color: 3768n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flColorTemperature: 3772n, // float32 m_flColorTemperature; |  0xebc | Schema_Builtin | Size: 0x4
	m_flBrightness: 3776n, // float32 m_flBrightness; |  0xec0 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 3780n, // float32 m_flBrightnessScale; |  0xec4 | Schema_Builtin | Size: 0x4
	m_nDirectLight: 3784n, // int32_t m_nDirectLight; |  0xec8 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 3788n, // int32_t m_nBakedShadowIndex; |  0xecc | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 3792n, // int32_t m_nLightPathUniqueId; |  0xed0 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 3796n, // int32_t m_nLightMapUniqueId; |  0xed4 | Schema_Builtin | Size: 0x4
	m_nLuminaireShape: 3800n, // int32_t m_nLuminaireShape; |  0xed8 | Schema_Builtin | Size: 0x4
	m_flLuminaireSize: 3804n, // float32 m_flLuminaireSize; |  0xedc | Schema_Builtin | Size: 0x4
	m_flLuminaireAnisotropy: 3808n, // float32 m_flLuminaireAnisotropy; |  0xee0 | Schema_Builtin | Size: 0x4
	m_LightStyleString: 3816n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flLightStyleStartTime: 3824n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_QueuedLightStyleStrings: 3832n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleEvents: 3856n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleTargets: 3880n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_StyleEvent: 3904n, // GlobalTypes::CEntityIOOutput[4]  | Schema_FixedArray | Size: 0x280
	m_hLightCookie: 4064n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_flShape: 4072n, // float32 m_flShape; |  0xfe8 | Schema_Builtin | Size: 0x4
	m_flSoftX: 4076n, // float32 m_flSoftX; |  0xfec | Schema_Builtin | Size: 0x4
	m_flSoftY: 4080n, // float32 m_flSoftY; |  0xff0 | Schema_Builtin | Size: 0x4
	m_flSkirt: 4084n, // float32 m_flSkirt; |  0xff4 | Schema_Builtin | Size: 0x4
	m_flSkirtNear: 4088n, // float32 m_flSkirtNear; |  0xff8 | Schema_Builtin | Size: 0x4
	m_vSizeParams: 4092n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRange: 4104n, // float32 m_flRange; |  0x1008 | Schema_Builtin | Size: 0x4
	m_vShear: 4108n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBakeSpecularToCubemaps: 4120n, // int32_t m_nBakeSpecularToCubemaps; |  0x1018 | Schema_Builtin | Size: 0x4
	m_vBakeSpecularToCubemapsSize: 4124n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nCastShadows: 4136n, // int32_t m_nCastShadows; |  0x1028 | Schema_Builtin | Size: 0x4
	m_nShadowMapSize: 4140n, // int32_t m_nShadowMapSize; |  0x102c | Schema_Builtin | Size: 0x4
	m_nShadowPriority: 4144n, // int32_t m_nShadowPriority; |  0x1030 | Schema_Builtin | Size: 0x4
	m_bContactShadow: 4148n, // bool m_bContactShadow; |  0x1034 | Schema_Builtin | Size: 0x1
	m_bForceShadowsEnabled: 4149n, // bool m_bForceShadowsEnabled; |  0x1035 | Schema_Builtin | Size: 0x1
	m_nBounceLight: 4152n, // int32_t m_nBounceLight; |  0x1038 | Schema_Builtin | Size: 0x4
	m_flBounceScale: 4156n, // float32 m_flBounceScale; |  0x103c | Schema_Builtin | Size: 0x4
	m_flMinRoughness: 4160n, // float32 m_flMinRoughness; |  0x1040 | Schema_Builtin | Size: 0x4
	m_vAlternateColor: 4164n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fAlternateColorBrightness: 4176n, // float32 m_fAlternateColorBrightness; |  0x1050 | Schema_Builtin | Size: 0x4
	m_nFog: 4180n, // int32_t m_nFog; |  0x1054 | Schema_Builtin | Size: 0x4
	m_flFogStrength: 4184n, // float32 m_flFogStrength; |  0x1058 | Schema_Builtin | Size: 0x4
	m_nFogShadows: 4188n, // int32_t m_nFogShadows; |  0x105c | Schema_Builtin | Size: 0x4
	m_flFogScale: 4192n, // float32 m_flFogScale; |  0x1060 | Schema_Builtin | Size: 0x4
	m_bFogMixedShadows: 4196n, // bool m_bFogMixedShadows; |  0x1064 | Schema_Builtin | Size: 0x1
	m_flFadeSizeStart: 4200n, // float32 m_flFadeSizeStart; |  0x1068 | Schema_Builtin | Size: 0x4
	m_flFadeSizeEnd: 4204n, // float32 m_flFadeSizeEnd; |  0x106c | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeStart: 4208n, // float32 m_flShadowFadeSizeStart; |  0x1070 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeEnd: 4212n, // float32 m_flShadowFadeSizeEnd; |  0x1074 | Schema_Builtin | Size: 0x4
	m_bPrecomputedFieldsValid: 4216n, // bool m_bPrecomputedFieldsValid; |  0x1078 | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 4220n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 4232n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 4244n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 4256n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 4268n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPrecomputedSubFrusta: 4280n, // int32_t m_nPrecomputedSubFrusta; |  0x10b8 | Schema_Builtin | Size: 0x4
	m_vPrecomputedOBBOrigin0: 4284n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles0: 4296n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent0: 4308n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin1: 4320n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles1: 4332n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent1: 4344n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin2: 4356n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles2: 4368n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent2: 4380n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin3: 4392n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles3: 4404n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent3: 4416n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin4: 4428n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles4: 4440n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent4: 4452n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin5: 4464n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles5: 4476n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent5: 4488n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bInitialBoneSetup: 4568n, // bool m_bInitialBoneSetup; |  0x11d8 | Schema_Builtin | Size: 0x1
	m_VisClusters: 4576n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
