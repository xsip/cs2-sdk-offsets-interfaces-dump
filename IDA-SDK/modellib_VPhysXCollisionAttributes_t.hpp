#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_VPhysXCollisionAttributes_t {
    uint32_t m_CollisionGroup;
    char pad_400[0x4];
    char m_InteractAs[0x18];
    char m_InteractWith[0x18];
    char m_InteractExclude[0x18];
    CUtlString m_CollisionGroupString;
    char m_InteractAsStrings[0x18];
    char m_InteractWithStrings[0x18];
    char m_InteractExcludeStrings[0x18];
};
