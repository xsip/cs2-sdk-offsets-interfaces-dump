#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeMorphLayerDepr_t {
    CUtlString m_Name;
    uint32_t m_nNameHash;
    char pad_2439[0x4];
    char m_Nodes[0x18];
    char m_InitPos[0x18];
    char m_Gravity[0x18];
    char m_GoalStrength[0x18];
    char m_GoalDamping[0x18];
    uint32_t m_nFlags;
    char end_pad_2440[0x4];
};
