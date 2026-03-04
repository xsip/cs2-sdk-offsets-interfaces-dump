#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeModelSelfCollisionLayer_t {
    CUtlString m_Name;
    char m_Nodes[0x18];
    float32 m_flParentReaction;
    uint32_t m_nFlags;
    uint32_t m_nEndIdx[4];
};
