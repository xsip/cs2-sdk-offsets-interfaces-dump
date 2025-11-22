// generated - do not edit!

// Class size: 0x150
// BaseClass: NONE
export const modellib_VPhysXAggregateData_t  = {
	m_nFlags: 0n, // uint16_t m_nFlags; |  0x0 | Schema_Builtin | Size: 0x2
	m_nRefCounter: 2n, // uint16_t m_nRefCounter; |  0x2 | Schema_Builtin | Size: 0x2
	m_bonesHash: 8n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_boneNames: 32n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_indexNames: 56n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_indexHash: 80n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_bindPose: 104n, // GlobalTypes::CUtlVector<GlobalTypes::matrix3x4a_t>  | Schema_Atomic | Size: 0x18
	m_parts: 128n, // GlobalTypes::CUtlVector<modellib::VPhysXBodyPart_t>  | Schema_Atomic | Size: 0x18
	m_shapeMarkups: 152n, // GlobalTypes::CUtlVector<modellib::PhysShapeMarkup_t>  | Schema_Atomic | Size: 0x18
	m_constraints2: 176n, // GlobalTypes::CUtlVector<modellib::VPhysXConstraint2_t>  | Schema_Atomic | Size: 0x18
	m_joints: 200n, // GlobalTypes::CUtlVector<modellib::VPhysXJoint_t>  | Schema_Atomic | Size: 0x18
	m_pFeModel: 224n, // physicslib::PhysFeModelDesc_t**  | Schema_Ptr | Size: 0x8
	m_boneParents: 232n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_surfacePropertyHashes: 256n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_collisionAttributes: 280n, // GlobalTypes::CUtlVector<modellib::VPhysXCollisionAttributes_t>  | Schema_Atomic | Size: 0x18
	m_debugPartNames: 304n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_embeddedKeyvalues: 328n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
}
