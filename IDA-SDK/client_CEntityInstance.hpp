#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
class entity2_CScriptComponent;

class client_CEntityInstance {
    char vTable696[0x8];
    CUtlSymbolLarge m_iszPrivateVScripts;
    entity2_CEntityIdentity* m_pEntity;
    char pad_697[0x18];
    entity2_CScriptComponent* m_CScriptComponent;
};
