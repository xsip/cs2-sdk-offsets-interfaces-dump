// generated - do not edit!

// Class size: 0xB0
// BaseClass: NONE
export const worldrenderer_ClutterSceneObject_t  = {
	m_Bounds: 0n, // mathlib_extended::AABB_t  | Schema_DeclaredClass | Size: 0x18
	m_flags: 24n, // worldrenderer::ObjectTypeFlags_t  | Schema_DeclaredEnum | Size: 0x4
	m_nLayer: 28n, // int16_t m_nLayer; |  0x1c | Schema_Builtin | Size: 0x2
	m_instancePositions: 32n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_instanceScales: 80n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_instanceTintSrgb: 104n, // GlobalTypes::CUtlVector<GlobalTypes::Color>  | Schema_Atomic | Size: 0x18
	m_tiles: 128n, // GlobalTypes::CUtlVector<worldrenderer::ClutterTile_t>  | Schema_Atomic | Size: 0x18
	m_renderableModel: 152n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>  | Schema_Atomic | Size: 0x8
	m_materialGroup: 160n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_flBeginCullSize: 164n, // float32 m_flBeginCullSize; |  0xa4 | Schema_Builtin | Size: 0x4
	m_flEndCullSize: 168n, // float32 m_flEndCullSize; |  0xa8 | Schema_Builtin | Size: 0x4
}
