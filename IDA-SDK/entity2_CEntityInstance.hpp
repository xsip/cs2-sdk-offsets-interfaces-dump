#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityIdentity;
class entity2_CScriptComponent;

class entity2_CEntityInstance {
    char vTable723[0x8];
    CUtlSymbolLarge m_iszPrivateVScripts;
    entity2_CEntityIdentity* m_pEntity;
    char pad_724[0x18];
    entity2_CScriptComponent* m_CScriptComponent;
};
