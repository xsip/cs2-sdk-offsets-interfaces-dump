// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xB00
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBarnLight  = {
	...server_CBaseModelEntity,
	m_bEnabled: 2008n, // bool m_bEnabled; |  0x7d8 | Schema_Builtin | Size: 0x1
	m_nColorMode: 2012n, // int32_t m_nColorMode; |  0x7dc | Schema_Builtin | Size: 0x4
	m_Color: 2016n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flColorTemperature: 2020n, // float32 m_flColorTemperature; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_flBrightness: 2024n, // float32 m_flBrightness; |  0x7e8 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 2028n, // float32 m_flBrightnessScale; |  0x7ec | Schema_Builtin | Size: 0x4
	m_nDirectLight: 2032n, // int32_t m_nDirectLight; |  0x7f0 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 2036n, // int32_t m_nBakedShadowIndex; |  0x7f4 | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 2040n, // int32_t m_nLightPathUniqueId; |  0x7f8 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 2044n, // int32_t m_nLightMapUniqueId; |  0x7fc | Schema_Builtin | Size: 0x4
	m_nLuminaireShape: 2048n, // int32_t m_nLuminaireShape; |  0x800 | Schema_Builtin | Size: 0x4
	m_flLuminaireSize: 2052n, // float32 m_flLuminaireSize; |  0x804 | Schema_Builtin | Size: 0x4
	m_flLuminaireAnisotropy: 2056n, // float32 m_flLuminaireAnisotropy; |  0x808 | Schema_Builtin | Size: 0x4
	m_LightStyleString: 2064n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flLightStyleStartTime: 2072n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_QueuedLightStyleStrings: 2080n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleEvents: 2104n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleTargets: 2128n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_StyleEvent: 2152n, // GlobalTypes::CEntityIOOutput[4]  | Schema_FixedArray | Size: 0x280
	m_hLightCookie: 2344n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_flShape: 2352n, // float32 m_flShape; |  0x930 | Schema_Builtin | Size: 0x4
	m_flSoftX: 2356n, // float32 m_flSoftX; |  0x934 | Schema_Builtin | Size: 0x4
	m_flSoftY: 2360n, // float32 m_flSoftY; |  0x938 | Schema_Builtin | Size: 0x4
	m_flSkirt: 2364n, // float32 m_flSkirt; |  0x93c | Schema_Builtin | Size: 0x4
	m_flSkirtNear: 2368n, // float32 m_flSkirtNear; |  0x940 | Schema_Builtin | Size: 0x4
	m_vSizeParams: 2372n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRange: 2384n, // float32 m_flRange; |  0x950 | Schema_Builtin | Size: 0x4
	m_vShear: 2388n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBakeSpecularToCubemaps: 2400n, // int32_t m_nBakeSpecularToCubemaps; |  0x960 | Schema_Builtin | Size: 0x4
	m_vBakeSpecularToCubemapsSize: 2404n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nCastShadows: 2416n, // int32_t m_nCastShadows; |  0x970 | Schema_Builtin | Size: 0x4
	m_nShadowMapSize: 2420n, // int32_t m_nShadowMapSize; |  0x974 | Schema_Builtin | Size: 0x4
	m_nShadowPriority: 2424n, // int32_t m_nShadowPriority; |  0x978 | Schema_Builtin | Size: 0x4
	m_bContactShadow: 2428n, // bool m_bContactShadow; |  0x97c | Schema_Builtin | Size: 0x1
	m_bForceShadowsEnabled: 2429n, // bool m_bForceShadowsEnabled; |  0x97d | Schema_Builtin | Size: 0x1
	m_nBounceLight: 2432n, // int32_t m_nBounceLight; |  0x980 | Schema_Builtin | Size: 0x4
	m_flBounceScale: 2436n, // float32 m_flBounceScale; |  0x984 | Schema_Builtin | Size: 0x4
	m_flMinRoughness: 2440n, // float32 m_flMinRoughness; |  0x988 | Schema_Builtin | Size: 0x4
	m_vAlternateColor: 2444n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fAlternateColorBrightness: 2456n, // float32 m_fAlternateColorBrightness; |  0x998 | Schema_Builtin | Size: 0x4
	m_nFog: 2460n, // int32_t m_nFog; |  0x99c | Schema_Builtin | Size: 0x4
	m_flFogStrength: 2464n, // float32 m_flFogStrength; |  0x9a0 | Schema_Builtin | Size: 0x4
	m_nFogShadows: 2468n, // int32_t m_nFogShadows; |  0x9a4 | Schema_Builtin | Size: 0x4
	m_flFogScale: 2472n, // float32 m_flFogScale; |  0x9a8 | Schema_Builtin | Size: 0x4
	m_bFogMixedShadows: 2476n, // bool m_bFogMixedShadows; |  0x9ac | Schema_Builtin | Size: 0x1
	m_flFadeSizeStart: 2480n, // float32 m_flFadeSizeStart; |  0x9b0 | Schema_Builtin | Size: 0x4
	m_flFadeSizeEnd: 2484n, // float32 m_flFadeSizeEnd; |  0x9b4 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeStart: 2488n, // float32 m_flShadowFadeSizeStart; |  0x9b8 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeEnd: 2492n, // float32 m_flShadowFadeSizeEnd; |  0x9bc | Schema_Builtin | Size: 0x4
	m_bPrecomputedFieldsValid: 2496n, // bool m_bPrecomputedFieldsValid; |  0x9c0 | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 2500n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 2512n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 2524n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 2536n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 2548n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPrecomputedSubFrusta: 2560n, // int32_t m_nPrecomputedSubFrusta; |  0xa00 | Schema_Builtin | Size: 0x4
	m_vPrecomputedOBBOrigin0: 2564n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles0: 2576n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent0: 2588n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin1: 2600n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles1: 2612n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent1: 2624n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin2: 2636n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles2: 2648n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent2: 2660n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin3: 2672n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles3: 2684n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent3: 2696n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin4: 2708n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles4: 2720n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent4: 2732n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin5: 2744n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles5: 2756n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent5: 2768n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPvsModifyEntity: 2780n, // bool m_bPvsModifyEntity; |  0xadc | Schema_Builtin | Size: 0x1
	m_VisClusters: 2784n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
