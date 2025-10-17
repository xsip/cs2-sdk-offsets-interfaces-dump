#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
#include "networksystem_ChangeAccessorFieldPathIndex_t.hpp"

class server_CEntityIdentity {
    char vTable2713[0x14];
    int32_t m_nameStringableIndex;
    CUtlSymbolLarge m_name;
    CUtlSymbolLarge m_designerName;
    char pad_2714[0x8];
    uint32_t m_flags;
    char pad_2715[0x4];
    WorldGroupId_t m_worldGroupId;
    uint32_t m_fDataObjectTypes;
    networksystem_ChangeAccessorFieldPathIndex_t m_PathIndex;
    char pad_2716[0xc];
    entity2_CEntityIdentity* m_pPrev;
    entity2_CEntityIdentity* m_pNext;
    entity2_CEntityIdentity* m_pPrevByClass;
    entity2_CEntityIdentity* m_pNextByClass;
};
