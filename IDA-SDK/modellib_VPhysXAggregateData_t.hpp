#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class physicslib_PhysFeModelDesc_t;

class modellib_VPhysXAggregateData_t {
    uint16_t m_nFlags;
    uint16_t m_nRefCounter;
    char pad_396[0x4];
    char m_bonesHash[0x18];
    char m_boneNames[0x18];
    char m_indexNames[0x18];
    char m_indexHash[0x18];
    char m_bindPose[0x18];
    char m_parts[0x18];
    char m_shapeMarkups[0x18];
    char m_constraints2[0x18];
    char m_joints[0x18];
    physicslib_PhysFeModelDesc_t* m_pFeModel;
    char m_boneParents[0x18];
    char m_surfacePropertyHashes[0x18];
    char m_collisionAttributes[0x18];
    char m_debugPartNames[0x18];
    CUtlString m_embeddedKeyvalues;
};
