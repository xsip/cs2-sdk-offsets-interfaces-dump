#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_VPhysXCollisionAttributes_t {
    int32_t m_nIncludeDetailLayerCount;
    uint32_t m_CollisionGroup;
    char m_InteractAs[0x18];
    char m_InteractWith[0x18];
    char m_InteractExclude[0x18];
    char m_DetailLayers[0x18];
    CUtlString m_CollisionGroupString;
    char m_InteractAsStrings[0x18];
    char m_InteractWithStrings[0x18];
    char m_InteractExcludeStrings[0x18];
    char m_DetailLayerStrings[0x18];
};
