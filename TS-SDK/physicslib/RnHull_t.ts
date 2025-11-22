// generated - do not edit!

// Class size: 0xF8
// BaseClass: NONE
export const physicslib_RnHull_t  = {
	m_vCentroid: 0n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flMaxAngularRadius: 12n, // float32 m_flMaxAngularRadius; |  0xc | Schema_Builtin | Size: 0x4
	m_Bounds: 16n, // mathlib_extended::AABB_t  | Schema_DeclaredClass | Size: 0x18
	m_vOrthographicAreas: 40n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MassProperties: 52n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_flVolume: 100n, // float32 m_flVolume; |  0x64 | Schema_Builtin | Size: 0x4
	m_flSurfaceArea: 104n, // float32 m_flSurfaceArea; |  0x68 | Schema_Builtin | Size: 0x4
	m_Vertices: 112n, // GlobalTypes::CUtlVector<physicslib::RnVertex_t>  | Schema_Atomic | Size: 0x18
	m_VertexPositions: 136n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_Edges: 160n, // GlobalTypes::CUtlVector<physicslib::RnHalfEdge_t>  | Schema_Atomic | Size: 0x18
	m_Faces: 184n, // GlobalTypes::CUtlVector<physicslib::RnFace_t>  | Schema_Atomic | Size: 0x18
	m_FacePlanes: 208n, // GlobalTypes::CUtlVector<physicslib::RnPlane_t>  | Schema_Atomic | Size: 0x18
	m_nFlags: 232n, // uint32_t m_nFlags; |  0xe8 | Schema_Builtin | Size: 0x4
	m_pRegionSVM: 240n, // physicslib::CRegionSVM**  | Schema_Ptr | Size: 0x8
}
