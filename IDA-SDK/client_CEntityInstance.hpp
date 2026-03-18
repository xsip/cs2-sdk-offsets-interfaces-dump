#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
class entity2_CScriptComponent;

class client_CEntityInstance {
    void **__vftable_0;
    CUtlSymbolLarge m_iszPrivateVScripts;
    entity2_CEntityIdentity* m_pEntity;
    char pad_1480[0x18];
    entity2_CScriptComponent* m_CScriptComponent;
};
