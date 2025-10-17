#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CEntityIdentity;
#include "ChangeAccessorFieldPathIndex_t.hpp"

class CEntityIdentity {
    char _vtable_pad_137[0x14];
    int32_t m_nameStringableIndex;
    CUtlSymbolLarge m_name;
    CUtlSymbolLarge m_designerName;
    char pad_138[0x8];
    uint32_t m_flags;
    char pad_139[0x4];
    WorldGroupId_t m_worldGroupId;
    uint32_t m_fDataObjectTypes;
    ChangeAccessorFieldPathIndex_t m_PathIndex;
    char pad_140[0xc];
    CEntityIdentity* m_pPrev;
    CEntityIdentity* m_pNext;
    CEntityIdentity* m_pPrevByClass;
    CEntityIdentity* m_pNextByClass;
};
