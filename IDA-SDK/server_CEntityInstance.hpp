#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
class entity2_CScriptComponent;

class server_CEntityInstance {
    void **__vftable_0;
    CUtlSymbolLarge m_iszPrivateVScripts;
    entity2_CEntityIdentity* m_pEntity;
    char pad_2806[0x18];
    entity2_CScriptComponent* m_CScriptComponent;
};
