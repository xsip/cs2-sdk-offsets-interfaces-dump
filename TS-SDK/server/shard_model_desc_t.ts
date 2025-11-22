// generated - do not edit!

// Class size: 0x80
// BaseClass: NONE
export const server_shard_model_desc_t  = {
	m_nModelID: 8n, // int32_t m_nModelID; |  0x8 | Schema_Builtin | Size: 0x4
	m_hMaterialBase: 16n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_hMaterialDamageOverlay: 24n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_solid: 32n, // client::ShardSolid_t  | Schema_DeclaredEnum | Size: 0x1
	m_vecPanelSize: 36n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_vecStressPositionA: 44n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_vecStressPositionB: 52n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_vecPanelVertices: 64n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector2D>  | Schema_Atomic | Size: 0x18
	m_vInitialPanelVertices: 88n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector4D>  | Schema_Atomic | Size: 0x18
	m_flGlassHalfThickness: 112n, // float32 m_flGlassHalfThickness; |  0x70 | Schema_Builtin | Size: 0x4
	m_bHasParent: 116n, // bool m_bHasParent; |  0x74 | Schema_Builtin | Size: 0x1
	m_bParentFrozen: 117n, // bool m_bParentFrozen; |  0x75 | Schema_Builtin | Size: 0x1
	m_SurfacePropStringToken: 120n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
}
