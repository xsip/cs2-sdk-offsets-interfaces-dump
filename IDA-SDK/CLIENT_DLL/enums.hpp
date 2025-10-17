#pragma once

enum EDestructiblePartDamagePassThroughType : uint32_t {
			EDestructiblePartDamagePassThroughType_Absorb = 0x1,
			EDestructiblePartDamagePassThroughType_InvincibleAbsorb = 0x2,
			EDestructiblePartDamagePassThroughType_InvinciblePassthrough = 0x3,
			EDestructiblePartDamagePassThroughType_Normal = 0x0
		};

enum DestructiblePartDestructionDeathBehavior_t : uint32_t {
			DestructiblePartDestructionDeathBehavior_t_eDoNotKill = 0x0,
			DestructiblePartDestructionDeathBehavior_t_eGib = 0x2,
			DestructiblePartDestructionDeathBehavior_t_eKill = 0x1,
			DestructiblePartDestructionDeathBehavior_t_eRemove = 0x3
		};

enum HitGroup_t : uint32_t {
			HitGroup_t_HITGROUP_CHEST = 0x2,
			HitGroup_t_HITGROUP_COUNT = 0xc,
			HitGroup_t_HITGROUP_GEAR = 0xa,
			HitGroup_t_HITGROUP_GENERIC = 0x0,
			HitGroup_t_HITGROUP_HEAD = 0x1,
			HitGroup_t_HITGROUP_INVALID = 0xffffffff,
			HitGroup_t_HITGROUP_LEFTARM = 0x4,
			HitGroup_t_HITGROUP_LEFTLEG = 0x6,
			HitGroup_t_HITGROUP_NECK = 0x8,
			HitGroup_t_HITGROUP_RIGHTARM = 0x5,
			HitGroup_t_HITGROUP_RIGHTLEG = 0x7,
			HitGroup_t_HITGROUP_SPECIAL = 0xb,
			HitGroup_t_HITGROUP_STOMACH = 0x3,
			HitGroup_t_HITGROUP_UNUSED = 0x9
		};

enum AmmoFlags_t : uint32_t {
			AmmoFlags_t_AMMO_FLAG_MAX = 0x2,
			AmmoFlags_t_AMMO_FORCE_DROP_IF_CARRIED = 0x1,
			AmmoFlags_t_AMMO_RESERVE_STAYS_WITH_WEAPON = 0x2
		};

enum attributeprovidertypes_t : uint32_t {
			attributeprovidertypes_t_PROVIDER_GENERIC = 0x0,
			attributeprovidertypes_t_PROVIDER_WEAPON = 0x1
		};

enum RenderMode_t : uint8_t {
			RenderMode_t_kRenderDevVisualizer = 0xb,
			RenderMode_t_kRenderEnvironmental = 0x6,
			RenderMode_t_kRenderGlow = 0x3,
			RenderMode_t_kRenderModeCount = 0xc,
			RenderMode_t_kRenderNone = 0xa,
			RenderMode_t_kRenderNormal = 0x0,
			RenderMode_t_kRenderTransAdd = 0x5,
			RenderMode_t_kRenderTransAddFrameBlend = 0x7,
			RenderMode_t_kRenderTransAlpha = 0x4,
			RenderMode_t_kRenderTransAlphaAdd = 0x8,
			RenderMode_t_kRenderTransColor = 0x1,
			RenderMode_t_kRenderTransTexture = 0x2,
			RenderMode_t_kRenderWorldGlow = 0x9
		};

enum RenderFx_t : uint8_t {
			RenderFx_t_kRenderFxFadeFast = 0x6,
			RenderFx_t_kRenderFxFadeIn = 0x10,
			RenderFx_t_kRenderFxFadeOut = 0xf,
			RenderFx_t_kRenderFxFadeSlow = 0x5,
			RenderFx_t_kRenderFxFlickerFast = 0xd,
			RenderFx_t_kRenderFxFlickerSlow = 0xc,
			RenderFx_t_kRenderFxGlowShell = 0x12,
			RenderFx_t_kRenderFxMax = 0x13,
			RenderFx_t_kRenderFxNoDissipation = 0xe,
			RenderFx_t_kRenderFxNone = 0x0,
			RenderFx_t_kRenderFxPulseFast = 0x2,
			RenderFx_t_kRenderFxPulseFastWide = 0x4,
			RenderFx_t_kRenderFxPulseFastWider = 0x11,
			RenderFx_t_kRenderFxPulseSlow = 0x1,
			RenderFx_t_kRenderFxPulseSlowWide = 0x3,
			RenderFx_t_kRenderFxSolidFast = 0x8,
			RenderFx_t_kRenderFxSolidSlow = 0x7,
			RenderFx_t_kRenderFxStrobeFast = 0xa,
			RenderFx_t_kRenderFxStrobeFaster = 0xb,
			RenderFx_t_kRenderFxStrobeSlow = 0x9
		};

enum DecalMode_t : uint8_t {
			DecalMode_t_kDecalBlood = 0x0,
			DecalMode_t_kDecalCloak = 0x1,
			DecalMode_t_kDecalCloakDamage = 0x2,
			DecalMode_t_kDecalDefault = 0x0,
			DecalMode_t_kDecalInvalid = 0xff,
			DecalMode_t_kDecalMax = 0x3
		};

enum SolidType_t : uint8_t {
			SolidType_t_SOLID_BBOX = 0x2,
			SolidType_t_SOLID_BSP = 0x1,
			SolidType_t_SOLID_CAPSULE = 0x7,
			SolidType_t_SOLID_LAST = 0x8,
			SolidType_t_SOLID_NONE = 0x0,
			SolidType_t_SOLID_OBB = 0x3,
			SolidType_t_SOLID_POINT = 0x5,
			SolidType_t_SOLID_SPHERE = 0x4,
			SolidType_t_SOLID_VPHYSICS = 0x6
		};

enum SurroundingBoundsType_t : uint8_t {
			SurroundingBoundsType_t_SURROUNDING_TYPE_BIT_COUNT = 0x3,
			SurroundingBoundsType_t_USE_BEST_COLLISION_BOUNDS = 0x1,
			SurroundingBoundsType_t_USE_COLLISION_BOUNDS_NEVER_VPHYSICS = 0x7,
			SurroundingBoundsType_t_USE_GAME_CODE = 0x4,
			SurroundingBoundsType_t_USE_HITBOXES = 0x2,
			SurroundingBoundsType_t_USE_OBB_COLLISION_BOUNDS = 0x0,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_BOUNDS = 0x5,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_ORIENTED_BOUNDS = 0x6,
			SurroundingBoundsType_t_USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS = 0x8,
			SurroundingBoundsType_t_USE_SPECIFIED_BOUNDS = 0x3
		};

enum TakeDamageFlags_t : uint64_t {
			TakeDamageFlags_t_DFLAG_ALWAYS_FIRE_DAMAGE_EVENTS = 0x200,
			TakeDamageFlags_t_DFLAG_ALWAYS_GIB = 0x20,
			TakeDamageFlags_t_DFLAG_FORCEREDUCEARMOR_DMG = 0x800,
			TakeDamageFlags_t_DFLAG_FORCE_DEATH = 0x10,
			TakeDamageFlags_t_DFLAG_FORCE_PHYSICS_FORCE = 0x8000,
			TakeDamageFlags_t_DFLAG_IGNORE_ARMOR = 0x10000,
			TakeDamageFlags_t_DFLAG_IGNORE_DESTRUCTIBLE_PARTS = 0x2000,
			TakeDamageFlags_t_DFLAG_NEVER_GIB = 0x40,
			TakeDamageFlags_t_DFLAG_NONE = 0x0,
			TakeDamageFlags_t_DFLAG_PREVENT_DEATH = 0x8,
			TakeDamageFlags_t_DFLAG_RADIUS_DMG = 0x400,
			TakeDamageFlags_t_DFLAG_REMOVE_NO_RAGDOLL = 0x80,
			TakeDamageFlags_t_DFLAG_SUPPRESS_BREAKABLES = 0x4000,
			TakeDamageFlags_t_DFLAG_SUPPRESS_DAMAGE_MODIFICATION = 0x100,
			TakeDamageFlags_t_DFLAG_SUPPRESS_EFFECTS = 0x4,
			TakeDamageFlags_t_DFLAG_SUPPRESS_HEALTH_CHANGES = 0x1,
			TakeDamageFlags_t_DFLAG_SUPPRESS_INTERRUPT_FLINCH = 0x1000,
			TakeDamageFlags_t_DFLAG_SUPPRESS_PHYSICS_FORCE = 0x2,
			TakeDamageFlags_t_DFLAG_SUPPRESS_UTILREMOVE = 0x20000,
			TakeDamageFlags_t_DMG_LASTDFLAG = 0x8000
		};

enum EntityPlatformTypes_t : uint8_t {
			EntityPlatformTypes_t_ENTITY_NOT_PLATFORM = 0x0,
			EntityPlatformTypes_t_ENTITY_PLATFORM_PLAYER_FOLLOWS_YAW = 0x1,
			EntityPlatformTypes_t_ENTITY_PLATFORM_PLAYER_IGNORES_YAW = 0x2
		};

enum MoveCollide_t : uint8_t {
			MoveCollide_t_MOVECOLLIDE_COUNT = 0x4,
			MoveCollide_t_MOVECOLLIDE_DEFAULT = 0x0,
			MoveCollide_t_MOVECOLLIDE_FLY_BOUNCE = 0x1,
			MoveCollide_t_MOVECOLLIDE_FLY_CUSTOM = 0x2,
			MoveCollide_t_MOVECOLLIDE_FLY_SLIDE = 0x3,
			MoveCollide_t_MOVECOLLIDE_MAX_BITS = 0x3
		};

enum MoveType_t : uint8_t {
			MoveType_t_MOVETYPE_CUSTOM = 0xa,
			MoveType_t_MOVETYPE_FLY = 0x3,
			MoveType_t_MOVETYPE_FLYGRAVITY = 0x4,
			MoveType_t_MOVETYPE_INVALID = 0xb,
			MoveType_t_MOVETYPE_LADDER = 0x9,
			MoveType_t_MOVETYPE_LAST = 0xb,
			MoveType_t_MOVETYPE_MAX_BITS = 0x5,
			MoveType_t_MOVETYPE_NOCLIP = 0x7,
			MoveType_t_MOVETYPE_NONE = 0x0,
			MoveType_t_MOVETYPE_OBSERVER = 0x8,
			MoveType_t_MOVETYPE_OBSOLETE = 0x1,
			MoveType_t_MOVETYPE_PUSH = 0x6,
			MoveType_t_MOVETYPE_VPHYSICS = 0x5,
			MoveType_t_MOVETYPE_WALK = 0x2
		};

enum BloodType : uint32_t {
			BloodType_ColorGreen = 0x2,
			BloodType_ColorRed = 0x0,
			BloodType_ColorRedLVL2 = 0x3,
			BloodType_ColorRedLVL3 = 0x4,
			BloodType_ColorRedLVL4 = 0x5,
			BloodType_ColorRedLVL5 = 0x6,
			BloodType_ColorRedLVL6 = 0x7,
			BloodType_ColorYellow = 0x1,
			BloodType_None = 0xffffffff
		};

enum AnimLoopMode_t : uint32_t {
			AnimLoopMode_t_ANIM_LOOP_MODE_COUNT = 0x3,
			AnimLoopMode_t_ANIM_LOOP_MODE_INVALID = 0xffffffff,
			AnimLoopMode_t_ANIM_LOOP_MODE_LOOPING = 0x1,
			AnimLoopMode_t_ANIM_LOOP_MODE_NOT_LOOPING = 0x0,
			AnimLoopMode_t_ANIM_LOOP_MODE_USE_SEQUENCE_SETTINGS = 0x2
		};

enum SequenceFinishNotifyState_t : uint8_t {
			SequenceFinishNotifyState_t_eDoNotNotify = 0x0,
			SequenceFinishNotifyState_t_eNotifyTriggered = 0x2,
			SequenceFinishNotifyState_t_eNotifyWhenFinished = 0x1
		};

enum PlayerConnectedState : uint32_t {
			PlayerConnectedState_PlayerConnected = 0x0,
			PlayerConnectedState_PlayerConnecting = 0x1,
			PlayerConnectedState_PlayerDisconnected = 0x4,
			PlayerConnectedState_PlayerDisconnecting = 0x3,
			PlayerConnectedState_PlayerNeverConnected = 0xffffffff,
			PlayerConnectedState_PlayerReconnecting = 0x2,
			PlayerConnectedState_PlayerReserved = 0x5
		};

enum ItemFlagTypes_t : uint8_t {
			ItemFlagTypes_t_ITEM_FLAG_CAN_SELECT_WITHOUT_AMMO = 0x1,
			ItemFlagTypes_t_ITEM_FLAG_DOHITLOCATIONDMG = 0x20,
			ItemFlagTypes_t_ITEM_FLAG_EXHAUSTIBLE = 0x10,
			ItemFlagTypes_t_ITEM_FLAG_LIMITINWORLD = 0x8,
			ItemFlagTypes_t_ITEM_FLAG_NOAMMOPICKUPS = 0x40,
			ItemFlagTypes_t_ITEM_FLAG_NOAUTORELOAD = 0x2,
			ItemFlagTypes_t_ITEM_FLAG_NOAUTOSWITCHEMPTY = 0x4,
			ItemFlagTypes_t_ITEM_FLAG_NOITEMPICKUP = 0x80,
			ItemFlagTypes_t_ITEM_FLAG_NONE = 0x0
		};

enum RumbleEffect_t : uint32_t {
			RumbleEffect_t_NUM_RUMBLE_EFFECTS = 0x19,
			RumbleEffect_t_RUMBLE_357 = 0x2,
			RumbleEffect_t_RUMBLE_AIRBOAT_GUN = 0xa,
			RumbleEffect_t_RUMBLE_AR2 = 0x4,
			RumbleEffect_t_RUMBLE_AR2_ALT_FIRE = 0x7,
			RumbleEffect_t_RUMBLE_CROWBAR_SWING = 0x9,
			RumbleEffect_t_RUMBLE_DMG_HIGH = 0x11,
			RumbleEffect_t_RUMBLE_DMG_LOW = 0xf,
			RumbleEffect_t_RUMBLE_DMG_MED = 0x10,
			RumbleEffect_t_RUMBLE_FALL_LONG = 0x12,
			RumbleEffect_t_RUMBLE_FALL_SHORT = 0x13,
			RumbleEffect_t_RUMBLE_FLAT_BOTH = 0xe,
			RumbleEffect_t_RUMBLE_FLAT_LEFT = 0xc,
			RumbleEffect_t_RUMBLE_FLAT_RIGHT = 0xd,
			RumbleEffect_t_RUMBLE_INVALID = 0xffffffff,
			RumbleEffect_t_RUMBLE_JEEP_ENGINE_LOOP = 0xb,
			RumbleEffect_t_RUMBLE_PHYSCANNON_HIGH = 0x18,
			RumbleEffect_t_RUMBLE_PHYSCANNON_LOW = 0x16,
			RumbleEffect_t_RUMBLE_PHYSCANNON_MEDIUM = 0x17,
			RumbleEffect_t_RUMBLE_PHYSCANNON_OPEN = 0x14,
			RumbleEffect_t_RUMBLE_PHYSCANNON_PUNT = 0x15,
			RumbleEffect_t_RUMBLE_PISTOL = 0x1,
			RumbleEffect_t_RUMBLE_RPG_MISSILE = 0x8,
			RumbleEffect_t_RUMBLE_SHOTGUN_DOUBLE = 0x6,
			RumbleEffect_t_RUMBLE_SHOTGUN_SINGLE = 0x5,
			RumbleEffect_t_RUMBLE_SMG1 = 0x3,
			RumbleEffect_t_RUMBLE_STOP_ALL = 0x0
		};

enum ObserverInterpState_t : uint32_t {
			ObserverInterpState_t_OBSERVER_INTERP_NONE = 0x0,
			ObserverInterpState_t_OBSERVER_INTERP_SETTLING = 0x3,
			ObserverInterpState_t_OBSERVER_INTERP_STARTING = 0x1,
			ObserverInterpState_t_OBSERVER_INTERP_TRAVELING = 0x2
		};

enum ObserverMode_t : uint32_t {
			ObserverMode_t_NUM_OBSERVER_MODES = 0x5,
			ObserverMode_t_OBS_MODE_CHASE = 0x3,
			ObserverMode_t_OBS_MODE_FIXED = 0x1,
			ObserverMode_t_OBS_MODE_IN_EYE = 0x2,
			ObserverMode_t_OBS_MODE_NONE = 0x0,
			ObserverMode_t_OBS_MODE_ROAMING = 0x4
		};

enum Reason : uint32_t {
			Reason_QUEST_NONINITIALIZED = 0x0,
			Reason_QUEST_NONOFFICIAL_SERVER = 0x5,
			Reason_QUEST_NOT_CONNECTED_TO_STEAM = 0x4,
			Reason_QUEST_NOT_ENOUGH_PLAYERS = 0x2,
			Reason_QUEST_NOT_SYNCED_WITH_SERVER = 0xb,
			Reason_QUEST_NO_ENTITLEMENT = 0x6,
			Reason_QUEST_NO_QUEST = 0x7,
			Reason_QUEST_OK = 0x1,
			Reason_QUEST_PLAYER_IS_BOT = 0x8,
			Reason_QUEST_REASON_MAX = 0xc,
			Reason_QUEST_WARMUP = 0x3,
			Reason_QUEST_WRONG_MAP = 0x9,
			Reason_QUEST_WRONG_MODE = 0xa
		};

enum MedalRank_t : uint32_t {
			MedalRank_t_MEDAL_RANK_BRONZE = 0x1,
			MedalRank_t_MEDAL_RANK_COUNT = 0x4,
			MedalRank_t_MEDAL_RANK_GOLD = 0x3,
			MedalRank_t_MEDAL_RANK_NONE = 0x0,
			MedalRank_t_MEDAL_RANK_SILVER = 0x2
		};

enum CSWeaponType : uint32_t {
			CSWeaponType_WEAPONTYPE_C4 = 0x7,
			CSWeaponType_WEAPONTYPE_EQUIPMENT = 0xa,
			CSWeaponType_WEAPONTYPE_GRENADE = 0x9,
			CSWeaponType_WEAPONTYPE_KNIFE = 0x0,
			CSWeaponType_WEAPONTYPE_MACHINEGUN = 0x6,
			CSWeaponType_WEAPONTYPE_PISTOL = 0x1,
			CSWeaponType_WEAPONTYPE_RIFLE = 0x3,
			CSWeaponType_WEAPONTYPE_SHOTGUN = 0x4,
			CSWeaponType_WEAPONTYPE_SNIPER_RIFLE = 0x5,
			CSWeaponType_WEAPONTYPE_STACKABLEITEM = 0xb,
			CSWeaponType_WEAPONTYPE_SUBMACHINEGUN = 0x2,
			CSWeaponType_WEAPONTYPE_TASER = 0x8,
			CSWeaponType_WEAPONTYPE_UNKNOWN = 0xc
		};

enum CSWeaponCategory : uint32_t {
			CSWeaponCategory_WEAPONCATEGORY_COUNT = 0x6,
			CSWeaponCategory_WEAPONCATEGORY_HEAVY = 0x5,
			CSWeaponCategory_WEAPONCATEGORY_MELEE = 0x1,
			CSWeaponCategory_WEAPONCATEGORY_OTHER = 0x0,
			CSWeaponCategory_WEAPONCATEGORY_RIFLE = 0x4,
			CSWeaponCategory_WEAPONCATEGORY_SECONDARY = 0x2,
			CSWeaponCategory_WEAPONCATEGORY_SMG = 0x3
		};

enum gear_slot_t : uint32_t {
			gear_slot_t_GEAR_SLOT_BOOSTS = 0xb,
			gear_slot_t_GEAR_SLOT_C4 = 0x4,
			gear_slot_t_GEAR_SLOT_COUNT = 0xd,
			gear_slot_t_GEAR_SLOT_FIRST = 0x0,
			gear_slot_t_GEAR_SLOT_GRENADES = 0x3,
			gear_slot_t_GEAR_SLOT_INVALID = 0xffffffff,
			gear_slot_t_GEAR_SLOT_KNIFE = 0x2,
			gear_slot_t_GEAR_SLOT_LAST = 0xc,
			gear_slot_t_GEAR_SLOT_PISTOL = 0x1,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT10 = 0x9,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT11 = 0xa,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT6 = 0x5,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT7 = 0x6,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT8 = 0x7,
			gear_slot_t_GEAR_SLOT_RESERVED_SLOT9 = 0x8,
			gear_slot_t_GEAR_SLOT_RIFLE = 0x0,
			gear_slot_t_GEAR_SLOT_UTILITY = 0xc
		};

enum loadout_slot_t : uint32_t {
			loadout_slot_t_LOADOUT_SLOT_C4 = 0x1,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_APPEARANCE = 0x2e,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_CUSTOMHEAD = 0x27,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_CUSTOMPLAYER = 0x26,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_EYEWEAR = 0x2a,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_FACEMASK = 0x28,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_HANDS = 0x29,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_HAT = 0x2b,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_LOWERBODY = 0x2c,
			loadout_slot_t_LOADOUT_SLOT_CLOTHING_TORSO = 0x2d,
			loadout_slot_t_LOADOUT_SLOT_COUNT = 0x39,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT0 = 0x20,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT1 = 0x21,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT2 = 0x22,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT3 = 0x23,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT4 = 0x24,
			loadout_slot_t_LOADOUT_SLOT_EQUIPMENT5 = 0x25,
			loadout_slot_t_LOADOUT_SLOT_FIRST_ALL_CHARACTER = 0x36,
			loadout_slot_t_LOADOUT_SLOT_FIRST_AUTO_BUY_WEAPON = 0x0,
			loadout_slot_t_LOADOUT_SLOT_FIRST_COSMETIC = 0x29,
			loadout_slot_t_LOADOUT_SLOT_FIRST_PRIMARY_WEAPON = 0x8,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_EQUIPMENT = 0x20,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_GRENADE = 0x1a,
			loadout_slot_t_LOADOUT_SLOT_FIRST_WHEEL_WEAPON = 0x2,
			loadout_slot_t_LOADOUT_SLOT_FLAIR0 = 0x37,
			loadout_slot_t_LOADOUT_SLOT_GRENADE0 = 0x1a,
			loadout_slot_t_LOADOUT_SLOT_GRENADE1 = 0x1b,
			loadout_slot_t_LOADOUT_SLOT_GRENADE2 = 0x1c,
			loadout_slot_t_LOADOUT_SLOT_GRENADE3 = 0x1d,
			loadout_slot_t_LOADOUT_SLOT_GRENADE4 = 0x1e,
			loadout_slot_t_LOADOUT_SLOT_GRENADE5 = 0x1f,
			loadout_slot_t_LOADOUT_SLOT_HEAVY0 = 0x14,
			loadout_slot_t_LOADOUT_SLOT_HEAVY1 = 0x15,
			loadout_slot_t_LOADOUT_SLOT_HEAVY2 = 0x16,
			loadout_slot_t_LOADOUT_SLOT_HEAVY3 = 0x17,
			loadout_slot_t_LOADOUT_SLOT_HEAVY4 = 0x18,
			loadout_slot_t_LOADOUT_SLOT_HEAVY5 = 0x19,
			loadout_slot_t_LOADOUT_SLOT_INVALID = 0xffffffff,
			loadout_slot_t_LOADOUT_SLOT_LAST_ALL_CHARACTER = 0x38,
			loadout_slot_t_LOADOUT_SLOT_LAST_AUTO_BUY_WEAPON = 0x1,
			loadout_slot_t_LOADOUT_SLOT_LAST_COSMETIC = 0x29,
			loadout_slot_t_LOADOUT_SLOT_LAST_PRIMARY_WEAPON = 0x19,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_EQUIPMENT = 0x25,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_GRENADE = 0x1f,
			loadout_slot_t_LOADOUT_SLOT_LAST_WHEEL_WEAPON = 0x19,
			loadout_slot_t_LOADOUT_SLOT_MELEE = 0x0,
			loadout_slot_t_LOADOUT_SLOT_MISC0 = 0x2f,
			loadout_slot_t_LOADOUT_SLOT_MISC1 = 0x30,
			loadout_slot_t_LOADOUT_SLOT_MISC2 = 0x31,
			loadout_slot_t_LOADOUT_SLOT_MISC3 = 0x32,
			loadout_slot_t_LOADOUT_SLOT_MISC4 = 0x33,
			loadout_slot_t_LOADOUT_SLOT_MISC5 = 0x34,
			loadout_slot_t_LOADOUT_SLOT_MISC6 = 0x35,
			loadout_slot_t_LOADOUT_SLOT_MUSICKIT = 0x36,
			loadout_slot_t_LOADOUT_SLOT_PROMOTED = 0xfffffffe,
			loadout_slot_t_LOADOUT_SLOT_RIFLE0 = 0xe,
			loadout_slot_t_LOADOUT_SLOT_RIFLE1 = 0xf,
			loadout_slot_t_LOADOUT_SLOT_RIFLE2 = 0x10,
			loadout_slot_t_LOADOUT_SLOT_RIFLE3 = 0x11,
			loadout_slot_t_LOADOUT_SLOT_RIFLE4 = 0x12,
			loadout_slot_t_LOADOUT_SLOT_RIFLE5 = 0x13,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY0 = 0x2,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY1 = 0x3,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY2 = 0x4,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY3 = 0x5,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY4 = 0x6,
			loadout_slot_t_LOADOUT_SLOT_SECONDARY5 = 0x7,
			loadout_slot_t_LOADOUT_SLOT_SMG0 = 0x8,
			loadout_slot_t_LOADOUT_SLOT_SMG1 = 0x9,
			loadout_slot_t_LOADOUT_SLOT_SMG2 = 0xa,
			loadout_slot_t_LOADOUT_SLOT_SMG3 = 0xb,
			loadout_slot_t_LOADOUT_SLOT_SMG4 = 0xc,
			loadout_slot_t_LOADOUT_SLOT_SMG5 = 0xd,
			loadout_slot_t_LOADOUT_SLOT_SPRAY0 = 0x38
		};

enum CSWeaponSilencerType : uint32_t {
			CSWeaponSilencerType_WEAPONSILENCER_DETACHABLE = 0x1,
			CSWeaponSilencerType_WEAPONSILENCER_INTEGRATED = 0x2,
			CSWeaponSilencerType_WEAPONSILENCER_NONE = 0x0
		};

enum EKillTypes_t : uint8_t {
			EKillTypes_t_KILLTYPE_COUNT = 0x7,
			EKillTypes_t_KILL_BLAST = 0x3,
			EKillTypes_t_KILL_BURN = 0x4,
			EKillTypes_t_KILL_DEFAULT = 0x1,
			EKillTypes_t_KILL_HEADSHOT = 0x2,
			EKillTypes_t_KILL_NONE = 0x0,
			EKillTypes_t_KILL_SHOCK = 0x6,
			EKillTypes_t_KILL_SLASH = 0x5
		};

enum DecalFlags_t : uint32_t {
			DecalFlags_t_eAll = 0xffffffff,
			DecalFlags_t_eAllButCannotClear = 0xfffffffe,
			DecalFlags_t_eCannotClear = 0x1,
			DecalFlags_t_eNone = 0x0
		};

enum filter_t : uint32_t {
			filter_t_FILTER_AND = 0x0,
			filter_t_FILTER_OR = 0x1
		};

enum GrenadeType_t : uint32_t {
			GrenadeType_t_GRENADE_TYPE_DECOY = 0x3,
			GrenadeType_t_GRENADE_TYPE_EXPLOSIVE = 0x0,
			GrenadeType_t_GRENADE_TYPE_FIRE = 0x2,
			GrenadeType_t_GRENADE_TYPE_FLASH = 0x1,
			GrenadeType_t_GRENADE_TYPE_SMOKE = 0x4,
			GrenadeType_t_GRENADE_TYPE_TOTAL = 0x5
		};

enum InventoryNodeType_t : uint32_t {
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_ITEMDEF = 0x6,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_KEYCHAIN = 0x8,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_PREFAB = 0x5,
			InventoryNodeType_t_CONCRETE_NODE_SCHEMA_STICKER = 0x7,
			InventoryNodeType_t_NODE_TYPE_INVALID = 0x0,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_ITEMDEF = 0x2,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_KEYCHAIN = 0x4,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_PREFAB = 0x1,
			InventoryNodeType_t_VIRTUAL_NODE_SCHEMA_STICKER = 0x3
		};

enum PointOrientGoalDirectionType_t : uint32_t {
			PointOrientGoalDirectionType_t_eAbsOrigin = 0x0,
			PointOrientGoalDirectionType_t_eCenter = 0x1,
			PointOrientGoalDirectionType_t_eEyesForward = 0x4,
			PointOrientGoalDirectionType_t_eForward = 0x3,
			PointOrientGoalDirectionType_t_eHead = 0x2
		};

enum PointOrientConstraint_t : uint32_t {
			PointOrientConstraint_t_eNone = 0x0,
			PointOrientConstraint_t_ePreserveUpAxis = 0x1
		};

enum PointTemplateClientOnlyEntityBehavior_t : uint32_t {
			PointTemplateClientOnlyEntityBehavior_t_CREATE_FOR_CLIENTS_WHO_CONNECT_LATER = 0x1,
			PointTemplateClientOnlyEntityBehavior_t_CREATE_FOR_CURRENTLY_CONNECTED_CLIENTS_ONLY = 0x0
		};

enum PointTemplateOwnerSpawnGroupType_t : uint32_t {
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_CURRENTLY_ACTIVE_SPAWN_GROUP = 0x1,
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_NEWLY_CREATED_SPAWN_GROUP = 0x2,
			PointTemplateOwnerSpawnGroupType_t_INSERT_INTO_POINT_TEMPLATE_SPAWN_GROUP = 0x0
		};

enum ParticleAttachment_t : uint32_t {
			ParticleAttachment_t_MAX_PATTACH_TYPES = 0x10,
			ParticleAttachment_t_PATTACH_ABSORIGIN = 0x0,
			ParticleAttachment_t_PATTACH_ABSORIGIN_FOLLOW = 0x1,
			ParticleAttachment_t_PATTACH_CENTER_FOLLOW = 0xd,
			ParticleAttachment_t_PATTACH_CUSTOMORIGIN = 0x2,
			ParticleAttachment_t_PATTACH_CUSTOMORIGIN_FOLLOW = 0x3,
			ParticleAttachment_t_PATTACH_CUSTOM_GAME_STATE_1 = 0xe,
			ParticleAttachment_t_PATTACH_EYES_FOLLOW = 0x6,
			ParticleAttachment_t_PATTACH_HEALTHBAR = 0xf,
			ParticleAttachment_t_PATTACH_INVALID = 0xffffffff,
			ParticleAttachment_t_PATTACH_MAIN_VIEW = 0xb,
			ParticleAttachment_t_PATTACH_OVERHEAD_FOLLOW = 0x7,
			ParticleAttachment_t_PATTACH_POINT = 0x4,
			ParticleAttachment_t_PATTACH_POINT_FOLLOW = 0x5,
			ParticleAttachment_t_PATTACH_RENDERORIGIN_FOLLOW = 0xa,
			ParticleAttachment_t_PATTACH_ROOTBONE_FOLLOW = 0x9,
			ParticleAttachment_t_PATTACH_WATERWAKE = 0xc,
			ParticleAttachment_t_PATTACH_WORLDORIGIN = 0x8
		};

enum DamageTypes_t : uint32_t {
			DamageTypes_t_DMG_ACID = 0x40000,
			DamageTypes_t_DMG_BLAST = 0x40,
			DamageTypes_t_DMG_BLAST_SURFACE = 0x400000,
			DamageTypes_t_DMG_BUCKSHOT = 0x800,
			DamageTypes_t_DMG_BULLET = 0x2,
			DamageTypes_t_DMG_BURN = 0x8,
			DamageTypes_t_DMG_CLUB = 0x80,
			DamageTypes_t_DMG_CRUSH = 0x1,
			DamageTypes_t_DMG_DISSOLVE = 0x200000,
			DamageTypes_t_DMG_DROWN = 0x4000,
			DamageTypes_t_DMG_DROWNRECOVER = 0x20000,
			DamageTypes_t_DMG_ENERGYBEAM = 0x400,
			DamageTypes_t_DMG_FALL = 0x20,
			DamageTypes_t_DMG_GENERIC = 0x0,
			DamageTypes_t_DMG_HEADSHOT = 0x800000,
			DamageTypes_t_DMG_LASTGENERICFLAG = 0x400000,
			DamageTypes_t_DMG_PHYSGUN = 0x100000,
			DamageTypes_t_DMG_POISON = 0x8000,
			DamageTypes_t_DMG_RADIATION = 0x10000,
			DamageTypes_t_DMG_SHOCK = 0x100,
			DamageTypes_t_DMG_SLASH = 0x4,
			DamageTypes_t_DMG_SONIC = 0x200,
			DamageTypes_t_DMG_VEHICLE = 0x10
		};

enum TimelineCompression_t : uint32_t {
			TimelineCompression_t_TIMELINE_COMPRESSION_AVERAGE = 0x2,
			TimelineCompression_t_TIMELINE_COMPRESSION_AVERAGE_BLEND = 0x3,
			TimelineCompression_t_TIMELINE_COMPRESSION_COUNT_PER_INTERVAL = 0x1,
			TimelineCompression_t_TIMELINE_COMPRESSION_SUM = 0x0,
			TimelineCompression_t_TIMELINE_COMPRESSION_TOTAL = 0x4
		};

enum WeaponGameplayAnimState : uint16_t {
			WeaponGameplayAnimState_WEAPON_LEGACY_STATE_CLEAR_FIRING = 0x44d,
			WeaponGameplayAnimState_WPN_ANIMSTATE_C4_PLANT = 0x12c,
			WeaponGameplayAnimState_WPN_ANIMSTATE_CHARGE = 0x67,
			WeaponGameplayAnimState_WPN_ANIMSTATE_DEPLOY = 0xb,
			WeaponGameplayAnimState_WPN_ANIMSTATE_DROPPED = 0x1,
			WeaponGameplayAnimState_WPN_ANIMSTATE_END_VALID = 0x44c,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_PULL_PIN = 0xc8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_READY = 0xc9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_GRENADE_THROW = 0xca,
			WeaponGameplayAnimState_WPN_ANIMSTATE_HEALTHSHOT_INJECT = 0x190,
			WeaponGameplayAnimState_WPN_ANIMSTATE_HOLSTERED = 0xa,
			WeaponGameplayAnimState_WPN_ANIMSTATE_IDLE = 0x32,
			WeaponGameplayAnimState_WPN_ANIMSTATE_INSPECT = 0x3e8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_INSPECT_OUTRO = 0x3e9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_HIT = 0x1f4,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_MISS = 0x1f5,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_PRIMARY_STAB = 0x1f8,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_HIT = 0x1f6,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_MISS = 0x1f7,
			WeaponGameplayAnimState_WPN_ANIMSTATE_KNIFE_SECONDARY_STAB = 0x1f9,
			WeaponGameplayAnimState_WPN_ANIMSTATE_RELOAD = 0x320,
			WeaponGameplayAnimState_WPN_ANIMSTATE_RELOAD_OUTRO = 0x321,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_DRYFIRE = 0x66,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_PRIMARY = 0x64,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SHOOT_SECONDARY = 0x65,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SILENCER_APPLY = 0x258,
			WeaponGameplayAnimState_WPN_ANIMSTATE_SILENCER_REMOVE = 0x259,
			WeaponGameplayAnimState_WPN_ANIMSTATE_UNINITIALIZED = 0x0
		};

enum CSWeaponMode : uint32_t {
			CSWeaponMode_Primary_Mode = 0x0,
			CSWeaponMode_Secondary_Mode = 0x1,
			CSWeaponMode_WeaponMode_MAX = 0x2
		};

enum WaterWakeMode_t : uint32_t {
			WaterWakeMode_t_WATER_WAKE_IDLE = 0x1,
			WaterWakeMode_t_WATER_WAKE_NONE = 0x0,
			WaterWakeMode_t_WATER_WAKE_RUNNING = 0x3,
			WaterWakeMode_t_WATER_WAKE_WALKING = 0x2,
			WaterWakeMode_t_WATER_WAKE_WATER_OVERHEAD = 0x4
		};

enum DoorState_t : uint32_t {
			DoorState_t_DOOR_STATE_AJAR = 0x4,
			DoorState_t_DOOR_STATE_CLOSED = 0x0,
			DoorState_t_DOOR_STATE_CLOSING = 0x3,
			DoorState_t_DOOR_STATE_OPEN = 0x2,
			DoorState_t_DOOR_STATE_OPENING = 0x1
		};

enum PerformanceMode_t : uint32_t {
			PerformanceMode_t_PM_NORMAL = 0x0,
			PerformanceMode_t_PM_NO_GIBS = 0x1
		};

enum BreakableContentsType_t : uint32_t {
			BreakableContentsType_t_BC_DEFAULT = 0x0,
			BreakableContentsType_t_BC_EMPTY = 0x1,
			BreakableContentsType_t_BC_PARTICLE_SYSTEM_OVERRIDE = 0x3,
			BreakableContentsType_t_BC_PROP_GROUP_OVERRIDE = 0x2
		};

enum BeamType_t : uint32_t {
			BeamType_t_BEAM_ENTPOINT = 0x2,
			BeamType_t_BEAM_ENTS = 0x3,
			BeamType_t_BEAM_HOSE = 0x4,
			BeamType_t_BEAM_INVALID = 0x0,
			BeamType_t_BEAM_LASER = 0x6,
			BeamType_t_BEAM_POINTS = 0x1,
			BeamType_t_BEAM_SPLINE = 0x5
		};

enum BeamClipStyle_t : uint32_t {
			BeamClipStyle_t_kBEAMCLIPSTYLE_NUMBITS = 0x2,
			BeamClipStyle_t_kGEOCLIP = 0x1,
			BeamClipStyle_t_kMODELCLIP = 0x2,
			BeamClipStyle_t_kNOCLIP = 0x0
		};

enum C4LightEffect_t : uint32_t {
			C4LightEffect_t_eLightEffectDropped = 0x1,
			C4LightEffect_t_eLightEffectNone = 0x0,
			C4LightEffect_t_eLightEffectThirdPersonHeld = 0x2
		};

enum CSPlayerState : uint32_t {
			CSPlayerState_NUM_PLAYER_STATES = 0x9,
			CSPlayerState_STATE_ACTIVE = 0x0,
			CSPlayerState_STATE_DEATH_ANIM = 0x4,
			CSPlayerState_STATE_DEATH_WAIT_FOR_KEY = 0x5,
			CSPlayerState_STATE_DORMANT = 0x8,
			CSPlayerState_STATE_GUNGAME_RESPAWN = 0x7,
			CSPlayerState_STATE_OBSERVER_MODE = 0x6,
			CSPlayerState_STATE_PICKINGCLASS = 0x3,
			CSPlayerState_STATE_PICKINGTEAM = 0x2,
			CSPlayerState_STATE_WELCOME = 0x1
		};

enum CSPlayerBlockingUseAction_t : uint32_t {
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_DefusingDefault = 0x1,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_DefusingWithKit = 0x2,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_HostageDropping = 0x4,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_HostageGrabbing = 0x3,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MapLongUseEntity_Pickup = 0x5,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MapLongUseEntity_Place = 0x6,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_MaxCount = 0x7,
			CSPlayerBlockingUseAction_t_k_CSPlayerBlockingUseAction_None = 0x0
		};

enum EntityDisolveType_t : uint32_t {
			EntityDisolveType_t_ENTITY_DISSOLVE_CORE = 0x3,
			EntityDisolveType_t_ENTITY_DISSOLVE_ELECTRICAL = 0x1,
			EntityDisolveType_t_ENTITY_DISSOLVE_ELECTRICAL_LIGHT = 0x2,
			EntityDisolveType_t_ENTITY_DISSOLVE_INVALID = 0xffffffff,
			EntityDisolveType_t_ENTITY_DISSOLVE_NORMAL = 0x0
		};

enum ValueRemapperInputType_t : uint32_t {
			ValueRemapperInputType_t_InputType_PlayerShootPosition = 0x0,
			ValueRemapperInputType_t_InputType_PlayerShootPositionAroundAxis = 0x1
		};

enum ValueRemapperOutputType_t : uint32_t {
			ValueRemapperOutputType_t_OutputType_AnimationCycle = 0x0,
			ValueRemapperOutputType_t_OutputType_RotationX = 0x1,
			ValueRemapperOutputType_t_OutputType_RotationY = 0x2,
			ValueRemapperOutputType_t_OutputType_RotationZ = 0x3
		};

enum ValueRemapperHapticsType_t : uint32_t {
			ValueRemapperHapticsType_t_HaticsType_Default = 0x0,
			ValueRemapperHapticsType_t_HaticsType_None = 0x1
		};

enum ValueRemapperMomentumType_t : uint32_t {
			ValueRemapperMomentumType_t_MomentumType_Friction = 0x1,
			ValueRemapperMomentumType_t_MomentumType_None = 0x0,
			ValueRemapperMomentumType_t_MomentumType_SpringAwayFromSnapValue = 0x3,
			ValueRemapperMomentumType_t_MomentumType_SpringTowardSnapValue = 0x2
		};

enum ValueRemapperRatchetType_t : uint32_t {
			ValueRemapperRatchetType_t_RatchetType_Absolute = 0x0,
			ValueRemapperRatchetType_t_RatchetType_EachEngage = 0x1
		};

enum PointWorldTextJustifyHorizontal_t : uint32_t {
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_CENTER = 0x1,
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_LEFT = 0x0,
			PointWorldTextJustifyHorizontal_t_POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_RIGHT = 0x2
		};

enum PointWorldTextJustifyVertical_t : uint32_t {
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_BOTTOM = 0x0,
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_CENTER = 0x1,
			PointWorldTextJustifyVertical_t_POINT_WORLD_TEXT_JUSTIFY_VERTICAL_TOP = 0x2
		};

enum PointWorldTextReorientMode_t : uint32_t {
			PointWorldTextReorientMode_t_POINT_WORLD_TEXT_REORIENT_AROUND_UP = 0x1,
			PointWorldTextReorientMode_t_POINT_WORLD_TEXT_REORIENT_NONE = 0x0
		};

enum ShardSolid_t : uint8_t {
			ShardSolid_t_SHARD_DEBRIS = 0x1,
			ShardSolid_t_SHARD_SOLID = 0x0
		};

enum FixAngleSet_t : uint8_t {
			FixAngleSet_t_Absolute = 0x1,
			FixAngleSet_t_None = 0x0,
			FixAngleSet_t_Relative = 0x2
		};
