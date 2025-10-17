#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
#include "networksystem_ChangeAccessorFieldPathIndex_t.hpp"

class entity2_CEntityIdentity {
    char vTable2498[0x14];
    int32_t m_nameStringableIndex;
    CUtlSymbolLarge m_name;
    CUtlSymbolLarge m_designerName;
    char pad_2499[0x8];
    uint32_t m_flags;
    char pad_2500[0x4];
    WorldGroupId_t m_worldGroupId;
    uint32_t m_fDataObjectTypes;
    networksystem_ChangeAccessorFieldPathIndex_t m_PathIndex;
    char pad_2501[0xc];
    entity2_CEntityIdentity* m_pPrev;
    entity2_CEntityIdentity* m_pNext;
    entity2_CEntityIdentity* m_pPrevByClass;
    entity2_CEntityIdentity* m_pNextByClass;
};
