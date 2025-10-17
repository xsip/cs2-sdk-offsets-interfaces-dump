#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "physicslib_CFeJiggleBone.hpp"

class physicslib_CFeIndexedJiggleBone {
    uint32_t m_nNode;
    uint32_t m_nJiggleParent;
    physicslib_CFeJiggleBone m_jiggleBone;
};
