#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_CFeJiggleBone.hpp"

class physicslib_CFeNamedJiggleBone {
    CUtlString m_strParentBone;
    char pad_2425[0x8];
    CTransform m_transform;
    uint32_t m_nJiggleParent;
    physicslib_CFeJiggleBone m_jiggleBone;
};
