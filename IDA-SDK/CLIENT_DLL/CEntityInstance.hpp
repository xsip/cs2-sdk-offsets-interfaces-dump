#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CEntityIdentity;
class CScriptComponent;

class CEntityInstance {
    char _vtable_pad_160[0x8];
    CUtlSymbolLarge m_iszPrivateVScripts;
    CEntityIdentity* m_pEntity;
    char pad_161[0x18];
    CScriptComponent* m_CScriptComponent;
};
