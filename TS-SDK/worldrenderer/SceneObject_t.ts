// generated - do not edit!

// Class size: 0x88
// BaseClass: NONE
export const worldrenderer_SceneObject_t  = {
	m_nObjectID: 0n, // uint32_t m_nObjectID; |  0x0 | Schema_Builtin | Size: 0x4
	m_vTransform: 4n, // GlobalTypes::Vector4D[3]  | Schema_FixedArray | Size: 0x30
	m_flFadeStartDistance: 52n, // float32 m_flFadeStartDistance; |  0x34 | Schema_Builtin | Size: 0x4
	m_flFadeEndDistance: 56n, // float32 m_flFadeEndDistance; |  0x38 | Schema_Builtin | Size: 0x4
	m_vTintColor: 60n, // GlobalTypes::Vector4D  | Schema_Atomic | Size: 0x10
	m_skin: 80n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nObjectTypeFlags: 88n, // worldrenderer::ObjectTypeFlags_t  | Schema_DeclaredEnum | Size: 0x4
	m_vLightingOrigin: 92n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nOverlayRenderOrder: 104n, // int16_t m_nOverlayRenderOrder; |  0x68 | Schema_Builtin | Size: 0x2
	m_nLODOverride: 106n, // int16_t m_nLODOverride; |  0x6a | Schema_Builtin | Size: 0x2
	m_nCubeMapPrecomputedHandshake: 108n, // int32_t m_nCubeMapPrecomputedHandshake; |  0x6c | Schema_Builtin | Size: 0x4
	m_nLightProbeVolumePrecomputedHandshake: 112n, // int32_t m_nLightProbeVolumePrecomputedHandshake; |  0x70 | Schema_Builtin | Size: 0x4
	m_renderableModel: 120n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>  | Schema_Atomic | Size: 0x8
	m_renderable: 128n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCRenderMesh>  | Schema_Atomic | Size: 0x8
}
