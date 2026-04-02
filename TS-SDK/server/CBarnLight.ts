// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xA20
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBarnLight  = {
	...server_CBaseModelEntity,
	m_bEnabled: 1840n, // bool m_bEnabled; |  0x730 | Schema_Builtin | Size: 0x1
	m_nColorMode: 1844n, // int32_t m_nColorMode; |  0x734 | Schema_Builtin | Size: 0x4
	m_Color: 1848n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flColorTemperature: 1852n, // float32 m_flColorTemperature; |  0x73c | Schema_Builtin | Size: 0x4
	m_flBrightness: 1856n, // float32 m_flBrightness; |  0x740 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 1860n, // float32 m_flBrightnessScale; |  0x744 | Schema_Builtin | Size: 0x4
	m_nDirectLight: 1864n, // int32_t m_nDirectLight; |  0x748 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 1868n, // int32_t m_nBakedShadowIndex; |  0x74c | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 1872n, // int32_t m_nLightPathUniqueId; |  0x750 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 1876n, // int32_t m_nLightMapUniqueId; |  0x754 | Schema_Builtin | Size: 0x4
	m_nLuminaireShape: 1880n, // int32_t m_nLuminaireShape; |  0x758 | Schema_Builtin | Size: 0x4
	m_flLuminaireSize: 1884n, // float32 m_flLuminaireSize; |  0x75c | Schema_Builtin | Size: 0x4
	m_flLuminaireAnisotropy: 1888n, // float32 m_flLuminaireAnisotropy; |  0x760 | Schema_Builtin | Size: 0x4
	m_LightStyleString: 1896n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flLightStyleStartTime: 1904n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_QueuedLightStyleStrings: 1912n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleEvents: 1936n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_LightStyleTargets: 1960n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_StyleEvent: 1984n, // GlobalTypes::CEntityIOOutput[4]  | Schema_FixedArray | Size: 0x60
	m_hLightCookie: 2112n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_flShape: 2120n, // float32 m_flShape; |  0x848 | Schema_Builtin | Size: 0x4
	m_flSoftX: 2124n, // float32 m_flSoftX; |  0x84c | Schema_Builtin | Size: 0x4
	m_flSoftY: 2128n, // float32 m_flSoftY; |  0x850 | Schema_Builtin | Size: 0x4
	m_flSkirt: 2132n, // float32 m_flSkirt; |  0x854 | Schema_Builtin | Size: 0x4
	m_flSkirtNear: 2136n, // float32 m_flSkirtNear; |  0x858 | Schema_Builtin | Size: 0x4
	m_vSizeParams: 2140n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flRange: 2152n, // float32 m_flRange; |  0x868 | Schema_Builtin | Size: 0x4
	m_vShear: 2156n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nBakeSpecularToCubemaps: 2168n, // int32_t m_nBakeSpecularToCubemaps; |  0x878 | Schema_Builtin | Size: 0x4
	m_vBakeSpecularToCubemapsSize: 2172n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nCastShadows: 2184n, // int32_t m_nCastShadows; |  0x888 | Schema_Builtin | Size: 0x4
	m_nShadowMapSize: 2188n, // int32_t m_nShadowMapSize; |  0x88c | Schema_Builtin | Size: 0x4
	m_nShadowPriority: 2192n, // int32_t m_nShadowPriority; |  0x890 | Schema_Builtin | Size: 0x4
	m_bContactShadow: 2196n, // bool m_bContactShadow; |  0x894 | Schema_Builtin | Size: 0x1
	m_bForceShadowsEnabled: 2197n, // bool m_bForceShadowsEnabled; |  0x895 | Schema_Builtin | Size: 0x1
	m_nBounceLight: 2200n, // int32_t m_nBounceLight; |  0x898 | Schema_Builtin | Size: 0x4
	m_flBounceScale: 2204n, // float32 m_flBounceScale; |  0x89c | Schema_Builtin | Size: 0x4
	m_bDynamicBounce: 2208n, // bool m_bDynamicBounce; |  0x8a0 | Schema_Builtin | Size: 0x1
	m_flMinRoughness: 2212n, // float32 m_flMinRoughness; |  0x8a4 | Schema_Builtin | Size: 0x4
	m_vAlternateColor: 2216n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fAlternateColorBrightness: 2228n, // float32 m_fAlternateColorBrightness; |  0x8b4 | Schema_Builtin | Size: 0x4
	m_nFog: 2232n, // int32_t m_nFog; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_flFogStrength: 2236n, // float32 m_flFogStrength; |  0x8bc | Schema_Builtin | Size: 0x4
	m_nFogShadows: 2240n, // int32_t m_nFogShadows; |  0x8c0 | Schema_Builtin | Size: 0x4
	m_flFogScale: 2244n, // float32 m_flFogScale; |  0x8c4 | Schema_Builtin | Size: 0x4
	m_bFogMixedShadows: 2248n, // bool m_bFogMixedShadows; |  0x8c8 | Schema_Builtin | Size: 0x1
	m_flFadeSizeStart: 2252n, // float32 m_flFadeSizeStart; |  0x8cc | Schema_Builtin | Size: 0x4
	m_flFadeSizeEnd: 2256n, // float32 m_flFadeSizeEnd; |  0x8d0 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeStart: 2260n, // float32 m_flShadowFadeSizeStart; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_flShadowFadeSizeEnd: 2264n, // float32 m_flShadowFadeSizeEnd; |  0x8d8 | Schema_Builtin | Size: 0x4
	m_bPrecomputedFieldsValid: 2268n, // bool m_bPrecomputedFieldsValid; |  0x8dc | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 2272n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 2284n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 2296n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 2308n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 2320n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPrecomputedSubFrusta: 2332n, // int32_t m_nPrecomputedSubFrusta; |  0x91c | Schema_Builtin | Size: 0x4
	m_vPrecomputedOBBOrigin0: 2336n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles0: 2348n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent0: 2360n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin1: 2372n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles1: 2384n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent1: 2396n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin2: 2408n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles2: 2420n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent2: 2432n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin3: 2444n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles3: 2456n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent3: 2468n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin4: 2480n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles4: 2492n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent4: 2504n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin5: 2516n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles5: 2528n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent5: 2540n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPvsModifyEntity: 2552n, // bool m_bPvsModifyEntity; |  0x9f8 | Schema_Builtin | Size: 0x1
	m_VisClusters: 2560n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
