(function() {
  (function outer(modules, cache, entry) {
    var previousRequire = "function" == (__typeofVal = typeof require, "object" === __typeofVal ? __realTypeOfObj(require) : __typeofVal) && require;
    function newRequire(name, jumped) {
      var module = cache[name];
      if (!module) {
        var moduleData = modules[name];
        if (!moduleData) {
          var currentRequire = "function" == (__typeofVal = typeof require, "object" === __typeofVal ? __realTypeOfObj(require) : __typeofVal) && require;
          if (!jumped && currentRequire) return currentRequire(name, true);
          if (previousRequire) return previousRequire(name, true);
          var err = new Error("Cannot find module '" + name + "'");
          err.code = "MODULE_NOT_FOUND";
          throw err;
        }
        var exports = {};
        module = cache[name] = {
          exports: exports
        };
        moduleData[0]((function(x) {
          return newRequire(moduleData[1][x] || x);
        }), module, exports);
      }
      return module.exports;
    }
    for (var i = 0; i < entry.length; i++) newRequire(entry[i]);
    return newRequire;
  })({
    1: [ (function(require, module, exports) {}), {} ],
    2: [ (function(require, module, exports) {
      var logList;
      var Enum = require("./cocos2d/core/platform/CCEnum");
      cc.DebugMode = Enum({
        NONE: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        INFO_FOR_WEB_PAGE: 4,
        WARN_FOR_WEB_PAGE: 5,
        ERROR_FOR_WEB_PAGE: 6
      });
      cc._initDebugSetting = function(mode) {
        cc.log = cc.logID = cc.warn = cc.warnID = cc.error = cc.errorID = cc.assert = cc.assertID = function() {};
        if (mode === cc.DebugMode.NONE) return;
        false;
        if (console && console.log.apply) {
          console.error || (console.error = console.log);
          console.warn || (console.warn = console.log);
          false;
          console.error.bind ? cc.error = console.error.bind(console) : cc.error = console.error;
          cc.assert = function(cond, msg) {
            if (!cond) {
              msg && (msg = cc.js.formatStr.apply(null, cc.js.shiftArguments.apply(null, arguments)));
              false;
              false;
              throw new Error(msg);
            }
          };
        }
        if (mode !== cc.DebugMode.ERROR) {
          false;
          console.warn.bind ? cc.warn = console.warn.bind(console) : cc.warn = console.warn;
        }
        false;
        if (mode === cc.DebugMode.INFO) {
          true;
          "JavaScriptCore" === scriptEngineType ? cc.log = function() {
            return console.log.apply(console, arguments);
          } : cc.log = console.log;
          true;
          cc.info = "JavaScriptCore" === scriptEngineType ? function() {
            (console.info || console.log).apply(console, arguments);
          } : console.info || console.log;
        }
        cc.warnID = genLogFunc(cc.warn, "Warning");
        cc.errorID = genLogFunc(cc.error, "Error");
        cc.logID = genLogFunc(cc.log, "Log");
        var assertFailed = genLogFunc((function() {
          var argsArr = [ false ];
          for (var i = 0; i < arguments.length; ++i) argsArr.push(arguments[i]);
          cc.assert.apply(null, argsArr);
        }), "Assert");
        cc.assertID = function(cond) {
          "use strict";
          if (cond) return;
          assertFailed.apply(null, cc.js.shiftArguments.apply(null, arguments));
        };
      };
      cc._throw = function(error) {
        var stack = error.stack;
        stack ? cc.error(error + "\n" + stack) : cc.error(error);
      };
      var errorMapUrl = "https://github.com/cocos-creator/engine/blob/master/EngineErrorMap.md";
      function genLogFunc(func, type) {
        return function(id) {
          "use strict";
          if (1 === arguments.length) {
            func(cc._LogInfos[id]);
            return;
          }
          var msg;
          true;
          var argsArr = cc.js.shiftArguments.apply(null, arguments);
          func.apply(cc, [ cc._LogInfos[id] ].concat(argsArr));
        };
      }
    }), {
      "./cocos2d/core/platform/CCEnum": 94
    } ],
    3: [ (function(require, module, exports) {
      true;
      var logs = {
        "1000": "cc.ActionManager.addAction(): action must be non-null",
        "1001": "cocos2d: removeAction: Target not found",
        "1002": "cc.ActionManager.removeActionByTag(): an invalid tag",
        "1003": "cc.ActionManager.removeActionByTag(): target must be non-null",
        "1004": "cc.ActionManager.getActionByTag(): an invalid tag",
        "1005": "cocos2d : getActionByTag(tag = %s): Action not found",
        "1006": "[Action step]. override me",
        "1007": "[Action update]. override me",
        "1008": "cocos2d: FiniteTimeAction#reverse: Implement me",
        "1009": "cc.EaseElastic.reverse(): it should be overridden in subclass.",
        "1010": "cc.IntervalAction: reverse not implemented.",
        "1011": "cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.",
        "1012": "cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.",
        "1013": "The speed parameter error",
        "1014": "The repeat parameter error",
        "1015": "parameters should not be ending with null in Javascript",
        "1016": "cc.RotateTo.reverse(): it should be overridden in subclass.",
        "1017": "cc.GridAction.getGrid(): it should be overridden in subclass.",
        "1018": "Grid size must be (1,1)",
        "1019": "Failed to construct, Sequence construction needs two or more actions",
        "1020": "Failed to construct, Spawn construction needs two or more actions",
        "1100": "Expected 'data' dict, but not found. Config file: %s",
        "1101": "Please load the resource first : %s",
        "1200": "cocos2d: Director: Error in gettimeofday",
        "1201": "cocos2d: Director: unrecognized projection",
        "1202": "cocos2d: Director: unrecognized projection",
        "1203": "cocos2d: Director: Error in gettimeofday",
        "1204": "running scene should not null",
        "1205": "the scene should not null",
        "1206": "loadScene: The scene index to load (%s) is out of range.",
        "1207": "loadScene: Unknown name type to load: '%s'",
        "1208": "loadScene: Failed to load scene '%s' because '%s' is already loading",
        "1209": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
        "1210": "Failed to preload '%s', %s",
        "1211": "loadScene: The scene index to load (%s) is out of range.",
        "1212": "loadScene: Unknown name type to load: '%s'",
        "1213": "loadScene: Failed to load scene '%s' because '%s' is already loading",
        "1214": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
        "1215": "Failed to preload '%s', %s",
        "1300": "element type is wrong!",
        "1400": "'%s' is deprecated, please use '%s' instead.",
        "1401": "The first argument should be the destination object",
        "1402": "The 'visible' property of %s is deprecated, use 'enabled' instead please.",
        "1403": "Sorry, cc.audioEngine.willPlayMusic is removed.",
        "1404": "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
        "1405": "The '%s' will be removed in v2.0, please use '%s' instead. 😰",
        "1500": "cc.Scheduler#schedule: Callback already scheduled. Updating interval from:%s to %s",
        "1501": "cc.Scheduler#scheduleCallbackForTarget(): callback_fn should be non-null.",
        "1502": "cc.Scheduler#scheduleCallbackForTarget(): target should be non-null.",
        "1503": "cc.Scheduler#pauseTarget():target should be non-null",
        "1504": "cc.Scheduler#resumeTarget():target should be non-null",
        "1505": "cc.Scheduler#isTargetPaused():target should be non-null",
        "1506": "warning: you CANNOT change update priority in scheduled function",
        "1507": "cc.Scheduler#scheduleSelector: Selector already scheduled. Updating interval from: %.4f to %.4f",
        "1508": "Argument callback must not be empty",
        "1509": "Argument target must be non-nullptr",
        "1510": "cc.Scheduler: Illegal target which doesn't have uuid or instanceId",
        "1511": "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored",
        "1512": "cc.Scheduler: updateFunc parameter is deprecated in scheduleUpdate function, and will be removed in v2.0",
        "1600": "getZOrder is deprecated. Please use getLocalZOrder instead.",
        "1601": "setZOrder is deprecated. Please use setLocalZOrder instead.",
        "1602": "RotationX != RotationY. Don't know which one to return",
        "1603": "ScaleX != ScaleY. Don't know which one to return",
        "1604": "An Node can't be added as a child of itself.",
        "1605": "child already added. It can't be added again",
        "1606": "child must be non-null",
        "1607": "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
        "1608": "boundingBox is deprecated. Use getBoundingBox instead",
        "1609": "argument tag is an invalid tag",
        "1610": "cocos2d: removeChildByTag(tag = %s): child not found!",
        "1611": "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",
        "1612": "cc.Node.stopActionBy(): argument tag an invalid tag",
        "1613": "cc.Node.getActionByTag(): argument tag is an invalid tag",
        "1614": "resumeSchedulerAndActions is deprecated, please use resume instead.",
        "1615": "pauseSchedulerAndActions is deprecated, please use pause instead.",
        "1616": "Unknown callback function",
        "1617": "child must be non-null",
        "1618": "cc.Node.runAction(): action must be non-null",
        "1619": "callback function must be non-null",
        "1620": "interval must be positive",
        "1621": "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
        "1622": "_ccsg.Node._requestDirtyFlag: failed to satisfy the request, key (%s) for flag have already been taken",
        "1623": "Set '%s' to normal node (not persist root node).",
        "1624": "Replacing with the same sgNode",
        "1625": "The replacement sgNode should not contain any child.",
        "1626": "Should not set alpha via 'color', set 'opacity' please.",
        "1627": "Not support for asynchronous creating node in SG",
        "1628": "Renderer error: Size of the cc._RendererInSG._sgNode must be zero",
        "1629": "The node '%s' has a component inherited from 'cc._RendererInSG'",
        "1630": "JSB environment is not support invoke node.runAction before the 'cc._RendererInSG' component enabled.",
        "1631": "Please use runAction in the method 'start' instead.",
        "1632": "Node name can not include '/'.",
        "1633": "Internal error, should not remove unknown node from parent.",
        "1634": "addChild: The child to add must be instance of cc.Node, not %s.",
        "1635": "reorderChild: this child is not in children list",
        "1700": "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",
        "1701": "",
        "1702": "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
        "1703": "The new text must be String",
        "1800": "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
        "1801": "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
        "1802": "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
        "1803": "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
        "1900": "Invalid parameter.",
        "2000": "Don't call this method if the event is for touch.",
        "2100": "parameters should not be ending with null in Javascript",
        "2101": "Invalid index in MultiplexLayer switchTo message",
        "2102": "Invalid index in MultiplexLayer switchTo message",
        "2103": "cc.Layer.addLayer(): layer should be non-null",
        "2200": "Resolution not valid",
        "2201": "should set resolutionPolicy",
        "2300": "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
        "2400": "WebGL error %s",
        "2401": "Too many graphics vertices generated, only 65536 vertices support.",
        "2500": "cocos2d: cc.SpriteFrameAnimationCache: No animations were found in provided dictionary.",
        "2501": "cc.SpriteFrameAnimationCache. Invalid animation format",
        "2502": "cc.SpriteFrameAnimationCache.addAnimations(): File could not be found",
        "2503": "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
        "2504": "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
        "2505": "cocos2d: cc.SpriteFrameAnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",
        "2506": "cocos2d: cc.SpriteFrameAnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",
        "2507": "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
        "2508": "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
        "2509": "cc.SpriteFrameAnimationCache.addAnimations(): Invalid texture file name",
        "2600": "cc.Sprite.reorderChild(): this child is not in children list",
        "2601": "cc.Sprite.setIgnoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
        "2602": "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
        "2603": "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
        "2604": "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
        "2605": "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
        "2606": "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
        "2608": "initWithSpriteFrameName is deprecated and can not provide correct functionality",
        "2609": "cc.Sprite.initWithFile(): filename should be non-null",
        "2610": "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
        "2611": "cc.Sprite.reorderChild(): child should be non-null",
        "2612": "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
        "2613": "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
        "2614": "cc.Sprite.addChild(): child should be non-null",
        "2615": "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",
        "2616": "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2617": "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2618": "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2619": "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
        "2620": "Sprite.initWithTexture(): Argument must be non-nil ",
        "2621": "Invalid spriteFrameName",
        "2622": "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",
        "2623": "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
        "2624": "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
        "2625": "too many tiles, only 16384 tiles will be show",
        "2626": "Unrecognized fill type in bar fill",
        "2627": "Can not generate quad",
        "2728": "%s does not exist",
        "2700": "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",
        "2701": "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
        "2702": "cocos2d: WARNING: Not enough memory to resize the atlas",
        "2703": "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",
        "2704": "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",
        "2705": "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",
        "2706": "cc.SpriteBatchNode.addChild(): child should be non-null",
        "2707": "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2708": "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2709": "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
        "2710": "Sprite.initWithTexture(): Argument must be non-nil ",
        "2711": "cc.Sprite.addChild(): child should be non-null",
        "2712": "Invalid spriteFrameName",
        "2713": "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",
        "2714": "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
        "2715": "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
        "2716": "cc.SpriteBatchNode.addChild(): child should be non-null",
        "2800": "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
        "2801": "cocos2d: WARNING: an alias with name %s already exists",
        "2802": "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",
        "2803": "cocos2d: cc.SpriteFrameCahce: Frame %s not found",
        "2804": "Please load the resource first : %s",
        "2805": "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",
        "2806": "Argument must be non-nil",
        "2900": "cocos2d: Could not open file: %s",
        "2901": "cc.TextureAtlas.insertQuad(): invalid totalQuads",
        "2902": "cc.TextureAtlas.initWithTexture():texture should be non-null",
        "2903": "cc.TextureAtlas.updateQuad(): quad should be non-null",
        "2904": "cc.TextureAtlas.updateQuad(): Invalid index",
        "2905": "cc.TextureAtlas.insertQuad(): Invalid index",
        "2906": "cc.TextureAtlas.insertQuad(): Invalid index + amount",
        "2907": "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
        "2908": "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",
        "2909": "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
        "2910": "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",
        "2911": "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",
        "2912": "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",
        "2913": "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",
        "3000": "TextureCache:addPVRTCImage does not support on HTML5",
        "3001": "TextureCache:addPVRTCImage does not support on HTML5",
        "3002": "textureForKey is deprecated. Please use getTextureForKey instead.",
        "3003": "addPVRImage does not support on HTML5",
        "3004": "cocos2d: Couldn't add UIImage in TextureCache",
        "3005": "cocos2d: '%s' id=%s %s x %s",
        "3006": "cocos2d: '%s' id= HTMLCanvasElement %s x %s",
        "3007": "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
        "3008": "cc.Texture.addUIImage(): image should be non-null",
        "3009": "TextureCache: url should be non-null",
        "3100": "initWithETCFile does not support on HTML5",
        "3101": "initWithPVRFile does not support on HTML5",
        "3102": "initWithPVRTCData does not support on HTML5",
        "3103": "cc.Texture.addImage(): path should be non-null",
        "3104": "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",
        "3105": "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
        "3106": "initWithString isn't supported on cocos2d-html5",
        "3107": "initWithETCFile does not support on HTML5",
        "3108": "initWithPVRFile does not support on HTML5",
        "3109": "initWithPVRTCData does not support on HTML5",
        "3110": "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",
        "3111": "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
        "3112": "cc.Texture.addImage(): path should be non-null",
        "3113": "NSInternalInconsistencyException",
        "3114": "SpriteFrame: Failed to load sprite texture '%s'",
        "3115": "Frame Grabber: could not attach texture to framebuffer",
        "3116": "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures",
        "3117": "Mimpap texture only works in POT textures",
        "3118": "contentSize parameter is deprecated and ignored for cc.Texture2D initWithData function",
        "3300": "Rect width exceeds maximum margin: %s",
        "3400": "Rect height exceeds maximum margin: %s",
        "3500": "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
        "3501": "Invalid listener type!",
        "3502": "Can't set fixed priority with scene graph based listener.",
        "3503": "Invalid parameters.",
        "3504": "listener must be a cc.EventListener object when adding a fixed priority listener",
        "3505": "The listener has been registered, please don't register it again.",
        "3506": "Unsupported listener target.",
        "3507": "Invalid scene graph priority!",
        "3508": "If program goes here, there should be event in dispatch.",
        "3509": "_inDispatch should be 1 here.",
        "3510": "%s's scene graph node not contains in the parent's children",
        "3600": "cc.Class will automatically call super constructor of %s, you should not call it manually.",
        "3601": "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
        "3602": "Unknown editor property '%s' in class '%s'.",
        "3603": "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please. 😂",
        "3604": "Can only indicate one type attribute for %s.",
        "3605": "The default value of %s is not instance of %s.",
        "3606": "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
        "3607": "The default value of %s must be an empty string.",
        "3608": "The type of %s must be cc.String, not String.",
        "3609": "The type of %s must be cc.Boolean, not Boolean.",
        "3610": "The type of %s must be cc.Float or cc.Integer, not Number.",
        "3611": "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
        "3612": "%s Just set the default value to 'new %s()' and it will be handled properly.",
        "3613": "'No need to specify the '%s' attribute for the getter of '%s.%s', every getter is actually non-serialized.",
        "3615": "Each script can have at most one Component.",
        "3616": "Should not specify class name %s for Component which defines in project.",
        "3617": "ctor of CCClass '%s' should not accept any arguments.",
        "3618": "ctor of '%s' can not be another CCClass",
        "3619": "ctor of '%s' must be function type",
        "3620": "this._super declared in '%s.%s' but no super method defined",
        "3621": "Unknown type of %s.%s, maybe you want is '%s'.",
        "3622": "Unknown type of %s.%s, property should be defined in 'properties' or 'ctor'",
        "3623": "Can not use 'editor' attribute, '%s' not inherits from Components.",
        "3624": "'%s' overwrote '%s' but '%s' is defined as 'false' so the super method will not be called. You can set '%s' to null to disable this warning.",
        "3625": "[isChildClassOf] superclass should be function type, not",
        "3626": "Can't remove '%s' because '%s' depends on it.",
        "3627": "Should not add renderer component (%s) to a Canvas node.",
        "3628": "Should not add %s to a node which size is already used by its other component.",
        "3629": "attribute must be type object",
        "3630": "RawType is only available for Assets",
        "3631": "RawType name cannot contain uppercase",
        "3632": "Each asset cannot have more than one RawType",
        "3633": "Properties function of '%s' should return an object!",
        "3634": "Disallow to use '.' in property name",
        "3635": "Default array must be empty, set default value of %s.%s to [], and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = [...];')",
        "3636": "Can not set default value to non-empty object, unless the object derived from cc.ValueType and overwrite the 'clone' function. Set default value of %s.%s to null or {}, and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = {foo: bar};')",
        "3637": "Can not declare %s.%s, it is already defined in the prototype of %s",
        "3638": "'%s': the getter of '%s' is already defined!",
        "3640": "'%s': the setter of '%s' is already defined!",
        "3641": "Can not construct %s because it contains object property.",
        "3642": "Cannot define %s.%s because static member name can not be '%s'.",
        "3643": "Can not define a member called 'constructor' in the class '%s', please use 'ctor' instead.",
        "3644": "Please define 'type' parameter of %s.%s as the actual constructor.",
        "3645": "Please define 'type' parameter of %s.%s as the constructor of %s.",
        "3646": "Unknown 'type' parameter of %s.%s：%s",
        "3647": "The length of range array must be equal or greater than 2",
        "3648": "Can not declare %s.%s method, it is already defined in the properties of %s.",
        "3649": "CCClass %s have conflict between its ctor and __ctor__.",
        "3650": 'No need to specifiy "%s" attribute for "%s" property in "%s" class.',
        "3651": 'Can not call `_super` or `prototype.ctor` in ES6 Classes "%s", use `super` instead please.',
        "3652": 'Failed to construct a dummy instance of the "%s" class using `new` behind the scenes. This is for getting default values declared in TypeScript. Please ensure the class will be able to construct during script\'s initialization. %s',
        "3653": 'Please do not specifiy "default" attribute in decorator of "%s" property in "%s" class.\n  Default value must be initialized at their declaration: 😂\n    // Before:\n    @property({\n      type: cc.Integer\n      default: 0  // <--\n    })\n    value;\n\n    // After:\n    @property({\n      type: cc.Integer\n    })\n    value = 0;    // <--',
        "3654": 'Please specifiy a default value for "%s" property at its declaration: 😂\n    // Before:\n    @property(...)\n    value;\n\n    // After:\n    @property(...)\n    value = 0;',
        "3655": 'Can not specifiy "get" or "set"  attribute in decorator for "%s" property in "%s" class.\n  Please use:\n    @property(...)\n    get %s () {\n      ...\n    }\n    @property\n    set %s (value) {\n      ...\n    }',
        "3700": "internal error: _prefab is undefined",
        "3701": "Failed to load prefab asset for node '%s'",
        "3800": "The target can not be made persist because it's invalid or it doesn't have _id property.",
        "3801": "The node can not be made persist because it's not under root node.",
        "3802": "The node can not be made persist because it's not in current scene.",
        "3803": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
        "3804": "getComponent: Type must be non-nil",
        "3805": "Can't add component '%s' because %s already contains the same component.",
        "3806": "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
        "3807": "addComponent: Failed to get class '%s'",
        "3808": "addComponent: Should not add component ('%s') when the scripts are still loading.",
        "3809": "addComponent: The component to add must be a constructor",
        "3810": "addComponent: The component to add must be child class of cc.Component",
        "3811": "_addComponentAt: The component to add must be a constructor",
        "3812": "_addComponentAt: Index out of range",
        "3813": "removeComponent: Component must be non-nil",
        "3814": "Argument must be non-nil",
        "3815": "Component not owned by this entity",
        "3816": "Node '%s' is already activating or deactivating.",
        "3817": "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
        "3818": "Failed to read or parse project.json",
        "3819": "Warning: target element is not a DIV or CANVAS",
        "3900": "Invalid clip to add",
        "3901": "Invalid clip to remove",
        "3902": "clip is defaultClip, set force to true to force remove clip and animation state",
        "3903": "animation state is playing, set force to true to force stop and remove clip and animation state",
        "3904": "motion path of target [%s] in prop [%s] frame [%s] is not valid",
        "3905": "sprite frames must be an Array.",
        "3906": "Can't find easing type [%s]",
        "3907": "animator not added or already removed",
        "3908": "animation not added or already removed",
        "3909": "[animate] keyFrames must be non-nil",
        "3910": "[animate] ratio should >= 0!",
        "3911": "[animate] ratio should in the order of smallest to largest!",
        "4000": "Sorry, the cc.Font has been modified from Raw Asset to Asset. Please load the font asset before using.",
        "4001": "_ccsg.Label._initBMFontWithString(): Impossible to create font. Please check file",
        "4002": "_ccsg.Label._initBMFontWithString(): re-init is no longer supported",
        "4003": "Label font size can't be shirnked less than 0!",
        "4004": "force notify all fonts loaded!",
        "4005": "cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version",
        "4006": "cc.LabelAtlas._updateAtlasValues(): Invalid String length",
        "4007": "cc.LabelBMFont.initWithString(): re-init is no longer supported",
        "4008": "cc.LabelBMFont.initWithString(): Impossible to create font. Please check file",
        "4009": "cocos2d: LabelBMFont: character not found %s",
        "4010": "cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file",
        "4011": "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
        "4012": "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
        "4013": "Sorry, lineHeight of system font not supported on JSB.",
        "4100": "Property padding is deprecated, please use paddingLeft, paddingRight, paddingTop and paddingBottom instead",
        "4200": "MaskType: IMAGE_STENCIL only support WebGL mode.",
        "4201": "The alphaThreshold invalid in Canvas Mode.",
        "4202": "The inverted invalid in Canvas Mode.",
        "4300": "can not found the %s page.",
        "4400": "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
        "4600": "Script attached to '%s' is missing or invalid.",
        "4700": "The dom control is not created!",
        "4800": "unknown asset type %s",
        "4901": "loadRes: should not specify the extname in %s %s",
        "4902": "No need to release non-cached asset.",
        "4903": "Can not get class '%s'",
        "4904": "%s does not exist",
        "4905": "%s load error, must be json file",
        "4906": "Can't find the parser : %s",
        "4907": "%s is armature. please use:",
        "4908": "    ccs.armatureDataManager.addArmatureFileInfoAsync(%s);",
        "4909": "    var armature = new ccs.Armature('name');",
        "4910": "Can't find the parser : %s",
        "4911": "register parser error",
        "4912": "Can't find the parser : %s",
        "4913": "Group versions haven't been loaded, you can also set group data with 'cc.LoaderLayer.groups'",
        "4914": "Resources url '%s' does not exist.",
        "4915": "Pack indices and data do not match in size",
        "4916": "Failed to download package for %s",
        "4917": "cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported",
        "4918": "cc.LabelBMFont._parseCommonArguments(): only supports 1 page",
        "4919": "cc.LabelBMFont._parseImageFileName() : file could not be found",
        "4920": "Sorry, you shouldn't use id as item identity any more, please use url or uuid instead, the current id is being set as url: (%s)",
        "4921": "Invalid pipe or invalid index provided!",
        "4922": "The pipe to be inserted is already in the pipeline!",
        "5000": "object already destroyed",
        "5001": "object not yet destroyed",
        "5100": "Not a plist file!",
        "5200": "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
        "5201": "browser don't support web audio",
        "5300": "Type of target to deserialize not matched with data: target is %s, data is %s",
        "5301": "Can not find script '%s'",
        "5302": "Can not find class '%s'",
        "5400": "'%s' is deprecated, use '%s' instead please.",
        "5401": "'%s' is deprecated, use '%s' instead please.",
        "5402": "cc.js.addon called on non-object: ",
        "5403": "cc.js.mixin: arguments must be type object: ",
        "5404": "The base class to extend from must be non-nil",
        "5405": "The class to extend must be non-nil",
        "5406": "Class should be extended before assigning any prototype members.",
        "5500": "'notify' can't work with 'get/set' !",
        "5501": "'notify' must work with 'default' !",
        "5502": "Invalid url of %s.%s",
        "5503": "The 'url' attribute of '%s.%s' is undefined when loading script.",
        "5504": "The 'url' type of '%s.%s' must be child class of cc.RawAsset.",
        "5505": "The 'url' type of '%s.%s' must not be child class of cc.Asset, otherwise you should use 'type: %s' instead.",
        "5506": "Can not specify 'type' attribute for '%s.%s', because its 'url' is already defined.",
        "5507": "The 'default' attribute of '%s.%s' must be an array",
        "5508": "Invalid type of %s.%s",
        "5509": "The 'type' attribute of '%s.%s' must be child class of cc.Asset, otherwise you should use 'url: %s' instead",
        "5510": "The 'type' attribute of '%s.%s' can not be 'Number', use 'Float' or 'Integer' instead please.",
        "5511": "The 'type' attribute of '%s.%s' is undefined when loading script",
        "5512": "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
        "5513": "The 'default' value of '%s.%s' should not be used with a 'get' function.",
        "5514": "The 'default' value of '%s.%s' should not be used with a 'set' function.",
        "5515": "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
        "5516": "Property '%s.%s' must define at least one of 'default', 'get' or 'set'.",
        "5517": "'%s.%s' hides inherited property '%s.%s'. To make the current property overwrite that implementation, add the `override: true` attribute please.",
        "5600": "Argument must be non-nil",
        "5601": "Can not get current scene.",
        "5602": "Scene is destroyed",
        "5603": "reference node is destroyed",
        "5700": "no %s or %s on %s",
        "5800": "%s.lerp not yet implemented.",
        "5801": "%s.clone not yet implemented.",
        "5802": "%s.equals not yet implemented.",
        "5900": "MotionStreak only support WebGL mode.",
        "5901": "cc.MotionStreak.getOpacity has not been supported.",
        "5902": "cc.MotionStreak.setOpacity has not been supported.",
        "6000": "Custom should not be false if file is not specified.",
        "6001": "The new %s must not be NaN",
        "6002": "_ccsg.ParticleSystem.addChild() : Can't add a ParticleSystem that uses a different blending function",
        "6003": "cc.ParticleBatchNode.removeChild(): doesn't contain the sprite. Can't remove it",
        "6004": "cc.ParticleBatchNode.reorderChild(): Child doesn't belong to batch",
        "6005": "cc.ParticleBatchNode._increaseAtlasCapacityTo() : WARNING: Not enough memory to resize the atlas",
        "6006": "cocos2d: cc.ParticleBatchNode: resizing TextureAtlas capacity from [%d] to [%d]",
        "6007": "cc.ParticleBatchNode._addChildHelper(): child already added. It can't be added again",
        "6008": "_ccsg.ParticleSystem.initWithFile(): Particles: file not found",
        "6009": "_ccsg.ParticleSystem.initWithDictionary(): Invalid emitterType in config file",
        "6010": "_ccsg.ParticleSystem: error decoding or ungzipping textureImageData",
        "6011": "_ccsg.ParticleSystem: unknown image format with Data",
        "6012": "_ccsg.ParticleSystem.initWithDictionary() : error loading the texture",
        "6013": "Particle system: not enough memory",
        "6014": "Can't change blending functions when the particle is being batched",
        "6015": "_ccsg.ParticleSystem.setDisplayFrame(): QuadParticle only supports SpriteFrames with no offsets",
        "6016": "_ccsg.ParticleSystem._allocMemory(): Memory should not be allocated when not using batchNode",
        "6100": "Not supported file types, Please try use the ccs.load",
        "6200": "Canvas doesn't support mesh slot!",
        "6300": "only cc.DrawNode is accepted as stencil",
        "6301": "Stencil buffer is not enabled.",
        "6302": "Nesting more than %d stencils is not supported. Everything will be drawn without stencil for this node and its children.",
        "6400": "asset.url is not usable in core process",
        "6401": "asset.urls is not usable in core process",
        "6402": "AssetLibrary has already been initialized!",
        "6500": "Widget target must be one of the parent nodes of it",
        "6600": "collider not added or already removed",
        "6601": "Can't find testFunc for (%s, $s).",
        "6700": "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time",
        "6701": "Should not add Canvas to a node which already contains a renderer component (%s).",
        "6702": "Should not add Canvas to a node which size is already used by its other component.",
        "6800": "Callback of event must be non-nil",
        "6801": "The message must be provided",
        "6900": "The thing you want to instantiate must be an object",
        "6901": "The thing you want to instantiate is nil",
        "6902": "The thing you want to instantiate is destroyed",
        "6903": "The instantiate method for given asset do not implemented",
        "6904": "Can not instantiate array",
        "6905": "Can not instantiate DOM element",
        "7000": "Failed to init asset's raw path.",
        "7001": "Should not load '%s' from script dynamically, unless it is placed in the 'resources' folder.",
        "7002": "Sorry can not load '%s' because it is not placed in the 'resources' folder.",
        "7003": "Failed to init builtin asset's raw path.",
        "7100": "%s already defined in Enum.",
        "7101": "Sorry, 'cc.Enum' not available on this platform, please report this error here: https://github.com/cocos-creator/engine/issues/new",
        "7200": "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
        "7201": "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
        "7202": "Add component TiledLayer into node failed.",
        "7203": "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
        "7204": "_ccsg.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
        "7205": "_ccsg.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
        "7206": "_ccsg.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
        "7207": "_ccsg.TMXLayer.setTileGID(): invalid gid: %s",
        "7208": "_ccsg.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
        "7209": "_ccsg.TMXLayer.removeTileAt(): TMXLayer: the tiles map has been released",
        "7210": "TMX Hexa zOrder not supported",
        "7211": "TMX invalid value",
        "7212": "_ccsg.TMXTiledMap.initWithTMXFile(): Map not found. Please check the filename.",
        "7213": "_ccsg.TMXTiledMap.initWithXML(): Map not found. Please check the filename.",
        "7214": "propertiesForGID is deprecated. Please use getPropertiesForGID instead.",
        "7215": "cocos2d: Warning: TMX Layer %s has no tiles",
        "7216": "cocos2d: TMXFormat: Unsupported TMX version: %s",
        "7217": "cocos2d: TMXFomat: Unsupported orientation: %s",
        "7218": "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
        "7219": "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
        "7220": "TMX Parser: please load the xml resource first: %s",
        "7300": "The new selected must be number",
        "7301": "The new bake must be boolean",
        "7400": "Failed to set _defaultArmatureIndex for '%s' because its dragonAsset is invalid.",
        "7401": "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
        "7402": "Failed to set _animationIndex for '%s' because the index is out of range.",
        "7500": "Failed to set _defaultSkinIndex for '%s' because its skeletonData is invalid.",
        "7501": "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
        "7502": "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
        "7503": "Failed to set _animationIndex for '%s' because the index is out of range.",
        "7504": "Can not render dynamic created SkeletonData",
        "7505": "Invalid type of atlasFile, atlas should be registered as raw asset.",
        "7506": "Failed to load spine atlas '$s'",
        "7507": "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
        "7508": "The atlas asset of '%s' is not exists!",
        "7509": "Spine: Animation not found: %s",
        "7510": "Spine: Animation not found: %s",
        "7600": "The context of RenderTexture is invalid.",
        "7700": "On the web is always keep the aspect ratio",
        "7701": "Can't know status",
        "7702": "Video player's duration is not ready to get now!",
        "7800": "Web does not support loading",
        "7801": "Web does not support query history",
        "7802": "Web does not support query history",
        "7803": "The current browser does not support the GoBack",
        "7804": "The current browser does not support the GoForward",
        "7805": "Web does not support zoom",
        "7900": "cc.math.Matrix3.assign(): current matrix equals matIn",
        "7901": "cc.math.mat4Assign(): pOut equals pIn",
        "7902": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
        "7903": "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
        "7904": "cc.math.Matrix4.extractPlane: Invalid plane index",
        "7905": "cc.math.mat4Assign(): pOut equals pIn",
        "7906": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
        "7907": "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
        "8000": "Can't handle this field type or size",
        "8001": "No bytes requested",
        "8002": "Too many bytes requested",
        "8003": "Missing StripByteCounts!",
        "8100": "cocos2d: ERROR: Failed to compile shader:\n %s",
        "8101": "cocos2d: ERROR: Failed to compile vertex shader",
        "8102": "cocos2d: ERROR: Failed to compile fragment shader",
        "8103": "cc.GLProgram.link(): Cannot link invalid program",
        "8104": "cocos2d: ERROR: Failed to link program: %s",
        "8105": "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
        "8200": "Please set node's active instead of rigidbody's enabled.",
        "8300": "Should only one camera exists, please check your project.",
        "8301": "Camera does not support Canvas Mode.",
        "8400": "Wrong type arguments, 'filePath' must be a String."
      };
      cc._LogInfos = logs;
    }), {} ],
    4: [ (function(require, module, exports) {
      var JS = cc.js;
      var Playable = require("./playable");
      var DynamicAnimCurve = require("./animation-curves").DynamicAnimCurve;
      var quickFindIndex = require("./animation-curves").quickFindIndex;
      var sampleMotionPaths = require("./motion-path-helper").sampleMotionPaths;
      var EventAnimCurve = require("./animation-curves").EventAnimCurve;
      var EventInfo = require("./animation-curves").EventInfo;
      var WrapModeMask = require("./types").WrapModeMask;
      var binarySearch = require("../core/utils/binary-search").binarySearchEpsilon;
      function AnimationAnimator(target, animation) {
        Playable.call(this);
        this.target = target;
        this.animation = animation;
        this._anims = new JS.array.MutableForwardIterator([]);
      }
      JS.extend(AnimationAnimator, Playable);
      var p = AnimationAnimator.prototype;
      p.playState = function(state, startTime) {
        if (!state.clip) return;
        state.curveLoaded || initClipData(this.target, state);
        state.animator = this;
        state.play();
        "number" === (__typeofVal = typeof startTime, "object" === __typeofVal ? __realTypeOfObj(startTime) : __typeofVal) && state.setTime(startTime);
        this.play();
      };
      p.stopStatesExcept = function(state) {
        var iterator = this._anims;
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var anim = array[iterator.i];
          if (anim === state) continue;
          this.stopState(anim);
        }
      };
      p.addAnimation = function(anim) {
        var index = this._anims.array.indexOf(anim);
        -1 === index && this._anims.push(anim);
        anim._setListeners(this.animation);
      };
      p.removeAnimation = function(anim) {
        var index = this._anims.array.indexOf(anim);
        if (index >= 0) {
          this._anims.fastRemoveAt(index);
          0 === this._anims.array.length && this.stop();
        } else cc.errorID(3908);
        anim.animator = null;
      };
      p.sample = function() {
        var iterator = this._anims;
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var anim = array[iterator.i];
          anim.sample();
        }
      };
      p.stopState = function(state) {
        state && state.stop();
      };
      p.pauseState = function(state) {
        state && state.pause();
      };
      p.resumeState = function(state) {
        state && state.resume();
        this.isPaused && this.resume();
      };
      p.setStateTime = function(state, time) {
        if (void 0 !== time) {
          if (state) {
            state.setTime(time);
            state.sample();
          }
        } else {
          time = state;
          var array = this._anims.array;
          for (var i = 0; i < array.length; ++i) {
            var anim = array[i];
            anim.setTime(time);
            anim.sample();
          }
        }
      };
      p.onStop = function() {
        var iterator = this._anims;
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var anim = array[iterator.i];
          anim.stop();
        }
      };
      p.onPause = function() {
        var array = this._anims.array;
        for (var i = 0; i < array.length; ++i) {
          var anim = array[i];
          anim.pause();
          anim.animator = null;
        }
      };
      p.onResume = function() {
        var array = this._anims.array;
        for (var i = 0; i < array.length; ++i) {
          var anim = array[i];
          anim.animator = this;
          anim.resume();
        }
      };
      p._reloadClip = function(state) {
        initClipData(this.target, state);
      };
      function createBatchedProperty(propPath, firstDotIndex, mainValue, animValue) {
        mainValue = mainValue.clone();
        var nextValue = mainValue;
        var leftIndex = firstDotIndex + 1;
        var rightIndex = propPath.indexOf(".", leftIndex);
        while (-1 !== rightIndex) {
          var nextName = propPath.slice(leftIndex, rightIndex);
          nextValue = nextValue[nextName];
          leftIndex = rightIndex + 1;
          rightIndex = propPath.indexOf(".", leftIndex);
        }
        var lastPropName = propPath.slice(leftIndex);
        nextValue[lastPropName] = animValue;
        return mainValue;
      }
      false;
      function splitPropPath(propPath) {
        var array = propPath.split(".");
        array.shift();
        return array.length > 0 ? array : null;
      }
      function initClipData(root, state) {
        var clip = state.clip;
        var curves = state.curves;
        curves.length = 0;
        state.duration = clip.duration;
        state.speed = clip.speed;
        state.wrapMode = clip.wrapMode;
        state.frameRate = clip.sample;
        (state.wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop ? state.repeatCount = Infinity : state.repeatCount = 1;
        function checkMotionPath(motionPath) {
          if (!Array.isArray(motionPath)) return false;
          for (var i = 0, l = motionPath.length; i < l; i++) {
            var controls = motionPath[i];
            if (!Array.isArray(controls) || 6 !== controls.length) return false;
          }
          return true;
        }
        function createPropCurve(target, propPath, keyframes) {
          var isMotionPathProp = target instanceof cc.Node && "position" === propPath;
          var motionPaths = [];
          var curve = new DynamicAnimCurve();
          curve.target = target;
          var propName, propValue;
          var dotIndex = propPath.indexOf(".");
          var hasSubProp = -1 !== dotIndex;
          if (hasSubProp) {
            propName = propPath.slice(0, dotIndex);
            propValue = target[propName];
          } else propName = propPath;
          curve.prop = propName;
          curve.subProps = splitPropPath(propPath);
          for (var i = 0, l = keyframes.length; i < l; i++) {
            var keyframe = keyframes[i];
            var ratio = keyframe.frame / state.duration;
            curve.ratios.push(ratio);
            if (isMotionPathProp) {
              var motionPath = keyframe.motionPath;
              if (motionPath && !checkMotionPath(motionPath)) {
                cc.errorID(3904, target.name, propPath, i);
                motionPath = null;
              }
              motionPaths.push(motionPath);
            }
            var curveValue = keyframe.value;
            curve.values.push(curveValue);
            var curveTypes = keyframe.curve;
            if (curveTypes) {
              if ("string" === (__typeofVal = typeof curveTypes, "object" === __typeofVal ? __realTypeOfObj(curveTypes) : __typeofVal)) {
                curve.types.push(curveTypes);
                continue;
              }
              if (Array.isArray(curveTypes)) {
                curveTypes[0] === curveTypes[1] && curveTypes[2] === curveTypes[3] ? curve.types.push(DynamicAnimCurve.Linear) : curve.types.push(DynamicAnimCurve.Bezier(curveTypes));
                continue;
              }
            }
            curve.types.push(DynamicAnimCurve.Linear);
          }
          isMotionPathProp && sampleMotionPaths(motionPaths, curve, clip.duration, clip.sample);
          var ratios = curve.ratios;
          var currRatioDif, lastRatioDif;
          var canOptimize = true;
          var EPSILON = 1e-6;
          for (var _i = 1, _l = ratios.length; _i < _l; _i++) {
            currRatioDif = ratios[_i] - ratios[_i - 1];
            if (1 === _i) lastRatioDif = currRatioDif; else if (Math.abs(currRatioDif - lastRatioDif) > EPSILON) {
              canOptimize = false;
              break;
            }
          }
          curve._findFrameIndex = canOptimize ? quickFindIndex : binarySearch;
          return curve;
        }
        function createTargetCurves(target, curveData) {
          var propsData = curveData.props;
          var compsData = curveData.comps;
          if (propsData) for (var propPath in propsData) {
            var data = propsData[propPath];
            var curve = createPropCurve(target, propPath, data);
            curves.push(curve);
          }
          if (compsData) for (var compName in compsData) {
            var comp = target.getComponent(compName);
            if (!comp) continue;
            var compData = compsData[compName];
            for (var propPath in compData) {
              var data = compData[propPath];
              var curve = createPropCurve(comp, propPath, data);
              curves.push(curve);
            }
          }
        }
        var curveData = clip.curveData;
        var childrenCurveDatas = curveData.paths;
        createTargetCurves(root, curveData);
        for (var namePath in childrenCurveDatas) {
          var target = cc.find(namePath, root);
          if (!target) continue;
          var childCurveDatas = childrenCurveDatas[namePath];
          createTargetCurves(target, childCurveDatas);
        }
        var events = clip.events;
        if (true, events) {
          var curve;
          for (var i = 0, l = events.length; i < l; i++) {
            if (!curve) {
              curve = new EventAnimCurve();
              curve.target = root;
              curves.push(curve);
            }
            var eventData = events[i];
            var ratio = eventData.frame / state.duration;
            var eventInfo;
            var index = binarySearch(curve.ratios, ratio);
            if (index >= 0) eventInfo = curve.events[index]; else {
              eventInfo = new EventInfo();
              curve.ratios.push(ratio);
              curve.events.push(eventInfo);
            }
            eventInfo.add(eventData.func, eventData.params);
          }
        }
      }
      false;
      module.exports = AnimationAnimator;
    }), {
      "../core/utils/binary-search": 114,
      "./animation-curves": 6,
      "./motion-path-helper": 12,
      "./playable": 13,
      "./types": 14
    } ],
    5: [ (function(require, module, exports) {
      var AnimationClip = cc.Class({
        name: "cc.AnimationClip",
        extends: cc.Asset,
        properties: {
          _duration: {
            default: 0,
            type: "Float"
          },
          duration: {
            get: function() {
              return this._duration;
            }
          },
          sample: {
            default: 60
          },
          speed: {
            default: 1
          },
          wrapMode: {
            default: cc.WrapMode.Normal
          },
          curveData: {
            default: {},
            visible: false
          },
          events: {
            default: [],
            visible: false
          }
        },
        statics: {
          createWithSpriteFrames: function(spriteFrames, sample) {
            if (!Array.isArray(spriteFrames)) {
              cc.errorID(3905);
              return null;
            }
            var clip = new AnimationClip();
            clip.sample = sample || clip.sample;
            clip._duration = spriteFrames.length / clip.sample;
            var frames = [];
            var step = 1 / clip.sample;
            for (var i = 0, l = spriteFrames.length; i < l; i++) frames[i] = {
              frame: i * step,
              value: spriteFrames[i]
            };
            clip.curveData = {
              comps: {
                "cc.Sprite": {
                  spriteFrame: frames
                }
              }
            };
            return clip;
          }
        }
      });
      cc.AnimationClip = module.exports = AnimationClip;
    }), {} ],
    6: [ (function(require, module, exports) {
      var bezierByTime = require("./bezier").bezierByTime;
      var binarySearch = require("../core/utils/binary-search").binarySearchEpsilon;
      var WrapModeMask = require("./types").WrapModeMask;
      var WrappedInfo = require("./types").WrappedInfo;
      function computeRatioByType(ratio, type) {
        if ("string" === (__typeofVal = typeof type, "object" === __typeofVal ? __realTypeOfObj(type) : __typeofVal)) {
          var func = cc.Easing[type];
          func ? ratio = func(ratio) : cc.errorID(3906, type);
        } else Array.isArray(type) && (ratio = bezierByTime(type, ratio));
        return ratio;
      }
      var AnimCurve = cc.Class({
        name: "cc.AnimCurve",
        sample: function(time, ratio, state) {},
        onTimeChangedManually: void 0
      });
      function quickFindIndex(ratios, ratio) {
        var length = ratios.length - 1;
        if (0 === length) return 0;
        var start = ratios[0];
        if (ratio < start) return 0;
        var end = ratios[length];
        if (ratio > end) return length;
        ratio = (ratio - start) / (end - start);
        var eachLength = 1 / length;
        var index = ratio / eachLength;
        var floorIndex = 0 | index;
        var EPSILON = 1e-6;
        if (index - floorIndex < EPSILON) return floorIndex;
        return ~(floorIndex + 1);
      }
      var DynamicAnimCurve = cc.Class({
        name: "cc.DynamicAnimCurve",
        extends: AnimCurve,
        properties: {
          target: null,
          prop: "",
          values: [],
          ratios: [],
          types: [],
          subProps: null
        },
        _findFrameIndex: binarySearch,
        sample: function(time, ratio, state) {
          var values = this.values;
          var ratios = this.ratios;
          var frameCount = ratios.length;
          if (0 === frameCount) return;
          var value;
          var index = this._findFrameIndex(ratios, ratio);
          if (index < 0) {
            index = ~index;
            if (index <= 0) value = values[0]; else if (index >= frameCount) value = values[frameCount - 1]; else {
              var fromVal = values[index - 1];
              var isNumber = "number" === (__typeofVal = typeof fromVal, "object" === __typeofVal ? __realTypeOfObj(fromVal) : __typeofVal);
              var canLerp = fromVal && fromVal.lerp;
              if (isNumber || canLerp) {
                var fromRatio = ratios[index - 1];
                var toRatio = ratios[index];
                var type = this.types[index - 1];
                var ratioBetweenFrames = (ratio - fromRatio) / (toRatio - fromRatio);
                type && (ratioBetweenFrames = computeRatioByType(ratioBetweenFrames, type));
                var toVal = values[index];
                isNumber ? value = fromVal + (toVal - fromVal) * ratioBetweenFrames : canLerp && (value = fromVal.lerp(toVal, ratioBetweenFrames));
              } else value = fromVal;
            }
          } else value = values[index];
          var subProps = this.subProps;
          if (subProps) {
            var mainProp = this.target[this.prop];
            var subProp = mainProp;
            for (var i = 0; i < subProps.length - 1; i++) {
              var subPropName = subProps[i];
              if (!subProp) return;
              subProp = subProp[subPropName];
            }
            var propName = subProps[subProps.length - 1];
            if (!subProp) return;
            subProp[propName] = value;
            value = mainProp;
          }
          this.target[this.prop] = value;
        }
      });
      DynamicAnimCurve.Linear = null;
      DynamicAnimCurve.Bezier = function(controlPoints) {
        return controlPoints;
      };
      var EventInfo = function() {
        this.events = [];
      };
      EventInfo.prototype.add = function(func, params) {
        this.events.push({
          func: func || "",
          params: params || []
        });
      };
      var EventAnimCurve = cc.Class({
        name: "cc.EventAnimCurve",
        extends: AnimCurve,
        properties: {
          target: null,
          ratios: [],
          events: [],
          _wrappedInfo: {
            default: function() {
              return new WrappedInfo();
            }
          },
          _lastWrappedInfo: null,
          _ignoreIndex: NaN
        },
        _wrapIterations: function(iterations) {
          iterations - (0 | iterations) === 0 && (iterations -= 1);
          return 0 | iterations;
        },
        sample: function(time, ratio, state) {
          var length = this.ratios.length;
          var currentWrappedInfo = state.getWrappedInfo(state.time, this._wrappedInfo);
          var direction = currentWrappedInfo.direction;
          var currentIndex = binarySearch(this.ratios, currentWrappedInfo.ratio);
          if (currentIndex < 0) {
            currentIndex = ~currentIndex - 1;
            direction < 0 && (currentIndex += 1);
          }
          this._ignoreIndex !== currentIndex && (this._ignoreIndex = NaN);
          currentWrappedInfo.frameIndex = currentIndex;
          if (!this._lastWrappedInfo) {
            this._fireEvent(currentIndex);
            this._lastWrappedInfo = new WrappedInfo(currentWrappedInfo);
            return;
          }
          var wrapMode = state.wrapMode;
          var currentIterations = this._wrapIterations(currentWrappedInfo.iterations);
          var lastWrappedInfo = this._lastWrappedInfo;
          var lastIterations = this._wrapIterations(lastWrappedInfo.iterations);
          var lastIndex = lastWrappedInfo.frameIndex;
          var lastDirection = lastWrappedInfo.direction;
          var interationsChanged = -1 !== lastIterations && currentIterations !== lastIterations;
          if (lastIndex === currentIndex && interationsChanged && 1 === length) this._fireEvent(0); else if (lastIndex !== currentIndex || interationsChanged) {
            direction = lastDirection;
            do {
              if (lastIndex !== currentIndex) {
                if (-1 === direction && 0 === lastIndex && currentIndex > 0) {
                  (wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong ? direction *= -1 : lastIndex = length;
                  lastIterations++;
                } else if (1 === direction && lastIndex === length - 1 && currentIndex < length - 1) {
                  (wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong ? direction *= -1 : lastIndex = -1;
                  lastIterations++;
                }
                if (lastIndex === currentIndex) break;
                if (lastIterations > currentIterations) break;
              }
              lastIndex += direction;
              cc.director.getAnimationManager().pushDelayEvent(this, "_fireEvent", [ lastIndex ]);
            } while (lastIndex !== currentIndex && lastIndex > -1 && lastIndex < length);
          }
          this._lastWrappedInfo.set(currentWrappedInfo);
        },
        _fireEvent: function(index) {
          if (index < 0 || index >= this.events.length || this._ignoreIndex === index) return;
          var eventInfo = this.events[index];
          var events = eventInfo.events;
          if (!this.target.isValid) return;
          var components = this.target._components;
          for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var funcName = event.func;
            for (var j = 0; j < components.length; j++) {
              var component = components[j];
              var func = component[funcName];
              func && func.apply(component, event.params);
            }
          }
        },
        onTimeChangedManually: function(time, state) {
          this._lastWrappedInfo = null;
          this._ignoreIndex = NaN;
          var info = state.getWrappedInfo(time, this._wrappedInfo);
          var direction = info.direction;
          var frameIndex = binarySearch(this.ratios, info.ratio);
          if (frameIndex < 0) {
            frameIndex = ~frameIndex - 1;
            direction < 0 && (frameIndex += 1);
            this._ignoreIndex = frameIndex;
          }
        }
      });
      false;
      module.exports = {
        AnimCurve: AnimCurve,
        DynamicAnimCurve: DynamicAnimCurve,
        EventAnimCurve: EventAnimCurve,
        EventInfo: EventInfo,
        computeRatioByType: computeRatioByType,
        quickFindIndex: quickFindIndex
      };
    }), {
      "../core/utils/binary-search": 114,
      "./bezier": 9,
      "./types": 14
    } ],
    7: [ (function(require, module, exports) {
      var JS = cc.js;
      var AnimationManager = cc.Class({
        ctor: function() {
          this.__instanceId = cc.ClassManager.getNewInstanceId();
          this._anims = new JS.array.MutableForwardIterator([]);
          this._delayEvents = [];
        },
        update: function(dt) {
          var iterator = this._anims;
          var array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var anim = array[iterator.i];
            anim._isPlaying && !anim._isPaused && anim.update(dt);
          }
          var events = this._delayEvents;
          for (i = 0, l = events.length; i < l; i++) {
            var event = events[i];
            event.target[event.func].apply(event.target, event.args);
          }
          events.length = 0;
        },
        destruct: function() {},
        addAnimation: function(anim) {
          var index = this._anims.array.indexOf(anim);
          -1 === index && this._anims.push(anim);
        },
        removeAnimation: function(anim) {
          var index = this._anims.array.indexOf(anim);
          index >= 0 ? this._anims.fastRemoveAt(index) : cc.errorID(3907);
        },
        pushDelayEvent: function(target, func, args) {
          this._delayEvents.push({
            target: target,
            func: func,
            args: args
          });
        }
      });
      cc.AnimationManager = module.exports = AnimationManager;
    }), {} ],
    8: [ (function(require, module, exports) {
      var JS = cc.js;
      var Playable = require("./playable");
      var Types = require("./types");
      var WrappedInfo = Types.WrappedInfo;
      var WrapMode = Types.WrapMode;
      var WrapModeMask = Types.WrapModeMask;
      function AnimationState(clip, name) {
        Playable.call(this);
        cc.EventTarget.call(this);
        this._currentFramePlayed = false;
        this._delay = 0;
        this._delayTime = 0;
        this._wrappedInfo = new WrappedInfo();
        this._lastWrappedInfo = null;
        this._process = process;
        this._clip = clip;
        this._name = name || clip && clip.name;
        this.animator = null;
        this.curves = [];
        this.delay = 0;
        this.repeatCount = 1;
        this.duration = 1;
        this.speed = 1;
        this.wrapMode = WrapMode.Normal;
        this.time = 0;
        this._emit = this.emit;
        this.emit = function() {
          var args = new Array(arguments.length);
          for (var i = 0, l = args.length; i < l; i++) args[i] = arguments[i];
          cc.director.getAnimationManager().pushDelayEvent(this, "_emit", args);
        };
      }
      JS.extend(AnimationState, Playable);
      var proto = AnimationState.prototype;
      cc.js.mixin(proto, cc.EventTarget.prototype);
      proto._setListeners = function(target) {
        this._capturingListeners = target ? target._capturingListeners : null;
        this._bubblingListeners = target ? target._bubblingListeners : null;
        this._hasListenerCache = target ? target._hasListenerCache : null;
      };
      proto.onPlay = function() {
        this.setTime(0);
        this._delayTime = this._delay;
        cc.director.getAnimationManager().addAnimation(this);
        this.animator && this.animator.addAnimation(this);
        this.emit("play", this);
      };
      proto.onStop = function() {
        this.isPaused || cc.director.getAnimationManager().removeAnimation(this);
        this.animator && this.animator.removeAnimation(this);
        this.emit("stop", this);
      };
      proto.onResume = function() {
        cc.director.getAnimationManager().addAnimation(this);
        this.emit("resume", this);
      };
      proto.onPause = function() {
        cc.director.getAnimationManager().removeAnimation(this);
        this.emit("pause", this);
      };
      proto.setTime = function(time) {
        this._currentFramePlayed = false;
        this.time = time || 0;
        var curves = this.curves;
        for (var i = 0, l = curves.length; i < l; i++) {
          var curve = curves[i];
          curve.onTimeChangedManually && curve.onTimeChangedManually(time, this);
        }
      };
      function process() {
        var info = this.sample();
        var cache = this._hasListenerCache;
        if (cache && cache["lastframe"]) {
          var lastInfo;
          lastInfo = this._lastWrappedInfo ? this._lastWrappedInfo : this._lastWrappedInfo = new WrappedInfo(info);
          this.repeatCount > 1 && (0 | info.iterations) > (0 | lastInfo.iterations) && this.emit("lastframe", this);
          lastInfo.set(info);
        }
        if (info.stopped) {
          this.stop();
          this.emit("finished", this);
        }
      }
      function simpleProcess() {
        var time = this.time;
        var duration = this.duration;
        if (time > duration) {
          time %= duration;
          0 === time && (time = duration);
        } else if (time < 0) {
          time %= duration;
          0 !== time && (time += duration);
        }
        var ratio = time / duration;
        var curves = this.curves;
        for (var i = 0, len = curves.length; i < len; i++) {
          var curve = curves[i];
          curve.sample(time, ratio, this);
        }
        var cache = this._hasListenerCache;
        if (cache && cache["lastframe"]) {
          void 0 === this._lastIterations && (this._lastIterations = ratio);
          (this.time > 0 && this._lastIterations > ratio || this.time < 0 && this._lastIterations < ratio) && this.emit("lastframe", this);
          this._lastIterations = ratio;
        }
      }
      proto.update = function(delta) {
        if (this._delayTime > 0) {
          this._delayTime -= delta;
          if (this._delayTime > 0) return;
        }
        this._currentFramePlayed ? this.time += delta * this.speed : this._currentFramePlayed = true;
        this._process();
      };
      proto._needRevers = function(currentIterations) {
        var wrapMode = this.wrapMode;
        var needRevers = false;
        if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
          var isEnd = currentIterations - (0 | currentIterations) === 0;
          isEnd && currentIterations > 0 && (currentIterations -= 1);
          var isOddIteration = 1 & currentIterations;
          isOddIteration && (needRevers = !needRevers);
        }
        (wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse && (needRevers = !needRevers);
        return needRevers;
      };
      proto.getWrappedInfo = function(time, info) {
        info = info || new WrappedInfo();
        var stopped = false;
        var duration = this.duration;
        var repeatCount = this.repeatCount;
        var currentIterations = time > 0 ? time / duration : -time / duration;
        if (currentIterations >= repeatCount) {
          currentIterations = repeatCount;
          stopped = true;
          var tempRatio = repeatCount - (0 | repeatCount);
          0 === tempRatio && (tempRatio = 1);
          time = tempRatio * duration * (time > 0 ? 1 : -1);
        }
        if (time > duration) {
          var tempTime = time % duration;
          time = 0 === tempTime ? duration : tempTime;
        } else if (time < 0) {
          time %= duration;
          0 !== time && (time += duration);
        }
        var needRevers = false;
        var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
        shouldWrap && (needRevers = this._needRevers(currentIterations));
        var direction = needRevers ? -1 : 1;
        this.speed < 0 && (direction *= -1);
        shouldWrap && needRevers && (time = duration - time);
        info.ratio = time / duration;
        info.time = time;
        info.direction = direction;
        info.stopped = stopped;
        info.iterations = currentIterations;
        return info;
      };
      proto.sample = function() {
        var info = this.getWrappedInfo(this.time, this._wrappedInfo);
        var curves = this.curves;
        for (var i = 0, len = curves.length; i < len; i++) {
          var curve = curves[i];
          curve.sample(info.time, info.ratio, this);
        }
        return info;
      };
      JS.get(proto, "clip", (function() {
        return this._clip;
      }));
      JS.get(proto, "name", (function() {
        return this._name;
      }));
      JS.obsolete(proto, "AnimationState.length", "duration");
      JS.getset(proto, "curveLoaded", (function() {
        return this.curves.length > 0;
      }), (function() {
        this.curves.length = 0;
      }));
      JS.getset(proto, "wrapMode", (function() {
        return this._wrapMode;
      }), (function(value) {
        this._wrapMode = value;
        false;
        this.time = 0;
        value & WrapModeMask.Loop ? this.repeatCount = Infinity : this.repeatCount = 1;
      }));
      JS.getset(proto, "repeatCount", (function() {
        return this._repeatCount;
      }), (function(value) {
        this._repeatCount = value;
        var shouldWrap = this._wrapMode & WrapModeMask.ShouldWrap;
        var reverse = (this.wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse;
        this._process = Infinity !== value || shouldWrap || reverse ? process : simpleProcess;
      }));
      JS.getset(proto, "delay", (function() {
        return this._delay;
      }), (function(value) {
        this._delayTime = this._delay = value;
      }));
      cc.AnimationState = module.exports = AnimationState;
    }), {
      "./playable": 13,
      "./types": 14
    } ],
    9: [ (function(require, module, exports) {
      function bezier(C1, C2, C3, C4, t) {
        var t1 = 1 - t;
        return C1 * t1 * t1 * t1 + 3 * C2 * t1 * t1 * t + 3 * C3 * t1 * t * t + C4 * t * t * t;
      }
      var cos = Math.cos, acos = Math.acos, max = Math.max, pi = Math.PI, tau = 2 * pi, sqrt = Math.sqrt;
      function crt(v) {
        return v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3);
      }
      function cardano(curve, x) {
        var pa = x - 0;
        var pb = x - curve[0];
        var pc = x - curve[2];
        var pd = x - 1;
        var pa3 = 3 * pa;
        var pb3 = 3 * pb;
        var pc3 = 3 * pc;
        var d = -pa + pb3 - pc3 + pd, rd = 1 / d, r3 = 1 / 3, a = (pa3 - 6 * pb + pc3) * rd, a3 = a * r3, b = (-pa3 + pb3) * rd, c = pa * rd, p = (3 * b - a * a) * r3, p3 = p * r3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3, u1, v1, x1, x2, x3;
        if (discriminant < 0) {
          var mp3 = -p * r3, mp33 = mp3 * mp3 * mp3, r = sqrt(mp33), t = -q / (2 * r), cosphi = t < -1 ? -1 : t > 1 ? 1 : t, phi = acos(cosphi), crtr = crt(r), t1 = 2 * crtr;
          x1 = t1 * cos(phi * r3) - a3;
          x2 = t1 * cos((phi + tau) * r3) - a3;
          x3 = t1 * cos((phi + 2 * tau) * r3) - a3;
          return 0 <= x1 && x1 <= 1 ? 0 <= x2 && x2 <= 1 ? 0 <= x3 && x3 <= 1 ? max(x1, x2, x3) : max(x1, x2) : 0 <= x3 && x3 <= 1 ? max(x1, x3) : x1 : 0 <= x2 && x2 <= 1 ? 0 <= x3 && x3 <= 1 ? max(x2, x3) : x2 : x3;
        }
        if (0 === discriminant) {
          u1 = q2 < 0 ? crt(-q2) : -crt(q2);
          x1 = 2 * u1 - a3;
          x2 = -u1 - a3;
          return 0 <= x1 && x1 <= 1 ? 0 <= x2 && x2 <= 1 ? max(x1, x2) : x1 : x2;
        }
        var sd = sqrt(discriminant);
        u1 = crt(-q2 + sd);
        v1 = crt(q2 + sd);
        x1 = u1 - v1 - a3;
        return x1;
      }
      function bezierByTime(controlPoints, x) {
        var percent = cardano(controlPoints, x);
        var p0y = 0;
        var p1y = controlPoints[1];
        var p2y = controlPoints[3];
        var p3y = 1;
        var t1 = 1 - percent;
        return p0y * t1 * t1 * t1 + 3 * p1y * percent * t1 * t1 + 3 * p2y * percent * percent * t1 + p3y * percent * percent * percent;
      }
      false;
      module.exports = {
        bezier: bezier,
        bezierByTime: bezierByTime
      };
    }), {} ],
    10: [ (function(require, module, exports) {
      var Easing = {
        constant: function() {
          return 0;
        },
        linear: function(k) {
          return k;
        },
        quadIn: function(k) {
          return k * k;
        },
        quadOut: function(k) {
          return k * (2 - k);
        },
        quadInOut: function(k) {
          if ((k *= 2) < 1) return .5 * k * k;
          return -.5 * (--k * (k - 2) - 1);
        },
        cubicIn: function(k) {
          return k * k * k;
        },
        cubicOut: function(k) {
          return --k * k * k + 1;
        },
        cubicInOut: function(k) {
          if ((k *= 2) < 1) return .5 * k * k * k;
          return .5 * ((k -= 2) * k * k + 2);
        },
        quartIn: function(k) {
          return k * k * k * k;
        },
        quartOut: function(k) {
          return 1 - --k * k * k * k;
        },
        quartInOut: function(k) {
          if ((k *= 2) < 1) return .5 * k * k * k * k;
          return -.5 * ((k -= 2) * k * k * k - 2);
        },
        quintIn: function(k) {
          return k * k * k * k * k;
        },
        quintOut: function(k) {
          return --k * k * k * k * k + 1;
        },
        quintInOut: function(k) {
          if ((k *= 2) < 1) return .5 * k * k * k * k * k;
          return .5 * ((k -= 2) * k * k * k * k + 2);
        },
        sineIn: function(k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        sineOut: function(k) {
          return Math.sin(k * Math.PI / 2);
        },
        sineInOut: function(k) {
          return .5 * (1 - Math.cos(Math.PI * k));
        },
        expoIn: function(k) {
          return 0 === k ? 0 : Math.pow(1024, k - 1);
        },
        expoOut: function(k) {
          return 1 === k ? 1 : 1 - Math.pow(2, -10 * k);
        },
        expoInOut: function(k) {
          if (0 === k) return 0;
          if (1 === k) return 1;
          if ((k *= 2) < 1) return .5 * Math.pow(1024, k - 1);
          return .5 * (2 - Math.pow(2, -10 * (k - 1)));
        },
        circIn: function(k) {
          return 1 - Math.sqrt(1 - k * k);
        },
        circOut: function(k) {
          return Math.sqrt(1 - --k * k);
        },
        circInOut: function(k) {
          if ((k *= 2) < 1) return -.5 * (Math.sqrt(1 - k * k) - 1);
          return .5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
        elasticIn: function(k) {
          var s, a = .1, p = .4;
          if (0 === k) return 0;
          if (1 === k) return 1;
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else s = p * Math.asin(1 / a) / (2 * Math.PI);
          return -a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p);
        },
        elasticOut: function(k) {
          var s, a = .1, p = .4;
          if (0 === k) return 0;
          if (1 === k) return 1;
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else s = p * Math.asin(1 / a) / (2 * Math.PI);
          return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
        },
        elasticInOut: function(k) {
          var s, a = .1, p = .4;
          if (0 === k) return 0;
          if (1 === k) return 1;
          if (!a || a < 1) {
            a = 1;
            s = p / 4;
          } else s = p * Math.asin(1 / a) / (2 * Math.PI);
          if ((k *= 2) < 1) return a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * -.5;
          return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * .5 + 1;
        },
        backIn: function(k) {
          var s = 1.70158;
          return k * k * ((s + 1) * k - s);
        },
        backOut: function(k) {
          var s = 1.70158;
          return --k * k * ((s + 1) * k + s) + 1;
        },
        backInOut: function(k) {
          var s = 2.5949095;
          if ((k *= 2) < 1) return k * k * ((s + 1) * k - s) * .5;
          return .5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },
        bounceOut: function(k) {
          return k < 1 / 2.75 ? 7.5625 * k * k : k < 2 / 2.75 ? 7.5625 * (k -= 1.5 / 2.75) * k + .75 : k < 2.5 / 2.75 ? 7.5625 * (k -= 2.25 / 2.75) * k + .9375 : 7.5625 * (k -= 2.625 / 2.75) * k + .984375;
        },
        smooth: function(t) {
          if (t <= 0) return 0;
          if (t >= 1) return 1;
          return t * t * (3 - 2 * t);
        },
        fade: function(t) {
          if (t <= 0) return 0;
          if (t >= 1) return 1;
          return t * t * t * (t * (6 * t - 15) + 10);
        }
      };
      function _makeOutIn(fnIn, fnOut) {
        return function(k) {
          if (k < .5) return fnOut(2 * k) / 2;
          return fnIn(2 * k - 1) / 2 + .5;
        };
      }
      Easing.quadOutIn = _makeOutIn(Easing.quadIn, Easing.quadOut);
      Easing.cubicOutIn = _makeOutIn(Easing.cubicIn, Easing.cubicOut);
      Easing.quartOutIn = _makeOutIn(Easing.quartIn, Easing.quartOut);
      Easing.quintOutIn = _makeOutIn(Easing.quintIn, Easing.quintOut);
      Easing.sineOutIn = _makeOutIn(Easing.sineIn, Easing.sineOut);
      Easing.expoOutIn = _makeOutIn(Easing.expoIn, Easing.expoOut);
      Easing.circOutIn = _makeOutIn(Easing.circIn, Easing.circOut);
      Easing.backOutIn = _makeOutIn(Easing.backIn, Easing.backOut);
      Easing.backOutIn = _makeOutIn(Easing.backIn, Easing.backOut);
      Easing.bounceIn = function(k) {
        return 1 - Easing.bounceOut(1 - k);
      };
      Easing.bounceInOut = function(k) {
        if (k < .5) return .5 * Easing.bounceIn(2 * k);
        return .5 * Easing.bounceOut(2 * k - 1) + .5;
      };
      Easing.bounceOutIn = _makeOutIn(Easing.bounceIn, Easing.bounceOut);
      cc.Easing = module.exports = Easing;
    }), {} ],
    11: [ (function(require, module, exports) {
      require("./bezier");
      require("./easing");
      require("./types");
      require("./motion-path-helper");
      require("./animation-curves");
      require("./animation-clip");
      require("./animation-manager");
      require("./animation-state");
      require("./animation-animator");
    }), {
      "./animation-animator": 4,
      "./animation-clip": 5,
      "./animation-curves": 6,
      "./animation-manager": 7,
      "./animation-state": 8,
      "./bezier": 9,
      "./easing": 10,
      "./motion-path-helper": 12,
      "./types": 14
    } ],
    12: [ (function(require, module, exports) {
      var DynamicAnimCurve = require("./animation-curves").DynamicAnimCurve;
      var computeRatioByType = require("./animation-curves").computeRatioByType;
      var bezier = require("./bezier").bezier;
      var binarySearch = require("../core/utils/binary-search").binarySearchEpsilon;
      var v2 = cc.v2;
      function Curve(points) {
        this.points = points || [];
        this.beziers = [];
        this.ratios = [];
        this.progresses = [];
        this.length = 0;
        this.computeBeziers();
      }
      Curve.prototype.computeBeziers = function() {
        this.beziers.length = 0;
        this.ratios.length = 0;
        this.progresses.length = 0;
        this.length = 0;
        var bezier;
        for (var i = 1; i < this.points.length; i++) {
          var startPoint = this.points[i - 1];
          var endPoint = this.points[i];
          bezier = new Bezier();
          bezier.start = startPoint.pos;
          bezier.startCtrlPoint = startPoint.out;
          bezier.end = endPoint.pos;
          bezier.endCtrlPoint = endPoint.in;
          this.beziers.push(bezier);
          this.length += bezier.getLength();
        }
        var current = 0;
        for (var i = 0; i < this.beziers.length; i++) {
          bezier = this.beziers[i];
          this.ratios[i] = bezier.getLength() / this.length;
          this.progresses[i] = current += this.ratios[i];
        }
        return this.beziers;
      };
      function Bezier() {
        this.start = v2();
        this.end = v2();
        this.startCtrlPoint = v2();
        this.endCtrlPoint = v2();
      }
      Bezier.prototype.getPointAt = function(u) {
        var t = this.getUtoTmapping(u);
        return this.getPoint(t);
      };
      Bezier.prototype.getPoint = function(t) {
        var x = bezier(this.start.x, this.startCtrlPoint.x, this.endCtrlPoint.x, this.end.x, t);
        var y = bezier(this.start.y, this.startCtrlPoint.y, this.endCtrlPoint.y, this.end.y, t);
        return new v2(x, y);
      };
      Bezier.prototype.getLength = function() {
        var lengths = this.getLengths();
        return lengths[lengths.length - 1];
      };
      Bezier.prototype.getLengths = function(divisions) {
        divisions || (divisions = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
        if (this.cacheArcLengths && this.cacheArcLengths.length === divisions + 1) return this.cacheArcLengths;
        var cache = [];
        var current, last = this.getPoint(0);
        var p, sum = 0;
        cache.push(0);
        for (p = 1; p <= divisions; p++) {
          current = this.getPoint(p / divisions);
          sum += cc.pDistance(current, last);
          cache.push(sum);
          last = current;
        }
        this.cacheArcLengths = cache;
        return cache;
      };
      Bezier.prototype.getUtoTmapping = function(u, distance) {
        var arcLengths = this.getLengths();
        var i = 0, il = arcLengths.length;
        var targetArcLength;
        targetArcLength = distance || u * arcLengths[il - 1];
        var low = 0, high = il - 1, comparison;
        while (low <= high) {
          i = Math.floor(low + (high - low) / 2);
          comparison = arcLengths[i] - targetArcLength;
          if (comparison < 0) {
            low = i + 1;
            continue;
          }
          if (comparison > 0) {
            high = i - 1;
            continue;
          }
          high = i;
          break;
        }
        i = high;
        if (arcLengths[i] === targetArcLength) {
          var t = i / (il - 1);
          return t;
        }
        var lengthBefore = arcLengths[i];
        var lengthAfter = arcLengths[i + 1];
        var segmentLength = lengthAfter - lengthBefore;
        var segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
        var t = (i + segmentFraction) / (il - 1);
        return t;
      };
      function sampleMotionPaths(motionPaths, data, duration, fps) {
        function createControlPoints(array) {
          if (array instanceof cc.Vec2) return {
            in: array,
            pos: array,
            out: array
          };
          if (Array.isArray(array) && 6 === array.length) return {
            in: v2(array[2], array[3]),
            pos: v2(array[0], array[1]),
            out: v2(array[4], array[5])
          };
          return {
            in: cc.Vec2.ZERO,
            pos: cc.Vec2.ZERO,
            out: cc.Vec2.ZERO
          };
        }
        var values = data.values;
        if (0 === motionPaths.length || 0 === values.length) return;
        values = values.map((function(value) {
          return v2(value[0], value[1]);
        }));
        if (1 === values.length) {
          data.values = values;
          return;
        }
        var types = data.types;
        var ratios = data.ratios;
        var newValues = data.values = [];
        var newTypes = data.types = [];
        var newRatios = data.ratios = [];
        function addNewDatas(value, type, ratio) {
          newValues.push(value);
          newTypes.push(type);
          newRatios.push(ratio);
        }
        var startRatioOffset = 0;
        var EPSILON = 1e-6;
        var newType = DynamicAnimCurve.Linear;
        for (var i = 0, l = motionPaths.length; i < l - 1; i++) {
          var motionPath = motionPaths[i];
          var ratio = ratios[i];
          var nextRatio = ratios[i + 1];
          var betweenRatio = nextRatio - ratio;
          var value = values[i];
          var nextValue = values[i + 1];
          var type = types[i];
          var results = [];
          var progress = startRatioOffset / betweenRatio;
          var speed = 1 / (betweenRatio * duration * fps);
          var finalProgress;
          if (motionPath && motionPath.length > 0) {
            var points = [];
            points.push(createControlPoints(value));
            for (var j = 0, l2 = motionPath.length; j < l2; j++) {
              var controlPoints = createControlPoints(motionPath[j]);
              points.push(controlPoints);
            }
            points.push(createControlPoints(nextValue));
            var curve = new Curve(points);
            curve.computeBeziers();
            var progresses = curve.progresses;
            while (1 - progress > EPSILON) {
              finalProgress = progress;
              finalProgress = computeRatioByType(finalProgress, type);
              var pos, bezier, normal, length;
              if (finalProgress < 0) {
                bezier = curve.beziers[0];
                length = (0 - finalProgress) * bezier.getLength();
                normal = bezier.start.sub(bezier.endCtrlPoint).normalize();
                pos = bezier.start.add(normal.mul(length));
              } else if (finalProgress > 1) {
                bezier = curve.beziers[curve.beziers.length - 1];
                length = (finalProgress - 1) * bezier.getLength();
                normal = bezier.end.sub(bezier.startCtrlPoint).normalize();
                pos = bezier.end.add(normal.mul(length));
              } else {
                var bezierIndex = binarySearch(progresses, finalProgress);
                bezierIndex < 0 && (bezierIndex = ~bezierIndex);
                finalProgress -= bezierIndex > 0 ? progresses[bezierIndex - 1] : 0;
                finalProgress /= curve.ratios[bezierIndex];
                pos = curve.beziers[bezierIndex].getPointAt(finalProgress);
              }
              results.push(pos);
              progress += speed;
            }
          } else while (1 - progress > EPSILON) {
            finalProgress = progress;
            finalProgress = computeRatioByType(finalProgress, type);
            results.push(value.lerp(nextValue, finalProgress));
            progress += speed;
          }
          newType = "constant" === type ? type : DynamicAnimCurve.Linear;
          for (var j = 0, l2 = results.length; j < l2; j++) {
            var newRatio = ratio + startRatioOffset + speed * j * betweenRatio;
            addNewDatas(results[j], newType, newRatio);
          }
          startRatioOffset = Math.abs(progress - 1) > EPSILON ? (progress - 1) * betweenRatio : 0;
        }
        ratios[ratios.length - 1] !== newRatios[newRatios.length - 1] && addNewDatas(values[values.length - 1], newType, ratios[ratios.length - 1]);
      }
      false;
      module.exports = {
        sampleMotionPaths: sampleMotionPaths,
        Curve: Curve,
        Bezier: Bezier
      };
    }), {
      "../core/utils/binary-search": 114,
      "./animation-curves": 6,
      "./bezier": 9
    } ],
    13: [ (function(require, module, exports) {
      var JS = cc.js;
      function Playable() {
        this._isPlaying = false;
        this._isPaused = false;
        this._stepOnce = false;
      }
      var prototype = Playable.prototype;
      JS.get(prototype, "isPlaying", (function() {
        return this._isPlaying;
      }), true);
      JS.get(prototype, "isPaused", (function() {
        return this._isPaused;
      }), true);
      var virtual = function() {};
      prototype.onPlay = virtual;
      prototype.onPause = virtual;
      prototype.onResume = virtual;
      prototype.onStop = virtual;
      prototype.onError = virtual;
      prototype.play = function() {
        if (this._isPlaying) if (this._isPaused) {
          this._isPaused = false;
          this.onResume();
        } else this.onError("already-playing"); else {
          this._isPlaying = true;
          this.onPlay();
        }
      };
      prototype.stop = function() {
        if (this._isPlaying) {
          this._isPlaying = false;
          this.onStop();
          this._isPaused = false;
        }
      };
      prototype.pause = function() {
        if (this._isPlaying && !this._isPaused) {
          this._isPaused = true;
          this.onPause();
        }
      };
      prototype.resume = function() {
        if (this._isPlaying && this._isPaused) {
          this._isPaused = false;
          this.onResume();
        }
      };
      prototype.step = function() {
        this.pause();
        this._stepOnce = true;
        this._isPlaying || this.play();
      };
      module.exports = Playable;
    }), {} ],
    14: [ (function(require, module, exports) {
      var JS = cc.js;
      var WrapModeMask = {
        Loop: 2,
        ShouldWrap: 4,
        PingPong: 22,
        Reverse: 36
      };
      var WrapMode = cc.Enum({
        Default: 0,
        Normal: 1,
        Reverse: WrapModeMask.Reverse,
        Loop: WrapModeMask.Loop,
        LoopReverse: WrapModeMask.Loop | WrapModeMask.Reverse,
        PingPong: WrapModeMask.PingPong,
        PingPongReverse: WrapModeMask.PingPong | WrapModeMask.Reverse
      });
      cc.WrapMode = WrapMode;
      function WrappedInfo(info) {
        if (info) {
          this.set(info);
          return;
        }
        this.ratio = 0;
        this.time = 0;
        this.direction = 1;
        this.stopped = true;
        this.iterations = 0;
        this.frameIndex = void 0;
      }
      WrappedInfo.prototype.set = function(info) {
        this.ratio = info.ratio;
        this.time = info.time;
        this.direction = info.direction;
        this.stopped = info.stopped;
        this.iterations = info.iterations;
        this.frameIndex = info.frameIndex;
      };
      module.exports = {
        WrapModeMask: WrapModeMask,
        WrapMode: WrapMode,
        WrappedInfo: WrappedInfo
      };
    }), {} ],
    15: [ (function(require, module, exports) {
      var js = cc.js;
      exports.removed = function(audioEngine) {
        function willPlayMusicError() {
          cc.errorID(1403);
        }
        js.getset(audioEngine, "willPlayMusic", willPlayMusicError, willPlayMusicError);
      };
      exports.deprecated = function(audioEngine) {
        var musicId = -1;
        var musicPath = 1;
        var musicLoop = 1;
        var musicVolume = 1;
        var effectsVolume = 1;
        var pauseIDCache = [];
        js.get(audioEngine, "playMusic", (function() {
          return function(url, loop) {
            audioEngine.stop(musicId);
            musicId = audioEngine.play(url, loop, musicVolume);
            musicPath = url;
            musicLoop = loop;
            return musicId;
          };
        }));
        js.get(audioEngine, "stopMusic", (function() {
          return function() {
            audioEngine.stop(musicId);
            return musicId;
          };
        }));
        js.get(audioEngine, "pauseMusic", (function() {
          return function() {
            audioEngine.pause(musicId);
            return musicId;
          };
        }));
        js.get(audioEngine, "resumeMusic", (function() {
          return function() {
            audioEngine.resume(musicId);
            return musicId;
          };
        }));
        js.get(audioEngine, "rewindMusic", (function() {
          return function() {
            audioEngine.setCurrentTime(musicId, 0);
            return musicId;
          };
        }));
        js.get(audioEngine, "getMusicVolume", (function() {
          return function() {
            return musicVolume;
          };
        }));
        js.get(audioEngine, "setMusicVolume", (function() {
          return function(volume) {
            musicVolume = volume;
            audioEngine.setVolume(musicId, musicVolume);
            return musicVolume;
          };
        }));
        js.get(audioEngine, "isMusicPlaying", (function() {
          return function() {
            return audioEngine.getState(musicId) === audioEngine.AudioState.PLAYING;
          };
        }));
        js.get(audioEngine, "playEffect", (function() {
          return function(url, loop, volume) {
            return audioEngine.play(url, loop || false, void 0 === volume ? effectsVolume : volume);
          };
        }));
        js.get(audioEngine, "setEffectsVolume", (function(volume) {
          return function(volume) {
            effectsVolume = volume;
            var id2audio = audioEngine._id2audio;
            for (var id in id2audio) {
              if (id === musicId) continue;
              audioEngine.setVolume(id, volume);
            }
          };
        }));
        js.get(audioEngine, "getEffectsVolume", (function() {
          return function() {
            return effectsVolume;
          };
        }));
        js.get(audioEngine, "pauseEffect", (function() {
          return function(id) {
            return audioEngine.pause(id);
          };
        }));
        js.get(audioEngine, "pauseAllEffects", (function() {
          true;
          return function() {
            var musicPlay = audioEngine.getState(musicId) === audioEngine.AudioState.PLAYING;
            audioEngine.pauseAll();
            musicPlay && audioEngine.resume(musicId);
          };
        }));
        js.get(audioEngine, "resumeEffect", (function() {
          return function(id) {
            audioEngine.resume(id);
          };
        }));
        js.get(audioEngine, "resumeAllEffects", (function() {
          true;
          return function() {
            var musicPaused = audioEngine.getState(musicId) === audioEngine.AudioState.PAUSED;
            audioEngine.resumeAll();
            musicPaused && audioEngine.getState(musicId) === audioEngine.AudioState.PLAYING && audioEngine.pause(musicId);
          };
        }));
        js.get(audioEngine, "stopEffect", (function() {
          return function(id) {
            return audioEngine.stop(id);
          };
        }));
        js.get(audioEngine, "stopAllEffects", (function() {
          true;
          return function() {
            var musicPlay = audioEngine.getState(musicId) === audioEngine.AudioState.PLAYING;
            var currentTime = audioEngine.getCurrentTime(musicId);
            audioEngine.stopAll();
            if (musicPlay) {
              musicId = audioEngine.play(musicPath, musicLoop);
              audioEngine.setCurrentTime(musicId, currentTime);
            }
          };
        }));
        js.get(audioEngine, "unloadEffect", (function() {
          return function(id) {
            return audioEngine.stop(id);
          };
        }));
        false;
      };
    }), {} ],
    16: [ (function(require, module, exports) {
      "use strict";
      var PrefabHelper = require("./utils/prefab-helper");
      var SgHelper = require("./utils/scene-graph-helper");
      var eventManager = require("./event-manager");
      var Flags = cc.Object.Flags;
      var Destroying = Flags.Destroying;
      var POSITION_CHANGED = "position-changed";
      var SIZE_CHANGED = "size-changed";
      var ANCHOR_CHANGED = "anchor-changed";
      var ROTATION_CHANGED = "rotation-changed";
      var SCALE_CHANGED = "scale-changed";
      var CHILD_REORDER = "child-reorder";
      var ERR_INVALID_NUMBER = false;
      var Misc = require("./utils/misc");
      var Event = require("./event/event");
      var ActionManagerExist = !!cc.ActionManager;
      var emptyFunc = function() {};
      var EventType = cc.Enum({
        TOUCH_START: "touchstart",
        TOUCH_MOVE: "touchmove",
        TOUCH_END: "touchend",
        TOUCH_CANCEL: "touchcancel",
        MOUSE_DOWN: "mousedown",
        MOUSE_MOVE: "mousemove",
        MOUSE_ENTER: "mouseenter",
        MOUSE_LEAVE: "mouseleave",
        MOUSE_UP: "mouseup",
        MOUSE_WHEEL: "mousewheel"
      });
      var _touchEvents = [ EventType.TOUCH_START, EventType.TOUCH_MOVE, EventType.TOUCH_END, EventType.TOUCH_CANCEL ];
      var _mouseEvents = [ EventType.MOUSE_DOWN, EventType.MOUSE_ENTER, EventType.MOUSE_MOVE, EventType.MOUSE_LEAVE, EventType.MOUSE_UP, EventType.MOUSE_WHEEL ];
      var _currentHovered = null;
      var _touchStartHandler = function(touch, event) {
        var pos = touch.getLocation();
        var node = this.owner;
        if (node._hitTest(pos, this)) {
          true;
          event = Event.EventTouch.pool.get(event);
          event.type = EventType.TOUCH_START;
          event.touch = touch;
          event.bubbles = true;
          node.dispatchEvent(event);
          true;
          event.touch = null;
          event._touches = null;
          Event.EventTouch.pool.put(event);
          return true;
        }
        return false;
      };
      var _touchMoveHandler = function(touch, event) {
        true;
        event = Event.EventTouch.pool.get(event);
        var node = this.owner;
        event.type = EventType.TOUCH_MOVE;
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
        true;
        event.touch = null;
        event._touches = null;
        Event.EventTouch.pool.put(event);
      };
      var _touchEndHandler = function(touch, event) {
        true;
        event = Event.EventTouch.pool.get(event);
        var pos = touch.getLocation();
        var node = this.owner;
        node._hitTest(pos, this) ? event.type = EventType.TOUCH_END : event.type = EventType.TOUCH_CANCEL;
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
        true;
        event.touch = null;
        event._touches = null;
        Event.EventTouch.pool.put(event);
      };
      var _touchCancelHandler = function(touch, event) {
        true;
        event = Event.EventTouch.pool.get(event);
        var pos = touch.getLocation();
        var node = this.owner;
        event.type = EventType.TOUCH_CANCEL;
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
        true;
        event.touch = null;
        event._touches = null;
        Event.EventTouch.pool.put(event);
      };
      var _mouseDownHandler = function(event) {
        var pos = event.getLocation();
        var node = this.owner;
        if (node._hitTest(pos, this)) {
          true;
          event.stopPropagation();
          event = Event.EventMouse.pool.get(event);
          event.type = EventType.MOUSE_DOWN;
          event.bubbles = true;
          node.dispatchEvent(event);
          true;
          Event.EventMouse.pool.put(event);
        }
      };
      var _mouseMoveHandler = function(event) {
        var pos = event.getLocation();
        var node = this.owner;
        var hit = node._hitTest(pos, this);
        if (true, hit || this._previousIn) {
          event.stopPropagation();
          event = Event.EventMouse.pool.get(event);
        }
        if (hit) {
          if (!this._previousIn) {
            if (_currentHovered) {
              event.type = EventType.MOUSE_LEAVE;
              _currentHovered.dispatchEvent(event);
              _currentHovered._mouseListener._previousIn = false;
            }
            _currentHovered = this.owner;
            event.type = EventType.MOUSE_ENTER;
            node.dispatchEvent(event);
            this._previousIn = true;
          }
          event.type = EventType.MOUSE_MOVE;
          event.bubbles = true;
          node.dispatchEvent(event);
        } else {
          if (!this._previousIn) return;
          event.type = EventType.MOUSE_LEAVE;
          node.dispatchEvent(event);
          this._previousIn = false;
          _currentHovered = null;
        }
        true;
        Event.EventMouse.pool.put(event);
      };
      var _mouseUpHandler = function(event) {
        var pos = event.getLocation();
        var node = this.owner;
        if (node._hitTest(pos, this)) {
          true;
          event.stopPropagation();
          event = Event.EventMouse.pool.get(event);
          event.type = EventType.MOUSE_UP;
          event.bubbles = true;
          node.dispatchEvent(event);
          true;
          Event.EventMouse.pool.put(event);
        }
      };
      var _mouseWheelHandler = function(event) {
        var pos = event.getLocation();
        var node = this.owner;
        if (node._hitTest(pos, this)) {
          true;
          event.stopPropagation();
          event = Event.EventMouse.pool.get(event);
          event.type = EventType.MOUSE_WHEEL;
          event.bubbles = true;
          node.dispatchEvent(event);
          true;
          Event.EventMouse.pool.put(event);
        }
      };
      function _searchMaskInParent(node) {
        var Mask = cc.Mask;
        if (Mask) {
          var index = 0;
          for (var curr = node; curr && cc.Node.isNode(curr); curr = curr._parent, ++index) if (curr.getComponent(Mask)) return {
            index: index,
            node: curr
          };
        }
        return null;
      }
      function updateOrder(node) {
        node._parent._delaySort();
        false;
      }
      var Node = cc.Class({
        name: "cc.Node",
        extends: require("./utils/base-node"),
        properties: {
          _opacity: 255,
          _color: cc.Color.WHITE,
          _cascadeOpacityEnabled: true,
          _anchorPoint: cc.p(.5, .5),
          _contentSize: cc.size(0, 0),
          _rotationX: 0,
          _rotationY: 0,
          _scaleX: 1,
          _scaleY: 1,
          _position: cc.p(0, 0),
          _skewX: 0,
          _skewY: 0,
          _localZOrder: 0,
          _globalZOrder: 0,
          _opacityModifyRGB: false,
          groupIndex: {
            default: 0,
            type: cc.Integer
          },
          group: {
            get: function() {
              return cc.game.groupList[this.groupIndex] || "";
            },
            set: function(value) {
              this.groupIndex = cc.game.groupList.indexOf(value);
              this.emit("group-changed");
            }
          },
          x: {
            get: function() {
              return this._position.x;
            },
            set: function(value) {
              var localPosition = this._position;
              if (value !== localPosition.x) {
                true;
                var oldValue;
                false;
                localPosition.x = value;
                this._sgNode.setPositionX(value);
                var cache = this._hasListenerCache;
                if (cache && cache[POSITION_CHANGED]) {
                  false;
                  this.emit(POSITION_CHANGED);
                }
              }
            }
          },
          y: {
            get: function() {
              return this._position.y;
            },
            set: function(value) {
              var localPosition = this._position;
              if (value !== localPosition.y) {
                true;
                var oldValue;
                false;
                localPosition.y = value;
                this._sgNode.setPositionY(value);
                var cache = this._hasListenerCache;
                if (cache && cache[POSITION_CHANGED]) {
                  false;
                  this.emit(POSITION_CHANGED);
                }
              }
            }
          },
          rotation: {
            get: function() {
              this._rotationX !== this._rotationY && cc.logID(1602);
              return this._rotationX;
            },
            set: function(value) {
              if (this._rotationX !== value || this._rotationY !== value) {
                this._rotationX = this._rotationY = value;
                this._sgNode.rotation = value;
                var cache = this._hasListenerCache;
                cache && cache[ROTATION_CHANGED] && this.emit(ROTATION_CHANGED);
              }
            }
          },
          rotationX: {
            get: function() {
              return this._rotationX;
            },
            set: function(value) {
              if (this._rotationX !== value) {
                this._rotationX = value;
                this._sgNode.rotationX = value;
                var cache = this._hasListenerCache;
                cache && cache[ROTATION_CHANGED] && this.emit(ROTATION_CHANGED);
              }
            }
          },
          rotationY: {
            get: function() {
              return this._rotationY;
            },
            set: function(value) {
              if (this._rotationY !== value) {
                this._rotationY = value;
                this._sgNode.rotationY = value;
                var cache = this._hasListenerCache;
                cache && cache[ROTATION_CHANGED] && this.emit(ROTATION_CHANGED);
              }
            }
          },
          scaleX: {
            get: function() {
              return this._scaleX;
            },
            set: function(value) {
              if (this._scaleX !== value) {
                this._scaleX = value;
                this._sgNode.scaleX = value;
                var cache = this._hasListenerCache;
                cache && cache[SCALE_CHANGED] && this.emit(SCALE_CHANGED);
              }
            }
          },
          scaleY: {
            get: function() {
              return this._scaleY;
            },
            set: function(value) {
              if (this._scaleY !== value) {
                this._scaleY = value;
                this._sgNode.scaleY = value;
                var cache = this._hasListenerCache;
                cache && cache[SCALE_CHANGED] && this.emit(SCALE_CHANGED);
              }
            }
          },
          skewX: {
            get: function() {
              return this._skewX;
            },
            set: function(value) {
              this._skewX = value;
              this._sgNode.skewX = value;
            }
          },
          skewY: {
            get: function() {
              return this._skewY;
            },
            set: function(value) {
              this._skewY = value;
              this._sgNode.skewY = value;
            }
          },
          opacity: {
            get: function() {
              return this._opacity;
            },
            set: function(value) {
              if (this._opacity !== value) {
                this._opacity = value;
                this._sgNode.setOpacity(value);
                if (!this._cascadeOpacityEnabled) {
                  var sizeProvider = this._sizeProvider;
                  sizeProvider instanceof _ccsg.Node && sizeProvider !== this._sgNode && sizeProvider.setOpacity(value);
                }
              }
            },
            range: [ 0, 255 ]
          },
          cascadeOpacity: {
            get: function() {
              return this._cascadeOpacityEnabled;
            },
            set: function(value) {
              if (this._cascadeOpacityEnabled !== value) {
                this._cascadeOpacityEnabled = value;
                this._sgNode.cascadeOpacity = value;
                var opacity = value ? 255 : this._opacity;
                var sizeProvider = this._sizeProvider;
                sizeProvider instanceof _ccsg.Node && sizeProvider.setOpacity(opacity);
              }
            }
          },
          color: {
            get: function() {
              return this._color.clone();
            },
            set: function(value) {
              if (!this._color.equals(value)) {
                this._color.fromColor(value);
                false;
                this._sizeProvider instanceof _ccsg.Node && this._sizeProvider.setColor(value);
              }
            }
          },
          anchorX: {
            get: function() {
              return this._anchorPoint.x;
            },
            set: function(value) {
              var anchorPoint = this._anchorPoint;
              if (anchorPoint.x !== value) {
                anchorPoint.x = value;
                var sizeProvider = this._sizeProvider;
                sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(anchorPoint);
                this.emit(ANCHOR_CHANGED);
              }
            }
          },
          anchorY: {
            get: function() {
              return this._anchorPoint.y;
            },
            set: function(value) {
              var anchorPoint = this._anchorPoint;
              if (anchorPoint.y !== value) {
                anchorPoint.y = value;
                var sizeProvider = this._sizeProvider;
                sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(anchorPoint);
                this.emit(ANCHOR_CHANGED);
              }
            }
          },
          width: {
            get: function() {
              if (this._sizeProvider) {
                var w = this._sizeProvider._getWidth();
                this._contentSize.width = w;
                return w;
              }
              return this._contentSize.width;
            },
            set: function(value) {
              if (value !== this._contentSize.width) {
                var sizeProvider = this._sizeProvider;
                sizeProvider && sizeProvider.setContentSize(value, sizeProvider._getHeight());
                var clone;
                false;
                this._contentSize.width = value;
                false;
                this.emit(SIZE_CHANGED);
              }
            }
          },
          height: {
            get: function() {
              if (this._sizeProvider) {
                var h = this._sizeProvider._getHeight();
                this._contentSize.height = h;
                return h;
              }
              return this._contentSize.height;
            },
            set: function(value) {
              if (value !== this._contentSize.height) {
                var sizeProvider = this._sizeProvider;
                sizeProvider && sizeProvider.setContentSize(sizeProvider._getWidth(), value);
                var clone;
                false;
                this._contentSize.height = value;
                false;
                this.emit(SIZE_CHANGED);
              }
            }
          },
          zIndex: {
            get: function() {
              return this._localZOrder;
            },
            set: function(value) {
              if (this._localZOrder !== value) {
                this._localZOrder = value;
                this._sgNode.zIndex = value;
                this._parent && updateOrder(this);
              }
            }
          }
        },
        ctor: function(name) {
          var sgNode = this._sgNode = new _ccsg.Node();
          true;
          sgNode.retain();
          sgNode._entity = this;
          sgNode.onEnter = function() {
            _ccsg.Node.prototype.onEnter.call(this);
            if (this._entity && !this._entity._active) {
              ActionManagerExist && cc.director.getActionManager().pauseTarget(this);
              eventManager.pauseTarget(this);
            }
          };
          cc.game._isCloning || (sgNode.cascadeOpacity = true);
          this._sizeProvider = null;
          this._reorderChildDirty = false;
          this._widget = null;
          this._touchListener = null;
          this._mouseListener = null;
          true;
          this._retainedActions = [];
        },
        statics: {
          isNode: function(obj) {
            return obj instanceof Node && (obj.constructor === Node || !(obj instanceof cc.Scene));
          }
        },
        _onSetParent: function(value) {
          var sgNode = this._sgNode;
          sgNode.parent && sgNode.parent.removeChild(sgNode, false);
          if (value) {
            value._sgNode.addChild(sgNode);
            value._delaySort();
          }
        },
        _onSiblingIndexChanged: function(index) {
          var parent = this._parent;
          var siblings = parent._children;
          var i = 0, len = siblings.length, sibling;
          true;
          if (cc.runtime) for (;i < len; i++) {
            sibling = siblings[i]._sgNode;
            var zOrder = sibling.getLocalZOrder();
            sibling.setLocalZOrder(zOrder + 1);
            sibling.setLocalZOrder(zOrder);
          } else {
            parent._sgNode.removeChild(this._sgNode, false);
            if (index + 1 < siblings.length) {
              var nextSibling = siblings[index + 1];
              var oldZOrder = this._sgNode.getLocalZOrder();
              parent._sgNode.insertChildBefore(this._sgNode, nextSibling._sgNode);
              oldZOrder !== this._sgNode.getLocalZOrder() && this._sgNode.setLocalZOrder(oldZOrder);
            } else parent._sgNode.addChild(this._sgNode);
          }
        },
        _onPreDestroy: function() {
          var destroyByParent = this._onPreDestroyBase();
          ActionManagerExist && cc.director.getActionManager().removeAllActionsFromTarget(this);
          _currentHovered === this && (_currentHovered = null);
          true;
          cc.macro.ENABLE_GC_FOR_NATIVE_OBJECTS || this._releaseAllActions();
          if (this._touchListener) {
            this._touchListener.release();
            this._touchListener.owner = null;
            this._touchListener.mask = null;
            this._touchListener = null;
          }
          if (this._mouseListener) {
            this._mouseListener.release();
            this._mouseListener.owner = null;
            this._mouseListener.mask = null;
            this._mouseListener = null;
          }
          this._reorderChildDirty && cc.director.__fastOff(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
          eventManager.removeListeners(this);
          if (destroyByParent) {
            true;
            this._sgNode._entity = null;
            this._sgNode = null;
          } else {
            this._removeSgNode();
            false;
          }
        },
        _onPostActivated: function(active) {
          var actionManager = ActionManagerExist ? cc.director.getActionManager() : null;
          if (active) {
            actionManager && actionManager.resumeTarget(this);
            eventManager.resumeTarget(this);
            if (this._touchListener) {
              var mask = this._touchListener.mask = _searchMaskInParent(this);
              this._mouseListener && (this._mouseListener.mask = mask);
            } else this._mouseListener && (this._mouseListener.mask = _searchMaskInParent(this));
          } else {
            actionManager && actionManager.pauseTarget(this);
            eventManager.pauseTarget(this);
          }
        },
        _onHierarchyChanged: function(oldParent) {
          this._onHierarchyChangedBase(oldParent);
          cc._widgetManager._nodesOrderDirty = true;
        },
        _onBatchCreated: function() {
          var prefabInfo = this._prefab;
          prefabInfo && prefabInfo.sync && !prefabInfo._synced && prefabInfo.root === this && PrefabHelper.syncWithPrefab(this);
          this._updateDummySgNode();
          this._parent && this._parent._sgNode.addChild(this._sgNode);
          if (!this._activeInHierarchy) {
            ActionManagerExist && cc.director.getActionManager().pauseTarget(this);
            eventManager.pauseTarget(this);
          }
          var children = this._children;
          for (var i = 0, len = children.length; i < len; i++) children[i]._onBatchCreated();
        },
        on: function(type, callback, target, useCapture) {
          var newAdded = false;
          if (-1 !== _touchEvents.indexOf(type)) {
            if (!this._touchListener) {
              this._touchListener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                owner: this,
                mask: _searchMaskInParent(this),
                onTouchBegan: _touchStartHandler,
                onTouchMoved: _touchMoveHandler,
                onTouchEnded: _touchEndHandler,
                onTouchCancelled: _touchCancelHandler
              });
              true;
              this._touchListener.retain();
              eventManager.addListener(this._touchListener, this);
              newAdded = true;
            }
          } else if (-1 !== _mouseEvents.indexOf(type) && !this._mouseListener) {
            this._mouseListener = cc.EventListener.create({
              event: cc.EventListener.MOUSE,
              _previousIn: false,
              owner: this,
              mask: _searchMaskInParent(this),
              onMouseDown: _mouseDownHandler,
              onMouseMove: _mouseMoveHandler,
              onMouseUp: _mouseUpHandler,
              onMouseScroll: _mouseWheelHandler
            });
            true;
            this._mouseListener.retain();
            eventManager.addListener(this._mouseListener, this);
            newAdded = true;
          }
          newAdded && !this._activeInHierarchy && cc.director.getScheduler().schedule((function() {
            this._activeInHierarchy || eventManager.pauseTarget(this);
          }), this, 0, 0, 0, false);
          return this._EventTargetOn(type, callback, target, useCapture);
        },
        off: function(type, callback, target, useCapture) {
          this._EventTargetOff(type, callback, target, useCapture);
          -1 !== _touchEvents.indexOf(type) ? this._checkTouchListeners() : -1 !== _mouseEvents.indexOf(type) && this._checkMouseListeners();
        },
        targetOff: function(target) {
          this._EventTargetTargetOff(target);
          this._checkTouchListeners();
          this._checkMouseListeners();
        },
        pauseSystemEvents: function(recursive) {
          eventManager.pauseTarget(this, recursive);
        },
        resumeSystemEvents: function(recursive) {
          eventManager.resumeTarget(this, recursive);
        },
        _checkTouchListeners: function() {
          if (!(this._objFlags & Destroying) && this._touchListener) {
            var i = 0;
            if (this._bubblingListeners) for (;i < _touchEvents.length; ++i) if (this._bubblingListeners.has(_touchEvents[i])) return;
            if (this._capturingListeners) for (;i < _touchEvents.length; ++i) if (this._capturingListeners.has(_touchEvents[i])) return;
            eventManager.removeListener(this._touchListener);
            this._touchListener = null;
          }
        },
        _checkMouseListeners: function() {
          if (!(this._objFlags & Destroying) && this._mouseListener) {
            var i = 0;
            if (this._bubblingListeners) for (;i < _mouseEvents.length; ++i) if (this._bubblingListeners.has(_mouseEvents[i])) return;
            if (this._capturingListeners) for (;i < _mouseEvents.length; ++i) if (this._capturingListeners.has(_mouseEvents[i])) return;
            _currentHovered === this && (_currentHovered = null);
            eventManager.removeListener(this._mouseListener);
            this._mouseListener = null;
          }
        },
        _hitTest: function(point, listener) {
          var w = this.width, h = this.height, pt = point;
          var Camera = cc.Camera;
          Camera && Camera.main && Camera.main.containsNode(this) && (pt = Camera.main.getCameraToWorldPoint(pt));
          var trans = cc.affineTransformInvertIn(this._sgNode.getNodeToWorldTransform());
          pt = cc.pointApplyAffineTransform(pt, trans);
          pt.x += this._anchorPoint.x * w;
          pt.y += this._anchorPoint.y * h;
          var left = pt.x, right = w - pt.x, bottom = pt.y, top = h - pt.y;
          if (left >= 0 && right >= 0 && top >= 0 && bottom >= 0) {
            if (listener && listener.mask) {
              var mask = listener.mask;
              var parent = this;
              for (var i = 0; parent && i < mask.index; ++i, parent = parent.parent) ;
              if (parent === mask.node) {
                var comp = parent.getComponent(cc.Mask);
                return !comp || !comp.enabledInHierarchy || comp._hitTest(point);
              }
              listener.mask = null;
              return true;
            }
            return true;
          }
          return false;
        },
        _getCapturingTargets: function(type, array) {
          var parent = this.parent;
          while (parent) {
            parent.hasEventListener(type, true) && array.push(parent);
            parent = parent.parent;
          }
        },
        _getBubblingTargets: function(type, array) {
          var parent = this.parent;
          while (parent) {
            parent.hasEventListener(type) && array.push(parent);
            parent = parent.parent;
          }
        },
        isRunning: function() {
          return this._activeInHierarchy;
        },
        runAction: ActionManagerExist ? function(action) {
          if (!this.active) return;
          cc.assertID(action, 1618);
          cc.macro.ENABLE_GC_FOR_NATIVE_OBJECTS || this._retainAction(action);
          true;
          this._sgNode._owner = this;
          cc.director.getActionManager().addAction(action, this, false);
          return action;
        } : emptyFunc,
        pauseAllActions: ActionManagerExist ? function() {
          cc.director.getActionManager().pauseTarget(this);
        } : emptyFunc,
        resumeAllActions: ActionManagerExist ? function() {
          cc.director.getActionManager().resumeTarget(this);
        } : emptyFunc,
        stopAllActions: ActionManagerExist ? function() {
          cc.director.getActionManager().removeAllActionsFromTarget(this);
        } : emptyFunc,
        stopAction: ActionManagerExist ? function(action) {
          cc.director.getActionManager().removeAction(action);
        } : emptyFunc,
        stopActionByTag: ActionManagerExist ? function(tag) {
          if (tag === cc.Action.TAG_INVALID) {
            cc.logID(1612);
            return;
          }
          cc.director.getActionManager().removeActionByTag(tag, this);
        } : emptyFunc,
        getActionByTag: ActionManagerExist ? function(tag) {
          if (tag === cc.Action.TAG_INVALID) {
            cc.logID(1613);
            return null;
          }
          return cc.director.getActionManager().getActionByTag(tag, this);
        } : function() {
          return null;
        },
        getNumberOfRunningActions: ActionManagerExist ? function() {
          return cc.director.getActionManager().getNumberOfRunningActionsInTarget(this);
        } : function() {
          return 0;
        },
        _retainAction: function(action) {
          if ((true, action instanceof cc.Action) && -1 === this._retainedActions.indexOf(action)) {
            this._retainedActions.push(action);
            action.retain();
          }
        },
        _releaseAllActions: function() {
          true;
          for (var i = 0; i < this._retainedActions.length; ++i) this._retainedActions[i].release();
          this._retainedActions.length = 0;
        },
        setTag: function(value) {
          this._tag = value;
          this._sgNode.tag = value;
        },
        getPosition: function() {
          return new cc.Vec2(this._position);
        },
        setPosition: function(newPosOrX, y) {
          var x;
          if ("undefined" === (__typeofVal = typeof y, "object" === __typeofVal ? __realTypeOfObj(y) : __typeofVal)) {
            x = newPosOrX.x;
            y = newPosOrX.y;
          } else x = newPosOrX;
          var locPosition = this._position;
          if (locPosition.x === x && locPosition.y === y) return;
          var oldPosition;
          false;
          true;
          locPosition.x = x;
          true;
          locPosition.y = y;
          this._sgNode.setPosition(x, y);
          var cache = this._hasListenerCache;
          if (cache && cache[POSITION_CHANGED]) {
            false;
            this.emit(POSITION_CHANGED);
          }
        },
        getScale: function() {
          this._scaleX !== this._scaleY && cc.logID(1603);
          return this._scaleX;
        },
        setScale: function(scaleX, scaleY) {
          if ("object" === (__typeofVal = typeof scaleX, "object" === __typeofVal ? __realTypeOfObj(scaleX) : __typeofVal)) {
            scaleY = scaleX.y;
            scaleX = scaleX.x;
          } else scaleY = scaleY || 0 === scaleY ? scaleY : scaleX;
          if (this._scaleX !== scaleX || this._scaleY !== scaleY) {
            this._scaleX = scaleX;
            this._scaleY = scaleY;
            this._sgNode.setScale(scaleX, scaleY);
            var cache = this._hasListenerCache;
            cache && cache[SCALE_CHANGED] && this.emit(SCALE_CHANGED);
          }
        },
        getContentSize: function(ignoreSizeProvider) {
          if (this._sizeProvider && !ignoreSizeProvider) {
            var size = this._sizeProvider.getContentSize();
            this._contentSize = size;
            return cc.size(size);
          }
          return cc.size(this._contentSize);
        },
        setContentSize: function(size, height) {
          var locContentSize = this._contentSize;
          var clone;
          if (void 0 === height) {
            if (size.width === locContentSize.width && size.height === locContentSize.height) return;
            false;
            locContentSize.width = size.width;
            locContentSize.height = size.height;
          } else {
            if (size === locContentSize.width && height === locContentSize.height) return;
            false;
            locContentSize.width = size;
            locContentSize.height = height;
          }
          this._sizeProvider && this._sizeProvider.setContentSize(locContentSize);
          false;
          this.emit(SIZE_CHANGED);
        },
        setOpacityModifyRGB: function(opacityValue) {
          if (this._opacityModifyRGB !== opacityValue) {
            this._opacityModifyRGB = opacityValue;
            this._sgNode.setOpacityModifyRGB(opacityValue);
            var sizeProvider = this._sizeProvider;
            sizeProvider instanceof _ccsg.Node && sizeProvider !== this._sgNode && sizeProvider.setOpacityModifyRGB(opacityValue);
          }
        },
        isOpacityModifyRGB: function() {
          return this._opacityModifyRGB;
        },
        setGlobalZOrder: function(globalZOrder) {
          this._globalZOrder = globalZOrder;
          this._sgNode.setGlobalZOrder(globalZOrder);
        },
        getGlobalZOrder: function() {
          this._globalZOrder = this._sgNode.getGlobalZOrder();
          return this._globalZOrder;
        },
        getAnchorPoint: function() {
          return cc.p(this._anchorPoint);
        },
        setAnchorPoint: function(point, y) {
          var locAnchorPoint = this._anchorPoint;
          if (void 0 === y) {
            if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) return;
            locAnchorPoint.x = point.x;
            locAnchorPoint.y = point.y;
          } else {
            if (point === locAnchorPoint.x && y === locAnchorPoint.y) return;
            locAnchorPoint.x = point;
            locAnchorPoint.y = y;
          }
          var sizeProvider = this._sizeProvider;
          sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(locAnchorPoint);
          this.emit(ANCHOR_CHANGED);
        },
        getAnchorPointInPoints: function() {
          return this._sgNode.getAnchorPointInPoints();
        },
        getDisplayedOpacity: function() {
          return this._sgNode.getDisplayedOpacity();
        },
        _updateDisplayedOpacity: function(parentOpacity) {
          this._sgNode.updateDisplayedOpacity(parentOpacity);
        },
        getDisplayedColor: function() {
          return this._sgNode.getDisplayedColor();
        },
        getNodeToParentTransformAR: function() {
          var contentSize = this.getContentSize();
          var mat = this._sgNode.getNodeToParentTransform();
          if (!this._isSgTransformArToMe(contentSize)) {
            var tx = this._anchorPoint.x * contentSize.width;
            var ty = this._anchorPoint.y * contentSize.height;
            var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
            mat = cc.affineTransformConcatIn(offset, mat);
          }
          return mat;
        },
        getBoundingBox: function() {
          var size = this.getContentSize();
          var rect = cc.rect(0, 0, size.width, size.height);
          return cc._rectApplyAffineTransformIn(rect, this.getNodeToParentTransform());
        },
        getBoundingBoxToWorld: function() {
          var trans;
          this.parent && (trans = this.parent.getNodeToWorldTransformAR());
          return this._getBoundingBoxTo(trans);
        },
        _getBoundingBoxTo: function(parentTransformAR) {
          var size = this.getContentSize();
          var width = size.width;
          var height = size.height;
          var rect = cc.rect(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
          var transAR = cc.affineTransformConcat(this.getNodeToParentTransformAR(), parentTransformAR);
          cc._rectApplyAffineTransformIn(rect, transAR);
          if (!this._children) return rect;
          var locChildren = this._children;
          for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child.active) {
              var childRect = child._getBoundingBoxTo(transAR);
              childRect && (rect = cc.rectUnion(rect, childRect));
            }
          }
          return rect;
        },
        getNodeToParentTransform: function() {
          var contentSize = this.getContentSize();
          var mat = this._sgNode.getNodeToParentTransform();
          if (this._isSgTransformArToMe(contentSize)) {
            var tx = -this._anchorPoint.x * contentSize.width;
            var ty = -this._anchorPoint.y * contentSize.height;
            var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
            mat = cc.affineTransformConcatIn(offset, mat);
          }
          return mat;
        },
        getNodeToWorldTransform: function() {
          var contentSize = this.getContentSize();
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          var mat = this._sgNode.getNodeToWorldTransform();
          if (this._isSgTransformArToMe(contentSize)) {
            var tx = -this._anchorPoint.x * contentSize.width;
            var ty = -this._anchorPoint.y * contentSize.height;
            var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
            mat = cc.affineTransformConcatIn(offset, mat);
          }
          return mat;
        },
        getNodeToWorldTransformAR: function() {
          var contentSize = this.getContentSize();
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          var mat = this._sgNode.getNodeToWorldTransform();
          if (!this._isSgTransformArToMe(contentSize)) {
            var tx = this._anchorPoint.x * contentSize.width;
            var ty = this._anchorPoint.y * contentSize.height;
            var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
            mat = cc.affineTransformConcatIn(offset, mat);
          }
          return mat;
        },
        getParentToNodeTransform: function() {
          return this._sgNode.getParentToNodeTransform();
        },
        getWorldToNodeTransform: function() {
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          return this._sgNode.getWorldToNodeTransform();
        },
        _isSgTransformArToMe: function(myContentSize) {
          var renderSize = this._sgNode.getContentSize();
          if (0 === renderSize.width && 0 === renderSize.height && (0 !== myContentSize.width || 0 !== myContentSize.height)) return true;
          if (this._sgNode.isIgnoreAnchorPointForPosition()) return true;
          return false;
        },
        convertToNodeSpace: function(worldPoint) {
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          var nodePositionIgnoreAnchorPoint = this._sgNode.convertToNodeSpace(worldPoint);
          return cc.pAdd(nodePositionIgnoreAnchorPoint, cc.p(this._anchorPoint.x * this._contentSize.width, this._anchorPoint.y * this._contentSize.height));
        },
        convertToWorldSpace: function(nodePoint) {
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          var x = nodePoint.x - this._anchorPoint.x * this._contentSize.width;
          var y = nodePoint.y - this._anchorPoint.y * this._contentSize.height;
          return cc.v2(this._sgNode.convertToWorldSpace(cc.v2(x, y)));
        },
        convertToNodeSpaceAR: function(worldPoint) {
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          return this._sgNode.isIgnoreAnchorPointForPosition() ? cc.v2(this._sgNode.convertToNodeSpace(worldPoint)) : this._sgNode.convertToNodeSpaceAR(worldPoint);
        },
        convertToWorldSpaceAR: function(nodePoint) {
          cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
          return this._sgNode.isIgnoreAnchorPointForPosition() ? cc.v2(this._sgNode.convertToWorldSpace(nodePoint)) : cc.v2(this._sgNode.convertToWorldSpaceAR(nodePoint));
        },
        convertTouchToNodeSpace: function(touch) {
          return this.convertToNodeSpace(touch.getLocation());
        },
        convertTouchToNodeSpaceAR: function(touch) {
          return this.convertToNodeSpaceAR(touch.getLocation());
        },
        setNodeDirty: function() {
          this._sgNode.setNodeDirty();
        },
        addChild: function(child, localZOrder, tag) {
          localZOrder = void 0 === localZOrder ? child._localZOrder : localZOrder;
          var name, setTag = false;
          if ("undefined" === (__typeofVal = typeof tag, "object" === __typeofVal ? __realTypeOfObj(tag) : __typeofVal)) {
            tag = void 0;
            name = child._name;
          } else if (cc.js.isString(tag)) {
            name = tag;
            tag = void 0;
          } else if (cc.js.isNumber(tag)) {
            setTag = true;
            name = "";
          }
          false;
          cc.assertID(child, 1606);
          cc.assertID(null === child._parent, 1605);
          child.parent = this;
          child.zIndex = localZOrder;
          setTag ? child.setTag(tag) : child.setName(name);
        },
        cleanup: function() {
          ActionManagerExist && cc.director.getActionManager().removeAllActionsFromTarget(this);
          eventManager.removeListeners(this);
          var i, len = this._children.length, node;
          for (i = 0; i < len; ++i) {
            node = this._children[i];
            node && node.cleanup();
          }
        },
        sortAllChildren: function() {
          if (this._reorderChildDirty) {
            this._reorderChildDirty = false;
            var _children = this._children;
            if (_children.length > 1) {
              var len = _children.length, i, j, child;
              for (i = 1; i < len; i++) {
                child = _children[i];
                j = i - 1;
                while (j >= 0) {
                  if (child._localZOrder < _children[j]._localZOrder) _children[j + 1] = _children[j]; else {
                    if (!(child._localZOrder === _children[j]._localZOrder && child._sgNode._arrivalOrder < _children[j]._sgNode._arrivalOrder)) break;
                    _children[j + 1] = _children[j];
                  }
                  j--;
                }
                _children[j + 1] = child;
              }
              this.emit(CHILD_REORDER);
            }
            cc.director.__fastOff(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
          }
        },
        _delaySort: function() {
          if (!this._reorderChildDirty) {
            this._reorderChildDirty = true;
            cc.director.__fastOn(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
          }
        },
        _updateDummySgNode: function() {
          var self = this;
          var sgNode = self._sgNode;
          sgNode.setPosition(self._position);
          sgNode.setRotationX(self._rotationX);
          sgNode.setRotationY(self._rotationY);
          sgNode.setScale(self._scaleX, self._scaleY);
          sgNode.setSkewX(self._skewX);
          sgNode.setSkewY(self._skewY);
          var arrivalOrder = sgNode._arrivalOrder;
          sgNode.setLocalZOrder(self._localZOrder);
          sgNode._arrivalOrder = arrivalOrder;
          sgNode.setGlobalZOrder(self._globalZOrder);
          true;
          sgNode.setColor(this._color);
          sgNode.setOpacity(self._opacity);
          sgNode.setOpacityModifyRGB(self._opacityModifyRGB);
          sgNode.setCascadeOpacityEnabled(self._cascadeOpacityEnabled);
          sgNode.setTag(self._tag);
        },
        _updateSgNode: function() {
          this._updateDummySgNode();
          var sgNode = this._sgNode;
          sgNode.setAnchorPoint(this._anchorPoint);
          sgNode.setVisible(this._active);
          sgNode.setColor(this._color);
          var actionManager = ActionManagerExist ? cc.director.getActionManager() : null;
          if (this._activeInHierarchy) {
            actionManager && actionManager.resumeTarget(this);
            eventManager.resumeTarget(this);
          } else {
            actionManager && actionManager.pauseTarget(this);
            eventManager.pauseTarget(this);
          }
        },
        _removeSgNode: SgHelper.removeSgNode,
        onRestore: false
      });
      true;
      var updateListeners = function() {
        this._activeInHierarchy || eventManager.pauseTarget(this);
      };
      cc.js.getset(Node.prototype, "_sgNode", (function() {
        return this.__sgNode;
      }), (function(value) {
        this.__sgNode = value;
        if (this._touchListener || this._mouseListener) {
          if (this._touchListener) {
            this._touchListener.retain();
            eventManager.removeListener(this._touchListener);
            eventManager.addListener(this._touchListener, this);
            this._touchListener.release();
          }
          if (this._mouseListener) {
            this._mouseListener.retain();
            eventManager.removeListener(this._mouseListener);
            eventManager.addListener(this._mouseListener, this);
            this._mouseListener.release();
          }
          cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, updateListeners, this);
        }
      }), true);
      var SameNameGetSets = [ "parent", "tag", "skewX", "skewY", "position", "rotation", "rotationX", "rotationY", "scale", "scaleX", "scaleY", "opacity", "color" ];
      var DiffNameGetSets = {
        x: [ "getPositionX", "setPositionX" ],
        y: [ "getPositionY", "setPositionY" ],
        zIndex: [ "getLocalZOrder", "setLocalZOrder" ],
        opacityModifyRGB: [ "isOpacityModifyRGB", "setOpacityModifyRGB" ],
        cascadeOpacity: [ "isCascadeOpacityEnabled", "setCascadeOpacityEnabled" ]
      };
      Misc.propertyDefine(Node, SameNameGetSets, DiffNameGetSets);
      Node.EventType = EventType;
      cc.Node = module.exports = Node;
    }), {
      "./event-manager": 62,
      "./event/event": 65,
      "./utils/base-node": 113,
      "./utils/misc": 117,
      "./utils/prefab-helper": 119,
      "./utils/scene-graph-helper": 120
    } ],
    17: [ (function(require, module, exports) {
      var NIL = function() {};
      cc.Scene = cc.Class({
        name: "cc.Scene",
        extends: require("./CCNode"),
        properties: {
          autoReleaseAssets: {
            default: void 0,
            type: cc.Boolean
          }
        },
        ctor: function() {
          var sgNode = this._sgNode = new _ccsg.Scene();
          true;
          sgNode.retain();
          sgNode.setAnchorPoint(0, 0);
          this._anchorPoint.x = 0;
          this._anchorPoint.y = 0;
          this._activeInHierarchy = false;
          this._inited = !cc.game._isCloning;
          this.dependAssets = null;
        },
        destroy: function() {
          this._super();
          this._activeInHierarchy = false;
        },
        _onHierarchyChanged: NIL,
        _instantiate: null,
        _load: function() {
          if (!this._inited) {
            false;
            this._onBatchCreated();
            this._inited = true;
          }
        },
        _activate: function(active) {
          active = false !== active;
          false, false;
          cc.director._nodeActivator.activateNode(this, active);
        }
      });
      module.exports = cc.Scene;
    }), {
      "./CCNode": 16
    } ],
    18: [ (function(require, module, exports) {
      var RawAsset = require("./CCRawAsset");
      cc.Asset = cc.Class({
        name: "cc.Asset",
        extends: RawAsset,
        properties: {
          rawUrl: {
            get: function() {
              if (this._rawFiles) {
                if (cc.AssetLibrary) return cc.AssetLibrary.getLibUrlNoExt(this._uuid) + "/" + this._rawFiles[0];
                cc.errorID(6400);
              }
              return "";
            },
            visible: false
          },
          rawUrls: {
            get: function() {
              if (this._rawFiles) {
                if (cc.AssetLibrary) {
                  var dir = cc.AssetLibrary.getLibUrlNoExt(this._uuid) + "/";
                  return this._rawFiles.map((function(filename) {
                    return dir + filename;
                  }));
                }
                cc.errorID(6401);
              }
              return [];
            },
            visible: false
          },
          _rawFiles: null
        },
        statics: {
          deserialize: function(data) {
            return cc.deserialize(data);
          },
          preventDeferredLoadDependents: false
        },
        serialize: function() {
          return Editor.serialize(this);
        },
        createNode: null,
        _setRawFiles: function(rawFiles) {
          this._rawFiles = rawFiles.length > 0 ? rawFiles : null;
        },
        _preloadRawFiles: null
      });
      module.exports = cc.Asset;
    }), {
      "./CCRawAsset": 24
    } ],
    19: [ (function(require, module, exports) {
      var AudioClip = cc.Class({
        name: "cc.AudioClip",
        extends: cc.RawAsset
      });
      cc.AudioClip = AudioClip;
      module.exports = AudioClip;
    }), {} ],
    20: [ (function(require, module, exports) {
      var BitmapFont = cc.Class({
        name: "cc.BitmapFont",
        extends: cc.Font,
        properties: {
          fntDataStr: {
            default: ""
          },
          spriteFrame: {
            default: null,
            type: cc.SpriteFrame
          },
          fontSize: {
            default: -1
          },
          _fntConfig: null
        }
      });
      cc.BitmapFont = BitmapFont;
      module.exports = BitmapFont;
    }), {} ],
    21: [ (function(require, module, exports) {
      var Font = cc.Class({
        name: "cc.Font",
        extends: cc.Asset
      });
      cc.Font = Font;
      module.exports = Font;
    }), {} ],
    22: [ (function(require, module, exports) {
      var LabelAtlas = cc.Class({
        name: "cc.LabelAtlas",
        extends: cc.BitmapFont
      });
      cc.LabelAtlas = LabelAtlas;
      module.exports = LabelAtlas;
    }), {} ],
    23: [ (function(require, module, exports) {
      var Prefab = cc.Class({
        name: "cc.Prefab",
        extends: cc.Asset,
        properties: {
          data: null,
          asyncLoadAssets: void 0,
          _createFunction: {
            default: null,
            serializable: false
          }
        },
        createNode: false,
        compileCreateFunction: function() {
          var jit = require("../platform/instantiate-jit");
          this._createFunction = jit.compile(this.data);
        },
        _doInstantiate: function(rootToRedirect) {
          this.data._prefab ? this.data._prefab._synced = true : cc.warnID(3700);
          this._createFunction || this.compileCreateFunction();
          return this._createFunction(rootToRedirect);
        },
        _instantiate: function() {
          var node;
          true;
          node = this._doInstantiate();
          this.data._instantiate(node);
          false, false;
          return node;
        }
      });
      cc.Prefab = module.exports = Prefab;
      cc.js.obsolete(cc, "cc._Prefab", "Prefab");
    }), {
      "../platform/instantiate-jit": 105
    } ],
    24: [ (function(require, module, exports) {
      var CCObject = require("../platform/CCObject");
      cc.RawAsset = cc.Class({
        name: "cc.RawAsset",
        extends: CCObject,
        ctor: function() {
          Object.defineProperty(this, "_uuid", {
            value: "",
            writable: true
          });
        },
        statics: {
          createNodeByInfo: null
        }
      });
      Object.defineProperty(cc.RawAsset, "isRawAssetType", {
        value: function(ctor) {
          return cc.isChildClassOf(ctor, cc.RawAsset) && !cc.isChildClassOf(ctor, cc.Asset);
        }
      });
      module.exports = cc.RawAsset;
    }), {
      "../platform/CCObject": 96
    } ],
    25: [ (function(require, module, exports) {
      var Scene = cc.Class({
        name: "cc.SceneAsset",
        extends: cc.Asset,
        properties: {
          scene: null,
          asyncLoadAssets: void 0
        }
      });
      cc.SceneAsset = Scene;
      module.exports = Scene;
    }), {} ],
    26: [ (function(require, module, exports) {
      var Script = cc.Class({
        name: "cc.Script",
        extends: cc.Asset
      });
      cc._Script = Script;
      var JavaScript = cc.Class({
        name: "cc.JavaScript",
        extends: Script
      });
      cc._JavaScript = JavaScript;
      var CoffeeScript = cc.Class({
        name: "cc.CoffeeScript",
        extends: Script
      });
      cc._CoffeeScript = CoffeeScript;
      var TypeScript = cc.Class({
        name: "cc.TypeScript",
        extends: Script
      });
      cc._TypeScript = TypeScript;
    }), {} ],
    27: [ (function(require, module, exports) {
      var SpriteAtlas = cc.Class({
        name: "cc.SpriteAtlas",
        extends: cc.Asset,
        properties: {
          _spriteFrames: {
            default: {}
          }
        },
        getTexture: function() {
          var keys = Object.keys(this._spriteFrames);
          if (keys.length > 0) {
            var spriteFrame = this._spriteFrames[keys[0]];
            return spriteFrame ? spriteFrame.getTexture() : null;
          }
          return null;
        },
        getSpriteFrame: function(key) {
          return this._spriteFrames[key];
        },
        getSpriteFrames: function() {
          var frames = [];
          var spriteFrames = this._spriteFrames;
          for (var key in spriteFrames) frames.push(spriteFrames[key]);
          return frames;
        }
      });
      cc.SpriteAtlas = SpriteAtlas;
      module.exports = SpriteAtlas;
    }), {} ],
    28: [ (function(require, module, exports) {
      var TTFFont = cc.Class({
        name: "cc.TTFFont",
        extends: cc.Font
      });
      cc.TTFFont = TTFFont;
      module.exports = TTFFont;
    }), {} ],
    29: [ (function(require, module, exports) {
      require("./CCRawAsset");
      require("./CCAsset");
      require("./CCFont");
      require("./CCPrefab");
      require("./CCAudioClip");
      require("./CCScripts");
      require("./CCSceneAsset");
      require("../sprites/CCSpriteFrame");
      require("../textures/CCTexture2D");
      require("./CCTTFFont");
      require("./CCSpriteAtlas");
      require("./CCBitmapFont");
      require("./CCLabelAtlas");
    }), {
      "../sprites/CCSpriteFrame": 1,
      "../textures/CCTexture2D": 1,
      "./CCAsset": 18,
      "./CCAudioClip": 19,
      "./CCBitmapFont": 20,
      "./CCFont": 21,
      "./CCLabelAtlas": 22,
      "./CCPrefab": 23,
      "./CCRawAsset": 24,
      "./CCSceneAsset": 25,
      "./CCScripts": 26,
      "./CCSpriteAtlas": 27,
      "./CCTTFFont": 28
    } ],
    30: [ (function(require, module, exports) {
      var TOP = 1;
      var MID = 2;
      var BOT = 4;
      var LEFT = 8;
      var CENTER = 16;
      var RIGHT = 32;
      var HORIZONTAL = LEFT | CENTER | RIGHT;
      var VERTICAL = TOP | MID | BOT;
      function getReadonlyNodeSize(parent) {
        return parent instanceof cc.Scene ? cc.visibleRect : !parent._sizeProvider || parent._sizeProvider instanceof _ccsg.Node ? parent._contentSize : parent.getContentSize();
      }
      function computeInverseTransForTarget(widgetNode, target, out_inverseTranslate, out_inverseScale) {
        var scaleX = widgetNode._parent._scaleX;
        var scaleY = widgetNode._parent._scaleY;
        var translateX = 0;
        var translateY = 0;
        for (var node = widgetNode._parent; ;) {
          var pos = node._position;
          translateX += pos.x;
          translateY += pos.y;
          node = node._parent;
          if (!node) {
            out_inverseTranslate.x = out_inverseTranslate.y = 0;
            out_inverseScale.x = out_inverseScale.y = 1;
            return;
          }
          if (node === target) break;
          var sx = node._scaleX;
          var sy = node._scaleY;
          translateX *= sx;
          translateY *= sy;
          scaleX *= sx;
          scaleY *= sy;
        }
        out_inverseScale.x = 0 !== scaleX ? 1 / scaleX : 1;
        out_inverseScale.y = 0 !== scaleY ? 1 / scaleY : 1;
        out_inverseTranslate.x = -translateX;
        out_inverseTranslate.y = -translateY;
      }
      var tInverseTranslate = cc.Vec2.ZERO;
      var tInverseScale = cc.Vec2.ONE;
      function align(node, widget) {
        var hasTarget = widget._target;
        var target;
        var inverseTranslate, inverseScale;
        if (hasTarget) {
          target = hasTarget;
          inverseTranslate = tInverseTranslate;
          inverseScale = tInverseScale;
          computeInverseTransForTarget(node, target, inverseTranslate, inverseScale);
        } else target = node._parent;
        var targetSize = getReadonlyNodeSize(target);
        var targetAnchor = target._anchorPoint;
        var isRoot = (true, target instanceof cc.Scene);
        var x = node._position.x, y = node._position.y;
        var anchor = node._anchorPoint;
        if (widget._alignFlags & HORIZONTAL) {
          var localLeft, localRight, targetWidth = targetSize.width;
          if (isRoot) {
            localLeft = cc.visibleRect.left.x;
            localRight = cc.visibleRect.right.x;
          } else {
            localLeft = -targetAnchor.x * targetWidth;
            localRight = localLeft + targetWidth;
          }
          localLeft += widget._isAbsLeft ? widget._left : widget._left * targetWidth;
          localRight -= widget._isAbsRight ? widget._right : widget._right * targetWidth;
          if (hasTarget) {
            localLeft += inverseTranslate.x;
            localLeft *= inverseScale.x;
            localRight += inverseTranslate.x;
            localRight *= inverseScale.x;
          }
          var width, anchorX = anchor.x, scaleX = node._scaleX;
          if (scaleX < 0) {
            anchorX = 1 - anchorX;
            scaleX = -scaleX;
          }
          if (widget.isStretchWidth) {
            width = localRight - localLeft;
            0 !== scaleX && (node.width = width / scaleX);
            x = localLeft + anchorX * width;
          } else {
            width = node.width * scaleX;
            if (widget.isAlignHorizontalCenter) {
              var localHorizontalCenter = widget._isAbsHorizontalCenter ? widget._horizontalCenter : widget._horizontalCenter * targetWidth;
              var targetCenter = (.5 - targetAnchor.x) * targetSize.width;
              if (hasTarget) {
                localHorizontalCenter *= inverseScale.x;
                targetCenter += inverseTranslate.x;
                targetCenter *= inverseScale.x;
              }
              x = targetCenter + (anchorX - .5) * width + localHorizontalCenter;
            } else x = widget.isAlignLeft ? localLeft + anchorX * width : localRight + (anchorX - 1) * width;
          }
        }
        if (widget._alignFlags & VERTICAL) {
          var localTop, localBottom, targetHeight = targetSize.height;
          if (isRoot) {
            localBottom = cc.visibleRect.bottom.y;
            localTop = cc.visibleRect.top.y;
          } else {
            localBottom = -targetAnchor.y * targetHeight;
            localTop = localBottom + targetHeight;
          }
          localBottom += widget._isAbsBottom ? widget._bottom : widget._bottom * targetHeight;
          localTop -= widget._isAbsTop ? widget._top : widget._top * targetHeight;
          if (hasTarget) {
            localBottom += inverseTranslate.y;
            localBottom *= inverseScale.y;
            localTop += inverseTranslate.y;
            localTop *= inverseScale.y;
          }
          var height, anchorY = anchor.y, scaleY = node._scaleY;
          if (scaleY < 0) {
            anchorY = 1 - anchorY;
            scaleY = -scaleY;
          }
          if (widget.isStretchHeight) {
            height = localTop - localBottom;
            0 !== scaleY && (node.height = height / scaleY);
            y = localBottom + anchorY * height;
          } else {
            height = node.height * scaleY;
            if (widget.isAlignVerticalCenter) {
              var localVerticalCenter = widget._isAbsVerticalCenter ? widget._verticalCenter : widget._verticalCenter * targetHeight;
              var targetMiddle = (.5 - targetAnchor.y) * targetSize.height;
              if (hasTarget) {
                localVerticalCenter *= inverseScale.y;
                targetMiddle += inverseTranslate.y;
                targetMiddle *= inverseScale.y;
              }
              y = targetMiddle + (anchorY - .5) * height + localVerticalCenter;
            } else y = widget.isAlignBottom ? localBottom + anchorY * height : localTop + (anchorY - 1) * height;
          }
        }
        node.setPosition(x, y);
      }
      function visitNode(node) {
        var widget = node._widget;
        if (widget) {
          var target;
          var isParent;
          false;
          align(node, widget);
          true, widget.isAlignOnce ? widget.enabled = false : activeWidgets.push(widget);
        }
        var children = node._children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child._active && visitNode(child);
        }
      }
      var animationState;
      false;
      function refreshScene() {
        var nowPreviewing;
        false;
        var scene = cc.director.getScene();
        if (scene) {
          widgetManager.isAligning = true;
          if (widgetManager._nodesOrderDirty) {
            activeWidgets.length = 0;
            visitNode(scene);
            widgetManager._nodesOrderDirty = false;
          } else {
            var i, widget, iterator = widgetManager._activeWidgetsIterator;
            var editingNode;
            var node;
            false;
            for (iterator.i = 0; iterator.i < activeWidgets.length; ++iterator.i) {
              widget = activeWidgets[iterator.i];
              align(widget.node, widget);
            }
          }
          widgetManager.isAligning = false;
        }
        false;
      }
      var adjustWidgetToAllowMovingInEditor = false;
      var adjustWidgetToAllowResizingInEditor = false;
      var activeWidgets = [];
      function updateAlignment(node) {
        var parent = node._parent;
        cc.Node.isNode(parent) && updateAlignment(parent);
        var widget = node._widget || node.getComponent(cc.Widget);
        widget && align(node, widget);
      }
      var widgetManager = cc._widgetManager = module.exports = {
        _AlignFlags: {
          TOP: TOP,
          MID: MID,
          BOT: BOT,
          LEFT: LEFT,
          CENTER: CENTER,
          RIGHT: RIGHT
        },
        isAligning: false,
        _nodesOrderDirty: false,
        _activeWidgetsIterator: new cc.js.array.MutableForwardIterator(activeWidgets),
        init: function(director) {
          director.on(cc.Director.EVENT_BEFORE_VISIT, refreshScene);
        },
        add: function(widget) {
          widget.node._widget = widget;
          this._nodesOrderDirty = true;
          false;
        },
        remove: function(widget) {
          widget.node._widget = null;
          this._activeWidgetsIterator.remove(widget);
          false;
        },
        updateAlignment: updateAlignment
      };
      false;
    }), {} ],
    31: [ (function(require, module, exports) {
      var cullingDirtyFlag;
      false;
      var Camera = cc.Class({
        name: "cc.Camera",
        extends: cc._RendererUnderSG,
        ctor: function() {
          this.viewMatrix = cc.affineTransformMake();
          this.invertViewMatrix = cc.affineTransformMake();
          this._lastViewMatrix = cc.affineTransformMake();
          this._sgTarges = [];
          this._checkedTimes = 0;
          this.visibleRect = {
            left: cc.v2(),
            right: cc.v2(),
            top: cc.v2(),
            bottom: cc.v2()
          };
          this.viewPort = cc.rect();
        },
        editor: false,
        properties: {
          _targets: {
            default: [],
            type: cc.Node,
            visible: true
          },
          zoomRatio: 1
        },
        statics: {
          main: null
        },
        _createSgNode: function() {
          if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
            cc.errorID(8301);
            var sgNode = new _ccsg.Node();
            sgNode.setTransform = sgNode.addTarget = sgNode.removeTarget = function() {};
            return sgNode;
          }
          return new _ccsg.CameraNode();
        },
        _initSgNode: function() {
          this._sgNode.setContentSize(this.node.getContentSize(true));
        },
        _addSgTargetInSg: function(target) {
          var sgNode;
          target instanceof cc.Node ? sgNode = target._sgNode : target instanceof _ccsg.Node && (sgNode = target);
          if (!sgNode || sgNode._cameraInfo) return;
          sgNode._cameraInfo = {
            touched: this._checkedTimes
          };
          this._sgNode.addTarget(sgNode);
          this._sgTarges.push(sgNode);
          var cmd;
          false;
        },
        _removeTargetInSg: function(target) {
          var sgNode;
          target instanceof cc.Node ? sgNode = target._sgNode : target instanceof _ccsg.Node && (sgNode = target);
          if (!sgNode || !sgNode._cameraInfo) return;
          this._sgNode.removeTarget(sgNode);
          delete sgNode._cameraInfo;
          cc.js.array.remove(this._sgTarges, sgNode);
          var cmd;
          false;
        },
        onEnable: function() {
          if (Camera.main) {
            cc.errorID(8300);
            return;
          }
          Camera.main = this;
          true;
          this._sgNode.setEnable(true);
          var targets = this._targets;
          for (var i = 0, l = targets.length; i < l; i++) this._addSgTargetInSg(targets[i]);
        },
        onDisable: function() {
          if (Camera.main !== this) return;
          Camera.main = null;
          true;
          this._sgNode.setEnable(false);
          var sgTargets = this._sgTarges;
          for (var i = sgTargets.length - 1; i >= 0; i--) this._removeTargetInSg(sgTargets[i]);
        },
        addTarget: function(target) {
          if (-1 !== this._targets.indexOf(target)) return;
          this._addSgTargetInSg(target);
          this._targets.push(target);
        },
        removeTarget: function(target) {
          if (-1 === this._targets.indexOf(target)) return;
          this._removeTargetInSg(target);
          cc.js.array.remove(this._targets, target);
        },
        getTargets: function() {
          return this._targets;
        },
        getNodeToCameraTransform: function(node) {
          var t = node.getNodeToWorldTransform();
          this.containsNode(node) && (t = cc.affineTransformConcatIn(t, cc.Camera.main.viewMatrix));
          return t;
        },
        getCameraToWorldPoint: function(point) {
          cc.Camera.main && (point = cc.pointApplyAffineTransform(point, cc.Camera.main.invertViewMatrix));
          return point;
        },
        containsNode: function(node) {
          node instanceof cc.Node && (node = node._sgNode);
          var targets = this._sgTarges;
          while (node) {
            if (-1 !== targets.indexOf(node)) return true;
            node = node.parent;
          }
          return false;
        },
        _setSgNodesCullingDirty: function() {
          var sgTarges = this._sgTarges;
          for (var i = 0; i < sgTarges.length; i++) {
            true;
            sgTarges[i].markCullingDirty();
          }
        },
        _checkSgTargets: function() {
          var targets = this._targets;
          var sgTarges = this._sgTarges;
          var checkedTimes = ++this._checkedTimes;
          for (var i = 0, l = targets.length; i < l; i++) {
            var target = targets[i];
            var sgNode = target;
            if (target instanceof cc.Node) {
              sgNode = target._sgNode;
              sgNode && !sgNode._cameraInfo && this._addSgTargetInSg(sgNode);
            }
            sgNode && (sgNode._cameraInfo.touched = checkedTimes);
          }
          for (var _i = sgTarges.length - 1; _i >= 0; _i--) {
            var sgTarget = sgTarges[_i];
            sgTarget._cameraInfo.touched !== checkedTimes && this._removeTargetInSg(sgTarget);
          }
        },
        lateUpdate: (true, function() {
          this._checkSgTargets();
          var m = this.viewMatrix;
          var im = this.invertViewMatrix;
          var viewPort = this.viewPort;
          var visibleRect = cc.visibleRect;
          var selfVisibleRect = this.visibleRect;
          var node = this.node;
          var wt = node.getNodeToWorldTransformAR();
          var rotation = .5 * -(Math.atan2(wt.b, wt.a) + Math.atan2(-wt.c, wt.d));
          var a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0;
          if (rotation) {
            c = Math.sin(rotation);
            d = Math.cos(rotation);
            a = d;
            b = -c;
          }
          var zoomRatio = this.zoomRatio;
          a *= zoomRatio;
          b *= zoomRatio;
          c *= zoomRatio;
          d *= zoomRatio;
          m.a = a;
          m.b = b;
          m.c = c;
          m.d = d;
          var center = visibleRect.center;
          m.tx = center.x - (a * wt.tx + c * wt.ty);
          m.ty = center.y - (b * wt.tx + d * wt.ty);
          cc.affineTransformInvertOut(m, im);
          viewPort.x = visibleRect.bottomLeft.x;
          viewPort.y = visibleRect.bottomLeft.y;
          viewPort.width = visibleRect.width;
          viewPort.height = visibleRect.height;
          cc._rectApplyAffineTransformIn(viewPort, im);
          selfVisibleRect.left.x = viewPort.xMin;
          selfVisibleRect.right.x = viewPort.xMax;
          selfVisibleRect.bottom.y = viewPort.yMin;
          selfVisibleRect.top.y = viewPort.yMax;
          this._sgNode.setTransform(a, b, c, d, m.tx, m.ty);
          var lvm = this._lastViewMatrix;
          if (lvm.a !== m.a || lvm.b !== m.b || lvm.c !== m.c || lvm.d !== m.d || lvm.tx !== m.tx || lvm.ty !== m.ty) {
            this._setSgNodesCullingDirty();
            lvm.a = m.a;
            lvm.b = m.b;
            lvm.c = m.c;
            lvm.d = m.d;
            lvm.tx = m.tx;
            lvm.ty = m.ty;
          }
        })
      });
      Camera.flags = cc.Enum({
        InCamera: 1,
        ParentInCamera: 2
      });
      module.exports = cc.Camera = Camera;
    }), {
      "./CCSGCameraNode": 1
    } ],
    32: [ (function(require, module, exports) {
      var Intersection = {};
      function lineLine(a1, a2, b1, b2) {
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (0 !== u_b) {
          var ua = ua_t / u_b;
          var ub = ub_t / u_b;
          if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) return true;
        }
        return false;
      }
      Intersection.lineLine = lineLine;
      function lineRect(a1, a2, b) {
        var r0 = new cc.Vec2(b.x, b.y);
        var r1 = new cc.Vec2(b.x, b.yMax);
        var r2 = new cc.Vec2(b.xMax, b.yMax);
        var r3 = new cc.Vec2(b.xMax, b.y);
        if (lineLine(a1, a2, r0, r1)) return true;
        if (lineLine(a1, a2, r1, r2)) return true;
        if (lineLine(a1, a2, r2, r3)) return true;
        if (lineLine(a1, a2, r3, r0)) return true;
        return false;
      }
      Intersection.lineRect = lineRect;
      function linePolygon(a1, a2, b) {
        var length = b.length;
        for (var i = 0; i < length; ++i) {
          var b1 = b[i];
          var b2 = b[(i + 1) % length];
          if (lineLine(a1, a2, b1, b2)) return true;
        }
        return false;
      }
      Intersection.linePolygon = linePolygon;
      function rectRect(a, b) {
        var a_min_x = a.x;
        var a_min_y = a.y;
        var a_max_x = a.x + a.width;
        var a_max_y = a.y + a.height;
        var b_min_x = b.x;
        var b_min_y = b.y;
        var b_max_x = b.x + b.width;
        var b_max_y = b.y + b.height;
        return a_min_x <= b_max_x && a_max_x >= b_min_x && a_min_y <= b_max_y && a_max_y >= b_min_y;
      }
      Intersection.rectRect = rectRect;
      function rectPolygon(a, b) {
        var i, l;
        var r0 = new cc.Vec2(a.x, a.y);
        var r1 = new cc.Vec2(a.x, a.yMax);
        var r2 = new cc.Vec2(a.xMax, a.yMax);
        var r3 = new cc.Vec2(a.xMax, a.y);
        if (linePolygon(r0, r1, b)) return true;
        if (linePolygon(r1, r2, b)) return true;
        if (linePolygon(r2, r3, b)) return true;
        if (linePolygon(r3, r0, b)) return true;
        for (i = 0, l = b.length; i < l; ++i) if (pointInPolygon(b[i], a)) return true;
        if (pointInPolygon(r0, b)) return true;
        if (pointInPolygon(r1, b)) return true;
        if (pointInPolygon(r2, b)) return true;
        if (pointInPolygon(r3, b)) return true;
        return false;
      }
      Intersection.rectPolygon = rectPolygon;
      function polygonPolygon(a, b) {
        var i, l;
        for (i = 0, l = a.length; i < l; ++i) {
          var a1 = a[i];
          var a2 = a[(i + 1) % l];
          if (linePolygon(a1, a2, b)) return true;
        }
        for (i = 0, l = b.length; i < l; ++i) if (pointInPolygon(b[i], a)) return true;
        for (i = 0, l = a.length; i < l; ++i) if (pointInPolygon(a[i], b)) return true;
        return false;
      }
      Intersection.polygonPolygon = polygonPolygon;
      function circleCircle(a, b) {
        var distance = a.position.sub(b.position).mag();
        return distance < a.radius + b.radius;
      }
      Intersection.circleCircle = circleCircle;
      function polygonCircle(polygon, circle) {
        var position = circle.position;
        if (pointInPolygon(position, polygon)) return true;
        for (var i = 0, l = polygon.length; i < l; i++) {
          var start = 0 === i ? polygon[polygon.length - 1] : polygon[i - 1];
          var end = polygon[i];
          if (pointLineDistance(position, start, end, true) < circle.radius) return true;
        }
        return false;
      }
      Intersection.polygonCircle = polygonCircle;
      function pointInPolygon(point, polygon) {
        var inside = false;
        var x = point.x;
        var y = point.y;
        var length = polygon.length;
        for (var i = 0, j = length - 1; i < length; j = i++) {
          var xi = polygon[i].x, yi = polygon[i].y, xj = polygon[j].x, yj = polygon[j].y, intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
          intersect && (inside = !inside);
        }
        return inside;
      }
      Intersection.pointInPolygon = pointInPolygon;
      function pointLineDistance(point, start, end, isSegment) {
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        var d = dx * dx + dy * dy;
        var t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / d;
        var p;
        p = isSegment ? d ? t < 0 ? start : t > 1 ? end : cc.v2(start.x + t * dx, start.y + t * dy) : start : cc.v2(start.x + t * dx, start.y + t * dy);
        dx = point.x - p.x;
        dy = point.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
      Intersection.pointLineDistance = pointLineDistance;
      cc.Intersection = module.exports = Intersection;
    }), {} ],
    33: [ (function(require, module, exports) {
      require("./platform/CCClass");
      var Flags = require("./platform/CCObject").Flags;
      var JsArray = require("./platform/js").array;
      var IsStartCalled = Flags.IsStartCalled;
      var IsOnEnableCalled = Flags.IsOnEnableCalled;
      var IsEditorOnEnableCalled = Flags.IsEditorOnEnableCalled;
      var callerFunctor = false;
      var callOnEnableInTryCatch = false;
      var callStartInTryCatch = false;
      var callUpdateInTryCatch = false;
      var callLateUpdateInTryCatch = false;
      var callOnDisableInTryCatch = false;
      var callStart = "c.start();c._objFlags|=" + IsStartCalled;
      var callUpdate = "c.update(dt)";
      var callLateUpdate = "c.lateUpdate(dt)";
      function sortedIndex(array, comp) {
        var order = comp.constructor._executionOrder;
        var id = comp.__instanceId;
        for (var l = 0, h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
          var test = array[m];
          var testOrder = test.constructor._executionOrder;
          if (testOrder > order) h = m - 1; else if (testOrder < order) l = m + 1; else {
            var testId = test.__instanceId;
            if (testId > id) h = m - 1; else {
              if (!(testId < id)) return m;
              l = m + 1;
            }
          }
        }
        return ~l;
      }
      function stableRemoveInactive(iterator, flagToClear) {
        var array = iterator.array;
        var next = iterator.i + 1;
        while (next < array.length) {
          var comp = array[next];
          if (comp._enabled && comp.node._activeInHierarchy) ++next; else {
            iterator.removeAt(next);
            flagToClear && (comp._objFlags &= ~flagToClear);
          }
        }
      }
      var LifeCycleInvoker = cc.Class({
        __ctor__: function(invokeFunc) {
          var Iterator = JsArray.MutableForwardIterator;
          this._zero = new Iterator([]);
          this._neg = new Iterator([]);
          this._pos = new Iterator([]);
          false;
          this._invoke = invokeFunc;
        },
        statics: {
          stableRemoveInactive: stableRemoveInactive
        },
        add: null,
        remove: null,
        invoke: null
      });
      function compareOrder(a, b) {
        return a.constructor._executionOrder - b.constructor._executionOrder;
      }
      var OneOffInvoker = cc.Class({
        extends: LifeCycleInvoker,
        add: function(comp) {
          var order = comp.constructor._executionOrder;
          (0 === order ? this._zero : order < 0 ? this._neg : this._pos).array.push(comp);
        },
        remove: function(comp) {
          var order = comp.constructor._executionOrder;
          (0 === order ? this._zero : order < 0 ? this._neg : this._pos).fastRemove(comp);
        },
        cancelInactive: function(flagToClear) {
          stableRemoveInactive(this._zero, flagToClear);
          stableRemoveInactive(this._neg, flagToClear);
          stableRemoveInactive(this._pos, flagToClear);
        },
        invoke: function() {
          var compsNeg = this._neg;
          if (compsNeg.array.length > 0) {
            compsNeg.array.sort(compareOrder);
            this._invoke(compsNeg);
            compsNeg.array.length = 0;
          }
          this._invoke(this._zero);
          this._zero.array.length = 0;
          var compsPos = this._pos;
          if (compsPos.array.length > 0) {
            compsPos.array.sort(compareOrder);
            this._invoke(compsPos);
            compsPos.array.length = 0;
          }
        }
      });
      var ReusableInvoker = cc.Class({
        extends: LifeCycleInvoker,
        add: function(comp) {
          var order = comp.constructor._executionOrder;
          if (0 === order) this._zero.array.push(comp); else {
            var array = order < 0 ? this._neg.array : this._pos.array;
            var i = sortedIndex(array, comp);
            i < 0 && array.splice(~i, 0, comp);
          }
        },
        remove: function(comp) {
          var order = comp.constructor._executionOrder;
          if (0 === order) this._zero.fastRemove(comp); else {
            var iterator = order < 0 ? this._neg : this._pos;
            var i = sortedIndex(iterator.array, comp);
            i >= 0 && iterator.removeAt(i);
          }
        },
        invoke: function(dt) {
          this._neg.array.length > 0 && this._invoke(this._neg, dt);
          this._invoke(this._zero, dt);
          this._pos.array.length > 0 && this._invoke(this._pos, dt);
        }
      });
      function enableInEditor(comp) {
        if (!(comp._objFlags & IsEditorOnEnableCalled)) {
          cc.engine.emit("component-enabled", comp.uuid);
          comp._objFlags |= IsEditorOnEnableCalled;
        }
      }
      function createInvokeImpl(funcOrCode, useDt) {
        if ("function" === (__typeofVal = typeof funcOrCode, "object" === __typeofVal ? __realTypeOfObj(funcOrCode) : __typeofVal)) return useDt ? function(iterator, dt) {
          var array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var comp = array[iterator.i];
            funcOrCode(comp, dt);
          }
        } : function(iterator) {
          var array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var comp = array[iterator.i];
            funcOrCode(comp);
          }
        };
        var body = "var a=it.array;for(it.i=0;it.i<a.length;++it.i){var c=a[it.i];" + funcOrCode + "}";
        return useDt ? Function("it", "dt", body) : Function("it", body);
      }
      function ctor() {
        this.startInvoker = new OneOffInvoker(createInvokeImpl(callStart));
        this.updateInvoker = new ReusableInvoker(createInvokeImpl(callUpdate, true));
        this.lateUpdateInvoker = new ReusableInvoker(createInvokeImpl(callLateUpdate, true));
        this.scheduleInNextFrame = [];
        this._updating = false;
      }
      var ComponentScheduler = cc.Class({
        ctor: ctor,
        unscheduleAll: ctor,
        statics: {
          LifeCycleInvoker: LifeCycleInvoker,
          OneOffInvoker: OneOffInvoker,
          createInvokeImpl: createInvokeImpl,
          invokeOnEnable: function(iterator) {
            var compScheduler = cc.director._compScheduler;
            var array = iterator.array;
            for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
              var comp = array[iterator.i];
              if (comp._enabled) {
                comp.onEnable();
                var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;
                deactivatedDuringOnEnable || compScheduler._onEnabled(comp);
              }
            }
          }
        },
        _onEnabled: function(comp) {
          cc.director.getScheduler().resumeTarget(comp);
          comp._objFlags |= IsOnEnableCalled;
          this._updating ? this.scheduleInNextFrame.push(comp) : this._scheduleImmediate(comp);
        },
        _onDisabled: function(comp) {
          cc.director.getScheduler().pauseTarget(comp);
          comp._objFlags &= ~IsOnEnableCalled;
          var index = this.scheduleInNextFrame.indexOf(comp);
          if (index >= 0) {
            JsArray.fastRemoveAt(this.scheduleInNextFrame, index);
            return;
          }
          !comp.start || comp._objFlags & IsStartCalled || this.startInvoker.remove(comp);
          comp.update && this.updateInvoker.remove(comp);
          comp.lateUpdate && this.lateUpdateInvoker.remove(comp);
        },
        enableComp: function(comp, invoker) {
          if (!(comp._objFlags & IsOnEnableCalled)) {
            if (comp.onEnable) {
              if (invoker) {
                invoker.add(comp);
                return;
              }
              comp.onEnable();
              var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;
              if (deactivatedDuringOnEnable) return;
            }
            this._onEnabled(comp);
          }
        },
        disableComp: function(comp) {
          if (comp._objFlags & IsOnEnableCalled) {
            comp.onDisable && comp.onDisable();
            this._onDisabled(comp);
          }
        },
        _scheduleImmediate: function(comp) {
          !comp.start || comp._objFlags & IsStartCalled || this.startInvoker.add(comp);
          comp.update && this.updateInvoker.add(comp);
          comp.lateUpdate && this.lateUpdateInvoker.add(comp);
        },
        _deferredSchedule: function() {
          var comps = this.scheduleInNextFrame;
          for (var i = 0, len = comps.length; i < len; i++) {
            var comp = comps[i];
            this._scheduleImmediate(comp);
          }
          comps.length = 0;
        },
        startPhase: function() {
          this._updating = true;
          this.scheduleInNextFrame.length > 0 && this._deferredSchedule();
          this.startInvoker.invoke();
        },
        updatePhase: function(dt) {
          this.updateInvoker.invoke(dt);
        },
        lateUpdatePhase: function(dt) {
          this.lateUpdateInvoker.invoke(dt);
          this._updating = false;
        }
      });
      module.exports = ComponentScheduler;
    }), {
      "./platform/CCClass": 92,
      "./platform/CCObject": 96,
      "./platform/js": 107,
      "./utils/misc": 117
    } ],
    34: [ (function(require, module, exports) {
      var AnimationAnimator = require("../../animation/animation-animator");
      var AnimationClip = require("../../animation/animation-clip");
      function equalClips(clip1, clip2) {
        if (clip1 === clip2) return true;
        return clip1 && clip2 && (clip1.name === clip2.name || clip1._uuid === clip2._uuid);
      }
      var Animation = cc.Class({
        name: "cc.Animation",
        extends: require("./CCComponent"),
        mixins: [ cc.EventTarget ],
        editor: false,
        ctor: function() {
          cc.EventTarget.call(this);
          this._animator = null;
          this._nameToState = {};
          this._didInit = false;
          this._currentClip = null;
        },
        properties: {
          _defaultClip: {
            default: null,
            type: AnimationClip
          },
          defaultClip: {
            type: AnimationClip,
            get: function() {
              return this._defaultClip;
            },
            set: function(value) {
              true;
              return;
              var clips;
              var i, l;
            },
            tooltip: false
          },
          currentClip: {
            get: function() {
              return this._currentClip;
            },
            set: function(value) {
              this._currentClip = value;
            },
            type: AnimationClip,
            visible: false
          },
          _clips: {
            default: [],
            type: [ AnimationClip ],
            tooltip: false,
            visible: true
          },
          playOnLoad: {
            default: false,
            tooltip: false
          }
        },
        start: function() {
          if ((true, this.playOnLoad) && this._defaultClip) {
            var isPlaying = this._animator && this._animator.isPlaying;
            if (!isPlaying) {
              var state = this.getAnimationState(this._defaultClip.name);
              this._animator.playState(state);
            }
          }
        },
        onEnable: function() {
          this._animator && this._animator.resume();
        },
        onDisable: function() {
          this._animator && this._animator.pause();
        },
        onDestroy: function() {
          this.stop();
        },
        getClips: function() {
          return this._clips;
        },
        play: function(name, startTime) {
          var state = this.playAdditive(name, startTime);
          this._animator.stopStatesExcept(state);
          return state;
        },
        playAdditive: function(name, startTime) {
          this._init();
          var state = this.getAnimationState(name || this._defaultClip && this._defaultClip.name);
          if (state) {
            this.enabled = true;
            var animator = this._animator;
            if (animator.isPlaying && state.isPlaying) if (state.isPaused) animator.resumeState(state); else {
              animator.stopState(state);
              animator.playState(state, startTime);
            } else animator.playState(state, startTime);
            this.currentClip = state.clip;
          }
          return state;
        },
        stop: function(name) {
          if (!this._didInit) return;
          if (name) {
            var state = this._nameToState[name];
            state && this._animator.stopState(state);
          } else this._animator.stop();
        },
        pause: function(name) {
          if (!this._didInit) return;
          if (name) {
            var state = this._nameToState[name];
            state && this._animator.pauseState(state);
          } else this.enabled = false;
        },
        resume: function(name) {
          if (!this._didInit) return;
          if (name) {
            var state = this._nameToState[name];
            state && this._animator.resumeState(state);
          } else this.enabled = true;
        },
        setCurrentTime: function(time, name) {
          this._init();
          if (name) {
            var state = this._nameToState[name];
            state && this._animator.setStateTime(state, time);
          } else this._animator.setStateTime(time);
        },
        getAnimationState: function(name) {
          this._init();
          var state = this._nameToState[name];
          false;
          state && !state.curveLoaded && this._animator._reloadClip(state);
          return state || null;
        },
        addClip: function(clip, newName) {
          if (!clip) {
            cc.warnID(3900);
            return;
          }
          this._init();
          cc.js.array.contains(this._clips, clip) || this._clips.push(clip);
          newName = newName || clip.name;
          var oldState = this._nameToState[newName];
          if (oldState) {
            if (oldState.clip === clip) return oldState;
            var index = this._clips.indexOf(oldState.clip);
            -1 !== index && this._clips.splice(index, 1);
          }
          var newState = new cc.AnimationState(clip, newName);
          this._nameToState[newName] = newState;
          return newState;
        },
        removeClip: function(clip, force) {
          if (!clip) {
            cc.warnID(3901);
            return;
          }
          this._init();
          var state;
          for (var name in this._nameToState) {
            state = this._nameToState[name];
            var stateClip = state.clip;
            if (stateClip === clip) break;
          }
          if (clip === this._defaultClip) {
            if (!force) {
              true;
              cc.warnID(3902);
              return;
            }
            this._defaultClip = null;
          }
          if (state && state.isPlaying) {
            if (!force) {
              true;
              cc.warnID(3903);
              return;
            }
            this.stop(state.name);
          }
          this._clips = this._clips.filter((function(item) {
            return item !== clip;
          }));
          state && delete this._nameToState[state.name];
        },
        sample: function(name) {
          this._init();
          if (name) {
            var state = this._nameToState[name];
            state && state.sample();
          } else this._animator.sample();
        },
        on: function(type, callback, target, useCapture) {
          this._init();
          var ret = cc.EventTarget.prototype.on.call(this, type, callback, target, useCapture);
          var array = this._animator._anims.array;
          for (var i = 0; i < array.length; ++i) array[i]._setListeners(this);
          return ret;
        },
        off: function(type, callback, target, useCapture) {
          this._init();
          cc.EventTarget.prototype.off.call(this, type, callback, target, useCapture);
          var nameToState = this._nameToState;
          for (var name in nameToState) {
            var state = nameToState[name];
            state._setListeners(null);
          }
        },
        _init: function() {
          if (this._didInit) return;
          this._didInit = true;
          this._animator = new AnimationAnimator(this.node, this);
          this._createStates();
        },
        _createStates: function() {
          this._nameToState = {};
          var state = null;
          var defaultClipState = false;
          for (var i = 0; i < this._clips.length; ++i) {
            var clip = this._clips[i];
            if (clip) {
              state = new cc.AnimationState(clip);
              false;
              this._nameToState[state.name] = state;
              equalClips(this._defaultClip, clip) && (defaultClipState = state);
            }
          }
          if (this._defaultClip && !defaultClipState) {
            state = new cc.AnimationState(this._defaultClip);
            false;
            this._nameToState[state.name] = state;
          }
        }
      });
      cc.Animation = module.exports = Animation;
    }), {
      "../../animation/animation-animator": 4,
      "../../animation/animation-clip": 5,
      "./CCComponent": 39
    } ],
    35: [ (function(require, module, exports) {
      var AudioSource = cc.Class({
        name: "cc.AudioSource",
        extends: require("./CCComponent"),
        editor: false,
        ctor: function() {
          this.audio = new cc.Audio();
        },
        properties: {
          _clip: {
            default: "",
            url: cc.AudioClip
          },
          _volume: 1,
          _mute: false,
          _loop: false,
          _pausedFlag: {
            default: false,
            serializable: false
          },
          isPlaying: {
            get: function() {
              if (!this.audio) return false;
              var state = this.audio.getState();
              return state === cc.Audio.State.PLAYING;
            },
            visible: false
          },
          clip: {
            get: function() {
              return this._clip;
            },
            set: function(value) {
              if (value === this._clip) return;
              this._clip = value;
              this.audio.stop();
              this.audio.src = this._clip;
              this.audio.preload && this.audio.preload();
            },
            url: cc.AudioClip,
            tooltip: false,
            animatable: false
          },
          volume: {
            get: function() {
              return this._volume;
            },
            set: function(value) {
              value = cc.clamp01(value);
              this._volume = value;
              var audio = this.audio;
              if (audio && !this._mute) {
                audio.setVolume(value);
                audio._loaded || audio.on("load", (function() {
                  audio.setVolume(value);
                }));
              }
              return value;
            },
            tooltip: false
          },
          mute: {
            get: function() {
              return this._mute;
            },
            set: function(value) {
              this._mute = value;
              this.audio && this.audio.setVolume(value ? 0 : this._volume);
              return value;
            },
            animatable: false,
            tooltip: false
          },
          loop: {
            get: function() {
              return this._loop;
            },
            set: function(value) {
              this._loop = value;
              this.audio && this.audio.setLoop(value);
              return value;
            },
            animatable: false,
            tooltip: false
          },
          playOnLoad: {
            default: false,
            tooltip: false,
            animatable: false
          },
          preload: {
            default: false,
            animatable: false
          }
        },
        _pausedCallback: function() {
          var audio = this.audio;
          if (!audio || audio.paused) return;
          this.audio.pause();
          this._pausedFlag = true;
        },
        _restoreCallback: function() {
          if (!this.audio) return;
          this._pausedFlag && this.audio.resume();
          this._pausedFlag = false;
        },
        onEnable: function() {
          this.playOnLoad && this.play();
          if (this.preload) {
            this.audio.src = this._clip;
            this.audio.preload();
          }
          cc.game.on(cc.game.EVENT_HIDE, this._pausedCallback, this);
          cc.game.on(cc.game.EVENT_SHOW, this._restoreCallback, this);
        },
        onDisable: function() {
          this.stop();
          cc.game.off(cc.game.EVENT_HIDE, this._pausedCallback, this);
          cc.game.off(cc.game.EVENT_SHOW, this._restoreCallback, this);
        },
        onDestroy: function() {
          this.stop();
          this.audio.destroy();
          cc.audioEngine.uncache(this._clip);
        },
        play: function() {
          if (!this._clip) return;
          var volume = this._mute ? 0 : this._volume;
          var audio = this.audio;
          var loop = this._loop;
          if (audio._loaded) {
            audio.stop();
            audio.setCurrentTime(0);
            audio.play();
            return;
          }
          audio.src = this._clip;
          audio.once("load", (function() {
            audio.setLoop(loop);
            audio.setVolume(volume);
            audio.play();
          }));
          audio.preload();
        },
        stop: function() {
          this.audio && this.audio.stop();
        },
        pause: function() {
          this.audio && this.audio.pause();
        },
        resume: function() {
          this.audio && this.audio.resume();
        },
        rewind: function() {
          this.audio && this.audio.setCurrentTime(0);
        },
        getCurrentTime: function() {
          var time = 0;
          this.audio && (time = this.audio.getCurrentTime());
          return time;
        },
        setCurrentTime: function(time) {
          var audio = this.audio;
          if (!audio) return time;
          if (!audio._loaded) {
            audio.once("load", (function() {
              audio.setCurrentTime(time);
            }));
            return time;
          }
          audio.setCurrentTime(time);
          return time;
        },
        getDuration: function() {
          var time = 0;
          this.audio && (time = this.audio.getDuration());
          return time;
        }
      });
      cc.AudioSource = module.exports = AudioSource;
    }), {
      "./CCComponent": 39
    } ],
    36: [ (function(require, module, exports) {
      var BlockEvents = [ "touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "mouseenter", "mouseleave", "mousewheel" ];
      function stopPropagation(event) {
        event.stopPropagation();
      }
      var BlockInputEvents = cc.Class({
        name: "cc.BlockInputEvents",
        extends: require("./CCComponent"),
        editor: {
          menu: "i18n:MAIN_MENU.component.ui/Block Input Events",
          inspector: "packages://inspector/inspectors/comps/block-input-events.js",
          help: "i18n:COMPONENT.help_url.block-input-events"
        },
        onEnable: function() {
          for (var i = 0; i < BlockEvents.length; i++) this.node.on(BlockEvents[i], stopPropagation, this);
        },
        onDisable: function() {
          for (var i = 0; i < BlockEvents.length; i++) this.node.off(BlockEvents[i], stopPropagation, this);
        }
      });
      cc.BlockInputEvents = module.exports = BlockInputEvents;
    }), {
      "./CCComponent": 39
    } ],
    37: [ (function(require, module, exports) {
      var Transition = cc.Enum({
        NONE: 0,
        COLOR: 1,
        SPRITE: 2,
        SCALE: 3
      });
      var Button = cc.Class({
        name: "cc.Button",
        extends: require("./CCComponent"),
        ctor: function() {
          this._resetState();
          this._fromColor = null;
          this._toColor = null;
          this._time = 0;
          this._transitionFinished = true;
          this._fromScale = 1;
          this._toScale = 1;
          this._originalScale = 1;
          this._sprite = null;
          false;
        },
        _resetState: function() {
          this._pressed = false;
          this._hovered = false;
        },
        editor: false,
        properties: {
          interactable: {
            default: true,
            tooltip: false,
            notify: function(oldValue) {
              false;
              this._updateState();
              this.interactable || this._resetState();
            },
            animatable: false
          },
          _resizeToTarget: {
            animatable: false,
            set: function(value) {
              value && this._resizeNodeToTargetNode();
            }
          },
          enableAutoGrayEffect: {
            default: false,
            tooltip: false,
            notify: function() {
              this._updateDisabledState();
            }
          },
          transition: {
            default: Transition.NONE,
            tooltip: false,
            type: Transition,
            animatable: false
          },
          normalColor: {
            default: cc.color(214, 214, 214),
            displayName: "Normal",
            tooltip: false,
            notify: function() {
              this._updateState();
            }
          },
          pressedColor: {
            default: cc.color(211, 211, 211),
            displayName: "Pressed",
            tooltip: false
          },
          hoverColor: {
            default: cc.Color.WHITE,
            displayName: "Hover",
            tooltip: false
          },
          disabledColor: {
            default: cc.color(124, 124, 124),
            displayName: "Disabled",
            tooltip: false,
            notify: function() {
              this._updateState();
            }
          },
          duration: {
            default: .1,
            range: [ 0, 10 ],
            tooltip: false
          },
          zoomScale: {
            default: 1.2,
            tooltip: false
          },
          normalSprite: {
            default: null,
            type: cc.SpriteFrame,
            displayName: "Normal",
            tooltip: false,
            notify: function() {
              this._updateState();
            }
          },
          pressedSprite: {
            default: null,
            type: cc.SpriteFrame,
            displayName: "Pressed",
            tooltip: false,
            formerlySerializedAs: "pressedSprite",
            notify: function() {
              this._updateState();
            }
          },
          hoverSprite: {
            default: null,
            type: cc.SpriteFrame,
            displayName: "Hover",
            tooltip: false,
            formerlySerializedAs: "hoverSprite",
            notify: function() {
              this._updateState();
            }
          },
          disabledSprite: {
            default: null,
            type: cc.SpriteFrame,
            displayName: "Disabled",
            tooltip: false,
            notify: function() {
              this._updateState();
            }
          },
          target: {
            default: null,
            type: cc.Node,
            tooltip: false,
            notify: function() {
              this._applyTarget();
            }
          },
          clickEvents: {
            default: [],
            type: cc.Component.EventHandler,
            tooltip: false
          }
        },
        statics: {
          Transition: Transition
        },
        __preload: function() {
          this.target || (this.target = this.node);
          this._applyTarget();
          this._updateState();
        },
        onEnable: function() {
          this.normalSprite && this.normalSprite.ensureLoadTexture();
          this.hoverSprite && this.hoverSprite.ensureLoadTexture();
          this.pressedSprite && this.pressedSprite.ensureLoadTexture();
          this.disabledSprite && this.disabledSprite.ensureLoadTexture();
          true;
          this._registerEvent();
        },
        update: function(dt) {
          var target = this.target;
          if (this._transitionFinished) return;
          if (this.transition !== Transition.COLOR && this.transition !== Transition.SCALE) return;
          this.time += dt;
          var ratio = 1;
          this.duration > 0 && (ratio = this.time / this.duration);
          if (ratio >= 1) {
            ratio = 1;
            this._transitionFinished = true;
          }
          this.transition === Transition.COLOR ? target.color = this._fromColor.lerp(this._toColor, ratio) : this.transition === Transition.SCALE && (target.scale = cc.lerp(this._fromScale, this._toScale, ratio));
        },
        _registerEvent: function() {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.on(cc.Node.EventType.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.on(cc.Node.EventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
        },
        _getTargetSprite: function(target) {
          var sprite = null;
          target && (sprite = target.getComponent(cc.Sprite));
          return sprite;
        },
        _applyTarget: function() {
          this._sprite = this._getTargetSprite(this.target);
          this.target && (this._originalScale = this.target.scale);
        },
        _onTouchBegan: function(event) {
          if (!this.interactable || !this.enabledInHierarchy) return;
          this._pressed = true;
          this._updateState();
          event.stopPropagation();
        },
        _onTouchMove: function(event) {
          if (!this.interactable || !this.enabledInHierarchy || !this._pressed) return;
          var touch = event.touch;
          var hit = this.node._hitTest(touch.getLocation());
          if (this.transition === Transition.SCALE && this.target) if (hit) {
            this._fromScale = this._originalScale;
            this._toScale = this._originalScale * this.zoomScale;
            this._transitionFinished = false;
          } else {
            this.time = 0;
            this._transitionFinished = true;
            this.target.scale = this._originalScale;
          } else {
            var state;
            state = hit ? "pressed" : "normal";
            this._applyTransition(state);
          }
          event.stopPropagation();
        },
        _onTouchEnded: function(event) {
          if (!this.interactable || !this.enabledInHierarchy) return;
          if (this._pressed) {
            cc.Component.EventHandler.emitEvents(this.clickEvents, event);
            this.node.emit("click", this);
          }
          this._pressed = false;
          this._updateState();
          event.stopPropagation();
        },
        _zoomUp: function() {
          this._fromScale = this._originalScale;
          this._toScale = this._originalScale * this.zoomScale;
          this.time = 0;
          this._transitionFinished = false;
        },
        _zoomBack: function() {
          this._fromScale = this.target.scale;
          this._toScale = this._originalScale;
          this.time = 0;
          this._transitionFinished = false;
        },
        _onTouchCancel: function() {
          if (!this.interactable || !this.enabledInHierarchy) return;
          this._pressed = false;
          this._updateState();
        },
        _onMouseMoveIn: function() {
          if (this._pressed || !this.interactable || !this.enabledInHierarchy) return;
          if (this.transition === Transition.SPRITE && !this.hoverSprite) return;
          if (!this._hovered) {
            this._hovered = true;
            this._updateState();
          }
        },
        _onMouseMoveOut: function() {
          if (this._hovered) {
            this._hovered = false;
            this._updateState();
          }
        },
        _updateState: function() {
          var state = this._getButtonState();
          this._applyTransition(state);
          this._updateDisabledState();
        },
        onDisable: function() {
          this._hovered = false;
          this._pressed = false;
          true;
          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
          this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.off(cc.Node.EventType.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.off(cc.Node.EventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
        },
        _getButtonState: function() {
          var state;
          state = this.interactable ? this._pressed ? "pressed" : this._hovered ? "hover" : "normal" : "disabled";
          return state;
        },
        _updateColorTransition: function(state) {
          var color = this[state + "Color"];
          var target = this.target;
          false;
          this._fromColor = target.color.clone();
          this._toColor = color;
          this.time = 0;
          this._transitionFinished = false;
        },
        _updateSpriteTransition: function(state) {
          var sprite = this[state + "Sprite"];
          this._sprite && sprite && (this._sprite.spriteFrame = sprite);
        },
        _updateScaleTransition: function(state) {
          "pressed" === state ? this._zoomUp() : this._zoomBack();
        },
        _applyTransition: function(state) {
          var transition = this.transition;
          transition === Transition.COLOR ? this._updateColorTransition(state) : transition === Transition.SPRITE ? this._updateSpriteTransition(state) : transition === Transition.SCALE && this._updateScaleTransition(state);
        },
        _resizeNodeToTargetNode: false,
        _updateDisabledState: function() {
          this._sprite && this._sprite._sgNode.setState(0);
          this.enableAutoGrayEffect && this.transition !== Transition.COLOR && (this.transition === Transition.SPRITE && this.disabledSprite || this._sprite && !this.interactable && this._sprite._sgNode.setState(1));
        }
      });
      cc.Button = module.exports = Button;
    }), {
      "./CCComponent": 39
    } ],
    38: [ (function(require, module, exports) {
      var eventManager = require("../event-manager");
      var designResolutionWrapper = {
        getContentSize: function() {
          return cc.visibleRect;
        },
        setContentSize: function(size) {},
        _getWidth: function() {
          return this.getContentSize().width;
        },
        _getHeight: function() {
          return this.getContentSize().height;
        }
      };
      var Canvas = cc.Class({
        name: "cc.Canvas",
        extends: require("./CCComponent"),
        editor: false,
        resetInEditor: false,
        statics: {
          instance: null
        },
        properties: {
          _designResolution: cc.size(960, 640),
          designResolution: {
            get: function() {
              return cc.size(this._designResolution);
            },
            set: function(value) {
              this._designResolution.width = value.width;
              this._designResolution.height = value.height;
              this.applySettings();
            },
            tooltip: false
          },
          _fitWidth: false,
          _fitHeight: true,
          fitHeight: {
            get: function() {
              return this._fitHeight;
            },
            set: function(value) {
              if (this._fitHeight !== value) {
                this._fitHeight = value;
                this.applySettings();
              }
            },
            tooltip: false
          },
          fitWidth: {
            get: function() {
              return this._fitWidth;
            },
            set: function(value) {
              if (this._fitWidth !== value) {
                this._fitWidth = value;
                this.applySettings();
              }
            },
            tooltip: false
          }
        },
        ctor: function() {
          true;
          this._thisOnResized = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "window-resize",
            callback: this.onResized.bind(this)
          });
          this._thisOnResized.retain();
        },
        __preload: function() {
          var Flags;
          false;
          if (Canvas.instance) return cc.errorID(6700, this.node.name, Canvas.instance.node.name);
          Canvas.instance = this;
          if (this.node._sizeProvider) {
            var renderer;
            false;
          } else this.node._sizeProvider = designResolutionWrapper;
          cc.director.on(cc.Director.EVENT_BEFORE_VISIT, this.alignWithScreen, this);
          false;
          false;
          eventManager.addListener(this._thisOnResized, 1);
          this.applySettings();
          this.onResized();
        },
        onDestroy: function() {
          this.node._sizeProvider === designResolutionWrapper && (this.node._sizeProvider = null);
          cc.director.off(cc.Director.EVENT_BEFORE_VISIT, this.alignWithScreen, this);
          false;
          false;
          eventManager.removeListener(this._thisOnResized);
          this._thisOnResized.release();
          Canvas.instance === this && (Canvas.instance = null);
        },
        alignWithScreen: function() {
          var designSize;
          false;
          var canvasSize = cc.visibleRect;
          var clipTopRight = !this.fitHeight && !this.fitWidth;
          var offsetX = 0;
          var offsetY = 0;
          if (clipTopRight) {
            designSize = cc.view.getDesignResolutionSize();
            offsetX = .5 * (designSize.width - canvasSize.width);
            offsetY = .5 * (designSize.height - canvasSize.height);
          }
          this.node.setPosition(.5 * canvasSize.width + offsetX, .5 * canvasSize.height + offsetY);
        },
        onResized: function() {
          this.alignWithScreen();
        },
        applySettings: function() {
          var ResolutionPolicy = cc.ResolutionPolicy;
          var policy;
          policy = this.fitHeight && this.fitWidth ? ResolutionPolicy.SHOW_ALL : this.fitHeight || this.fitWidth ? this.fitWidth ? ResolutionPolicy.FIXED_WIDTH : ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.NO_BORDER;
          var designRes = this._designResolution;
          false;
          cc.view.setDesignResolutionSize(designRes.width, designRes.height, policy);
        }
      });
      cc.Canvas = module.exports = Canvas;
    }), {
      "../event-manager": 62,
      "./CCComponent": 39
    } ],
    39: [ (function(require, module, exports) {
      var CCObject = require("../platform/CCObject");
      var JS = require("../platform/js");
      var idGenerater = new (require("../platform/id-generater"))("Comp");
      var IsOnEnableCalled = CCObject.Flags.IsOnEnableCalled;
      var IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
      var Component = cc.Class({
        name: "cc.Component",
        extends: CCObject,
        ctor: function() {
          this.__instanceId = cc.ClassManager.getNewInstanceId();
          this.__eventTargets = [];
        },
        properties: {
          node: {
            default: null,
            visible: false
          },
          name: {
            get: function() {
              if (this._name) return this._name;
              var className = cc.js.getClassName(this);
              var trimLeft = className.lastIndexOf(".");
              trimLeft >= 0 && (className = className.slice(trimLeft + 1));
              return this.node.name + "<" + className + ">";
            },
            set: function(value) {
              this._name = value;
            },
            visible: false
          },
          _id: {
            default: "",
            serializable: false
          },
          uuid: {
            get: function() {
              var id = this._id;
              if (!id) {
                id = this._id = idGenerater.getNewId();
                false, false;
              }
              return id;
            },
            visible: false
          },
          __scriptAsset: false,
          _enabled: true,
          enabled: {
            get: function() {
              return this._enabled;
            },
            set: function(value) {
              if (this._enabled !== value) {
                this._enabled = value;
                if (this.node._activeInHierarchy) {
                  var compScheduler = cc.director._compScheduler;
                  value ? compScheduler.enableComp(this) : compScheduler.disableComp(this);
                }
              }
            },
            visible: false
          },
          enabledInHierarchy: {
            get: function() {
              return (this._objFlags & IsOnEnableCalled) > 0;
            },
            visible: false
          },
          _isOnLoadCalled: {
            get: function() {
              return this._objFlags & IsOnLoadCalled;
            }
          }
        },
        update: null,
        lateUpdate: null,
        __preload: null,
        onLoad: null,
        start: null,
        onEnable: null,
        onDisable: null,
        onDestroy: null,
        onFocusInEditor: null,
        onLostFocusInEditor: null,
        resetInEditor: null,
        addComponent: function(typeOrClassName) {
          return this.node.addComponent(typeOrClassName);
        },
        getComponent: function(typeOrClassName) {
          return this.node.getComponent(typeOrClassName);
        },
        getComponents: function(typeOrClassName) {
          return this.node.getComponents(typeOrClassName);
        },
        getComponentInChildren: function(typeOrClassName) {
          return this.node.getComponentInChildren(typeOrClassName);
        },
        getComponentsInChildren: function(typeOrClassName) {
          return this.node.getComponentsInChildren(typeOrClassName);
        },
        _getLocalBounds: null,
        onRestore: null,
        destroy: function() {
          var depend;
          false;
          this._super() && this._enabled && this.node._activeInHierarchy && cc.director._compScheduler.disableComp(this);
        },
        _onPreDestroy: function() {
          this.unscheduleAllCallbacks();
          var eventTargets = this.__eventTargets;
          for (var i = 0, l = eventTargets.length; i < l; ++i) {
            var target = eventTargets[i];
            target && target.targetOff(this);
          }
          eventTargets.length = 0;
          false;
          cc.director._nodeActivator.destroyComp(this);
          this.node._removeComponent(this);
          false, false;
        },
        _instantiate: function(cloned) {
          cloned || (cloned = cc.instantiate._clone(this, this));
          cloned.node = null;
          return cloned;
        },
        isRunning: function() {
          return this.enabledInHierarchy;
        },
        schedule: function(callback, interval, repeat, delay) {
          cc.assertID(callback, 1619);
          cc.assertID(interval >= 0, 1620);
          interval = interval || 0;
          repeat = isNaN(repeat) ? cc.macro.REPEAT_FOREVER : repeat;
          delay = delay || 0;
          var scheduler = cc.director.getScheduler();
          var paused = scheduler.isTargetPaused(this);
          scheduler.schedule(callback, this, interval, repeat, delay, paused);
        },
        scheduleOnce: function(callback, delay) {
          this.schedule(callback, 0, 0, delay);
        },
        unschedule: function(callback_fn) {
          if (!callback_fn) return;
          cc.director.getScheduler().unschedule(callback_fn, this);
        },
        unscheduleAllCallbacks: function() {
          cc.director.getScheduler().unscheduleAllForTarget(this);
        }
      });
      Component._requireComponent = null;
      Component._executionOrder = 0;
      false, false;
      JS.value(Component, "_registerEditorProps", (function(cls, props) {
        var reqComp = props.requireComponent;
        reqComp && (cls._requireComponent = reqComp);
        var order = props.executionOrder;
        order && "number" === (__typeofVal = typeof order, "object" === __typeofVal ? __realTypeOfObj(order) : __typeofVal) && (cls._executionOrder = order);
        var name;
        var key;
        var val;
        var willExecuteInEditMode;
        false, false;
      }));
      Component.prototype.__scriptUuid = "";
      cc.Component = module.exports = Component;
    }), {
      "../platform/CCObject": 96,
      "../platform/id-generater": 103,
      "../platform/js": 107
    } ],
    40: [ (function(require, module, exports) {
      cc.Component.EventHandler = cc.Class({
        name: "cc.ClickEvent",
        properties: {
          target: {
            default: null,
            type: cc.Node
          },
          component: {
            default: ""
          },
          handler: {
            default: ""
          },
          customEventData: {
            default: ""
          }
        },
        statics: {
          emitEvents: function(events) {
            "use strict";
            var args, i, l;
            if (arguments.length > 0) {
              args = new Array(arguments.length - 1);
              for (i = 0, l = args.length; i < l; i++) args[i] = arguments[i + 1];
            }
            for (i = 0, l = events.length; i < l; i++) {
              var event = events[i];
              if (!(event instanceof cc.Component.EventHandler)) continue;
              event.emit(args);
            }
          }
        },
        emit: function(params) {
          var target = this.target;
          if (!cc.isValid(target)) return;
          var comp = target.getComponent(this.component);
          if (!cc.isValid(comp)) return;
          var handler = comp[this.handler];
          if ("function" !== (__typeofVal = typeof handler, "object" === __typeofVal ? __realTypeOfObj(handler) : __typeofVal)) return;
          if (null != this.customEventData && "" !== this.customEventData) {
            params = params.slice();
            params.push(this.customEventData);
          }
          handler.apply(comp, params);
        }
      });
    }), {} ],
    41: [ (function(require, module, exports) {
      require("../editbox/CCSGEditBox");
      var KeyboardReturnType = _ccsg.EditBox.KeyboardReturnType;
      var InputMode = _ccsg.EditBox.InputMode;
      var InputFlag = _ccsg.EditBox.InputFlag;
      var EditBox = cc.Class({
        name: "cc.EditBox",
        extends: cc._RendererUnderSG,
        editor: false,
        properties: {
          _useOriginalSize: true,
          _string: "",
          string: {
            tooltip: false,
            get: function() {
              return this._sgNode.string;
            },
            set: function(value) {
              this._sgNode.string = this._string = value;
            }
          },
          backgroundImage: {
            tooltip: false,
            default: null,
            type: cc.SpriteFrame,
            notify: function() {
              var sgNode = this._sgNode;
              var backgroundSprite = sgNode.getBackgroundSprite();
              if (this.backgroundImage) {
                var sprite = this._createBackgroundSprite();
                sprite.setContentSize(sgNode.getContentSize());
              } else backgroundSprite.removeFromParent();
            }
          },
          returnType: {
            default: KeyboardReturnType.DEFAULT,
            tooltip: false,
            displayName: "KeyboardReturnType",
            type: KeyboardReturnType,
            notify: function() {
              this._sgNode.returnType = this.returnType;
            }
          },
          inputFlag: {
            tooltip: false,
            default: InputFlag.DEFAULT,
            type: InputFlag,
            notify: function() {
              this._sgNode.inputFlag = this.inputFlag;
            }
          },
          inputMode: {
            tooltip: false,
            default: InputMode.ANY,
            type: InputMode,
            notify: function() {
              this._sgNode.inputMode = this.inputMode;
            }
          },
          fontSize: {
            tooltip: false,
            default: 20,
            notify: function() {
              this._sgNode.fontSize = this.fontSize;
            }
          },
          lineHeight: {
            tooltip: false,
            default: 40,
            notify: function() {
              this._sgNode.setLineHeight(this.lineHeight);
            }
          },
          fontColor: {
            tooltip: false,
            default: cc.Color.WHITE,
            notify: function() {
              this._sgNode.fontColor = this.fontColor;
            }
          },
          placeholder: {
            tooltip: false,
            default: "Enter text here...",
            notify: function() {
              this._sgNode.placeholder = this.placeholder;
            }
          },
          placeholderFontSize: {
            tooltip: false,
            default: 20,
            notify: function() {
              this._sgNode.placeholderFontSize = this.placeholderFontSize;
            }
          },
          placeholderFontColor: {
            tooltip: false,
            default: cc.Color.GRAY,
            notify: function() {
              this._sgNode.placeholderFontColor = this.placeholderFontColor;
            }
          },
          maxLength: {
            tooltip: false,
            default: 20,
            notify: function() {
              this._sgNode.maxLength = this.maxLength;
            }
          },
          stayOnTop: {
            tooltip: false,
            default: false,
            notify: function() {
              false;
            }
          },
          _tabIndex: 0,
          tabIndex: {
            tooltip: false,
            get: function() {
              return this._tabIndex;
            },
            set: function(value) {
              this._tabIndex = value;
              this._sgNode.setTabIndex(value);
            }
          },
          editingDidBegan: {
            default: [],
            type: cc.Component.EventHandler
          },
          textChanged: {
            default: [],
            type: cc.Component.EventHandler
          },
          editingDidEnded: {
            default: [],
            type: cc.Component.EventHandler
          },
          editingReturn: {
            default: [],
            type: cc.Component.EventHandler
          }
        },
        statics: {
          KeyboardReturnType: KeyboardReturnType,
          InputFlag: InputFlag,
          InputMode: InputMode
        },
        _applyCapInset: function(sprite) {
          var backgroundImage = this.backgroundImage;
          sprite.setInsetTop(backgroundImage.insetTop);
          sprite.setInsetBottom(backgroundImage.insetBottom);
          sprite.setInsetRight(backgroundImage.insetRight);
          sprite.setInsetLeft(backgroundImage.insetLeft);
        },
        _createSgNode: function() {
          return new _ccsg.EditBox(cc.size(160, 40));
        },
        _createBackgroundSprite: function() {
          var sgNode = this._sgNode;
          var bgSprite = new cc.Scale9Sprite();
          bgSprite.setRenderingType(cc.Scale9Sprite.RenderingType.SLICED);
          if (this.backgroundImage) {
            this.backgroundImage.ensureLoadTexture();
            bgSprite.setSpriteFrame(this.backgroundImage);
            this._applyCapInset(bgSprite);
          }
          sgNode.initWithSizeAndBackgroundSprite(cc.size(160, 40), bgSprite);
          return bgSprite;
        },
        _initSgNode: function() {
          var sgNode = this._sgNode;
          false;
          this._createBackgroundSprite();
          false;
          sgNode.setContentSize(this.node.getContentSize());
          sgNode.inputMode = this.inputMode;
          sgNode.maxLength = this.maxLength;
          sgNode.string = this._string;
          sgNode.fontSize = this.fontSize;
          sgNode.fontColor = this.fontColor;
          sgNode.placeholder = this.placeholder;
          sgNode.placeholderFontSize = this.placeholderFontSize;
          sgNode.placeholderFontColor = this.placeholderFontColor;
          sgNode.inputFlag = this.inputFlag;
          sgNode.returnType = this.returnType;
          sgNode.setLineHeight(this.lineHeight);
          sgNode.stayOnTop(this.stayOnTop);
          sgNode.setTabIndex(this.tabIndex);
          sgNode.setDelegate(this);
        },
        editBoxEditingDidBegan: function() {
          cc.Component.EventHandler.emitEvents(this.editingDidBegan, this);
          this.node.emit("editing-did-began", this);
        },
        editBoxEditingDidEnded: function() {
          cc.Component.EventHandler.emitEvents(this.editingDidEnded, this);
          this.node.emit("editing-did-ended", this);
        },
        editBoxTextChanged: function(editBox, text) {
          cc.Component.EventHandler.emitEvents(this.textChanged, text, this);
          this.node.emit("text-changed", this);
        },
        editBoxEditingReturn: function() {
          cc.Component.EventHandler.emitEvents(this.editingReturn, this);
          this.node.emit("editing-return", this);
        },
        onDestroy: function() {
          this._sgNode.setDelegate(null);
          this._super();
        },
        __preload: function() {
          this._super();
          true;
          this._registerEvent();
        },
        _registerEvent: function() {
          false;
        },
        _onTouchBegan: function(event) {
          this._sgNode && this._sgNode._onTouchBegan(event.touch);
          event.stopPropagation();
        },
        _onTouchEnded: function(event) {
          this._sgNode && this._sgNode._onTouchEnded();
          event.stopPropagation();
        },
        setFocus: function() {
          this._sgNode && this._sgNode.setFocus();
        },
        isFocused: function() {
          var isFocused = false;
          this._sgNode && (isFocused = this._sgNode.isFocused());
          return isFocused;
        }
      });
      true;
      EditBox.prototype.editBoxEditingDidBegin = function(sender) {
        this.editBoxEditingDidBegan(sender);
      };
      EditBox.prototype.editBoxEditingDidEnd = function(sender) {
        this.editBoxEditingDidEnded(sender);
      };
      cc.EditBox = module.exports = EditBox;
    }), {
      "../editbox/CCSGEditBox": 1
    } ],
    42: [ (function(require, module, exports) {
      require("../label/CCSGLabel");
      require("../label/CCSGLabelCanvasRenderCmd");
      require("../label/CCSGLabelWebGLRenderCmd");
      var HorizontalAlign = cc.TextAlignment;
      var VerticalAlign = cc.VerticalTextAlignment;
      var Overflow = _ccsg.Label.Overflow;
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this;
          var later = function() {
            timeout = null;
            immediate || func.apply(context, arguments);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          callNow && func.apply(context, arguments);
        };
      }
      var Label = cc.Class({
        name: "cc.Label",
        extends: cc._RendererUnderSG,
        ctor: function() {
          false;
        },
        editor: false,
        _updateSgNodeString: function() {
          this._sgNode.setString(this.string);
          this._updateNodeSize();
        },
        _updateSgNodeFontSize: function() {
          if (this._sgNode) {
            this._sgNode.setFontSize(this._fontSize);
            this._updateNodeSize();
          }
        },
        properties: {
          _useOriginalSize: true,
          string: {
            default: "Label",
            multiline: true,
            tooltip: false,
            notify: function() {
              if (this._sgNode) {
                false;
                this._updateSgNodeString();
              }
            }
          },
          horizontalAlign: {
            default: HorizontalAlign.LEFT,
            type: HorizontalAlign,
            tooltip: false,
            notify: function() {
              this._sgNode && this._sgNode.setHorizontalAlign(this.horizontalAlign);
            },
            animatable: false
          },
          verticalAlign: {
            default: VerticalAlign.TOP,
            type: VerticalAlign,
            tooltip: false,
            notify: function() {
              this._sgNode && this._sgNode.setVerticalAlign(this.verticalAlign);
            },
            animatable: false
          },
          _actualFontSize: {
            default: 40
          },
          actualFontSize: {
            displayName: "Actual Font Size",
            animatable: false,
            readonly: true,
            get: function() {
              this._sgNode && (this._actualFontSize = this._sgNode.getFontSize());
              return this._actualFontSize;
            }
          },
          _fontSize: 40,
          fontSize: {
            get: function() {
              return this._fontSize;
            },
            set: function(value) {
              this._fontSize = value;
              false;
              this._updateSgNodeFontSize();
            },
            tooltip: false
          },
          fontFamily: {
            default: "Arial",
            tooltip: false,
            notify: function() {
              this._sgNode && this._sgNode.setFontFamily(this.fontFamily);
            },
            animatable: false
          },
          _lineHeight: 40,
          lineHeight: {
            get: function() {
              this._sgNode && (this._lineHeight = this._sgNode.getLineHeight());
              return this._lineHeight;
            },
            set: function(value) {
              this._lineHeight = value;
              if (this._sgNode) {
                this._sgNode.setLineHeight(value);
                this._updateNodeSize();
              }
            },
            tooltip: false
          },
          overflow: {
            default: Overflow.NONE,
            type: Overflow,
            tooltip: false,
            notify: function() {
              if (this._sgNode) {
                this._sgNode.setOverflow(this.overflow);
                this._updateNodeSize();
              }
            },
            animatable: false
          },
          _enableWrapText: true,
          enableWrapText: {
            get: function() {
              this._sgNode && (this._enableWrapText = this._sgNode.isWrapTextEnabled());
              return this._enableWrapText;
            },
            set: function(value) {
              this._enableWrapText = value;
              this._sgNode && this._sgNode.enableWrapText(value);
            },
            animatable: false,
            tooltip: false
          },
          _N$file: null,
          font: {
            get: function() {
              return this._N$file;
            },
            set: function(value) {
              value || (this._isSystemFontUsed = true);
              false;
              this._N$file = value;
              this._bmFontOriginalSize = -1;
              value && this._isSystemFontUsed && (this._isSystemFontUsed = false);
              if (this._sgNode) {
                "string" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && cc.warnID(4e3);
                var font = this.font;
                if (font instanceof cc.BitmapFont) if (font.spriteFrame) {
                  false;
                  if (font.spriteFrame.textureLoaded()) this._sgNode.setFontAsset(font); else {
                    cc.warnID(4012, font.name);
                    this._sgNode.setFontFamily("");
                  }
                } else {
                  cc.warnID(4011, font.name);
                  this._sgNode.setFontFamily("");
                } else this._sgNode.setFontAsset(font);
              }
              value instanceof cc.BitmapFont && (this._bmFontOriginalSize = value.fontSize);
            },
            type: cc.Font,
            tooltip: false,
            animatable: false
          },
          _isSystemFontUsed: true,
          useSystemFont: {
            get: function() {
              return this._isSystemFontUsed;
            },
            set: function(value) {
              false;
              this._isSystemFontUsed = !!value;
              if (value) {
                this.font = null;
                this._sgNode && this._sgNode.setFontFamily(this.fontFamily);
              }
            },
            animatable: false,
            tooltip: false
          },
          _bmFontOriginalSize: {
            displayName: "BMFont Original Size",
            default: -1,
            serializable: false,
            readonly: true,
            visible: true,
            animatable: false
          },
          _spacingX: 0,
          spacingX: {
            get: function() {
              return this._spacingX;
            },
            set: function(value) {
              this._spacingX = value;
              if (this._sgNode) {
                this._sgNode.setSpacingX(this.spacingX);
                this._updateNodeSize();
              }
            }
          }
        },
        statics: {
          HorizontalAlign: HorizontalAlign,
          VerticalAlign: VerticalAlign,
          Overflow: Overflow
        },
        __preload: function() {
          this._super();
          false;
          this._updateNodeSize();
        },
        _createSgNode: function() {
          return null;
        },
        _initSgNode: function() {
          var font = this.font;
          "string" === (__typeofVal = typeof font, "object" === __typeofVal ? __realTypeOfObj(font) : __typeofVal) && cc.warnID(4e3);
          var sgNode;
          if (font instanceof cc.BitmapFont) if (font.spriteFrame) {
            true;
            if (font.spriteFrame.textureLoaded()) sgNode = this._sgNode = new _ccsg.Label(this.string, JSON.stringify(font._fntConfig), font.spriteFrame); else {
              cc.warnID(4012, font.name);
              sgNode = this._sgNode = new _ccsg.Label(this.string, null, null, this._fontSize);
            }
          } else {
            cc.warnID(4011, font.name);
            sgNode = this._sgNode = _ccsg.Label.pool.get(this.string);
          } else sgNode = this._sgNode = _ccsg.Label.pool.get(this.string, font, null, this._fontSize);
          true;
          sgNode.retain();
          font instanceof cc.BitmapFont && (this._bmFontOriginalSize = font.fontSize);
          sgNode.setVisible(false);
          sgNode.setHorizontalAlign(this.horizontalAlign);
          sgNode.setVerticalAlign(this.verticalAlign);
          sgNode.setFontSize(this._fontSize);
          this.useSystemFont && sgNode.setFontFamily(this.fontFamily);
          sgNode.setOverflow(this.overflow);
          sgNode.enableWrapText(this._enableWrapText);
          sgNode.setLineHeight(this._lineHeight);
          sgNode.setString(this.string);
          font instanceof cc.BitmapFont && sgNode.setSpacingX(this.spacingX);
          false;
          false;
          sgNode.setContentSize(this.node.getContentSize());
          sgNode.setColor(this.node.color);
        },
        _updateNodeSize: function() {
          var initialized = this._sgNode && this._sgNode.parent;
          initialized && (this.overflow !== Overflow.NONE && this.overflow !== Overflow.RESIZE_HEIGHT || this.node.setContentSize(this._sgNode.getContentSize()));
        },
        onDestroy: function() {
          var sgNodeBeforeDestroy = this._sgNode;
          this._super();
          if (sgNodeBeforeDestroy) {
            sgNodeBeforeDestroy.removeFromParent(true);
            _ccsg.Label.pool.put(sgNodeBeforeDestroy);
          }
        }
      });
      cc.Label = module.exports = Label;
    }), {
      "../label/CCSGLabel": 1,
      "../label/CCSGLabelCanvasRenderCmd": 1,
      "../label/CCSGLabelWebGLRenderCmd": 1
    } ],
    43: [ (function(require, module, exports) {
      var LabelOutline = cc.Class({
        name: "cc.LabelOutline",
        extends: require("./CCComponent"),
        editor: false,
        ctor: function() {
          this._labelSGNode = null;
        },
        properties: {
          _color: cc.color(255, 255, 255, 255),
          _width: 1,
          color: {
            get: function() {
              return this._color;
            },
            set: function(value) {
              this._color = cc.color(value);
              this._labelSGNode && this._labelSGNode.setOutlineColor(cc.color(this._color));
            }
          },
          width: {
            get: function() {
              return this._width;
            },
            set: function(value) {
              this._width = value;
              if (this._labelSGNode) {
                this._labelSGNode.setOutlineWidth(value);
                this._labelSGNode.setMargin(value);
              }
            }
          }
        },
        onEnable: function() {
          var label = this.node.getComponent("cc.Label");
          var sgNode = this._labelSGNode = label && label._sgNode;
          if (this._labelSGNode) {
            sgNode.setOutlined(true);
            sgNode.setOutlineColor(cc.color(this._color));
            sgNode.setOutlineWidth(this._width);
            sgNode.setMargin(this._width);
          }
        },
        onDisable: function() {
          if (this._labelSGNode) {
            this._labelSGNode.setOutlined(false);
            this._labelSGNode.setMargin(0);
          }
          this._labelSGNode = null;
        }
      });
      cc.LabelOutline = module.exports = LabelOutline;
    }), {
      "./CCComponent": 39
    } ],
    44: [ (function(require, module, exports) {
      var Type = cc.Enum({
        NONE: 0,
        HORIZONTAL: 1,
        VERTICAL: 2,
        GRID: 3
      });
      var ResizeMode = cc.Enum({
        NONE: 0,
        CONTAINER: 1,
        CHILDREN: 2
      });
      var AxisDirection = cc.Enum({
        HORIZONTAL: 0,
        VERTICAL: 1
      });
      var VerticalDirection = cc.Enum({
        BOTTOM_TO_TOP: 0,
        TOP_TO_BOTTOM: 1
      });
      var HorizontalDirection = cc.Enum({
        LEFT_TO_RIGHT: 0,
        RIGHT_TO_LEFT: 1
      });
      var Layout = cc.Class({
        name: "cc.Layout",
        extends: require("./CCComponent"),
        editor: false,
        properties: {
          _layoutSize: cc.size(300, 200),
          _layoutDirty: {
            default: true,
            serializable: false
          },
          _resize: ResizeMode.NONE,
          _N$layoutType: Type.NONE,
          type: {
            type: Type,
            get: function() {
              return this._N$layoutType;
            },
            set: function(value) {
              this._N$layoutType = value;
              var reLayouted;
              false;
              this._doLayoutDirty();
            },
            tooltip: false,
            animatable: false
          },
          resizeMode: {
            type: ResizeMode,
            tooltip: false,
            animatable: false,
            get: function() {
              return this._resize;
            },
            set: function(value) {
              if (this.type === Type.NONE && value === ResizeMode.CHILDREN) return;
              this._resize = value;
              var reLayouted;
              false;
              this._doLayoutDirty();
            }
          },
          cellSize: {
            default: cc.size(40, 40),
            tooltip: false,
            type: cc.Size,
            notify: function() {
              this._doLayoutDirty();
            }
          },
          startAxis: {
            default: AxisDirection.HORIZONTAL,
            tooltip: false,
            type: AxisDirection,
            notify: function() {
              var reLayouted;
              false;
              this._doLayoutDirty();
            },
            animatable: false
          },
          _N$padding: {
            default: 0
          },
          paddingLeft: {
            default: 0,
            tooltip: false,
            notify: function() {
              this._doLayoutDirty();
            }
          },
          paddingRight: {
            default: 0,
            tooltip: false,
            notify: function() {
              this._doLayoutDirty();
            }
          },
          paddingTop: {
            default: 0,
            tooltip: false,
            notify: function() {
              this._doLayoutDirty();
            }
          },
          paddingBottom: {
            default: 0,
            tooltip: false,
            notify: function() {
              this._doLayoutDirty();
            }
          },
          spacingX: {
            default: 0,
            notify: function() {
              this._doLayoutDirty();
            },
            tooltip: false
          },
          spacingY: {
            default: 0,
            notify: function() {
              this._doLayoutDirty();
            },
            tooltip: false
          },
          verticalDirection: {
            default: VerticalDirection.TOP_TO_BOTTOM,
            type: VerticalDirection,
            notify: function() {
              this._doLayoutDirty();
            },
            tooltip: false,
            animatable: false
          },
          horizontalDirection: {
            default: HorizontalDirection.LEFT_TO_RIGHT,
            type: HorizontalDirection,
            notify: function() {
              this._doLayoutDirty();
            },
            tooltip: false,
            animatable: false
          }
        },
        statics: {
          Type: Type,
          VerticalDirection: VerticalDirection,
          HorizontalDirection: HorizontalDirection,
          ResizeMode: ResizeMode,
          AxisDirection: AxisDirection
        },
        _migratePaddingData: function() {
          this.paddingLeft = this._N$padding;
          this.paddingRight = this._N$padding;
          this.paddingTop = this._N$padding;
          this.paddingBottom = this._N$padding;
          this._N$padding = 0;
        },
        onEnable: function() {
          this._addEventListeners();
          cc.sizeEqualToSize(this.node.getContentSize(), cc.size(0, 0)) && this.node.setContentSize(this._layoutSize);
          0 !== this._N$padding && this._migratePaddingData();
          this._doLayoutDirty();
        },
        onDisable: function() {
          this._removeEventListeners();
        },
        _doLayoutDirty: function() {
          this._layoutDirty = true;
        },
        _addEventListeners: function() {
          cc.director.on(cc.Director.EVENT_BEFORE_VISIT, this.updateLayout, this);
          this.node.on("size-changed", this._resized, this);
          this.node.on("anchor-changed", this._doLayoutDirty, this);
          this.node.on("child-added", this._childAdded, this);
          this.node.on("child-removed", this._childRemoved, this);
          this.node.on("child-reorder", this._doLayoutDirty, this);
          this._addChildrenEventListeners();
        },
        _removeEventListeners: function() {
          cc.director.off(cc.Director.EVENT_BEFORE_VISIT, this.updateLayout, this);
          this.node.off("size-changed", this._resized, this);
          this.node.off("anchor-changed", this._doLayoutDirty, this);
          this.node.off("child-added", this._childAdded, this);
          this.node.off("child-removed", this._childRemoved, this);
          this.node.off("child-reorder", this._doLayoutDirty, this);
          this._removeChildrenEventListeners();
        },
        _addChildrenEventListeners: function() {
          var children = this.node.children;
          children.forEach(function(child) {
            child.on("size-changed", this._doLayoutDirty, this);
            child.on("position-changed", this._doLayoutDirty, this);
            child.on("anchor-changed", this._doLayoutDirty, this);
            child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
          }.bind(this));
        },
        _removeChildrenEventListeners: function() {
          var children = this.node.children;
          children.forEach(function(child) {
            child.off("size-changed", this._doLayoutDirty, this);
            child.off("position-changed", this._doLayoutDirty, this);
            child.off("anchor-changed", this._doLayoutDirty, this);
            child.off("active-in-hierarchy-changed", this._doLayoutDirty, this);
          }.bind(this));
        },
        _childAdded: function(event) {
          var child = event.detail;
          child.on("size-changed", this._doLayoutDirty, this);
          child.on("position-changed", this._doLayoutDirty, this);
          child.on("anchor-changed", this._doLayoutDirty, this);
          child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
          this._doLayoutDirty();
        },
        _childRemoved: function(event) {
          var child = event.detail;
          child.off("size-changed", this._doLayoutDirty, this);
          child.off("position-changed", this._doLayoutDirty, this);
          child.off("anchor-changed", this._doLayoutDirty, this);
          child.off("active-in-hierarchy-changed", this._doLayoutDirty, this);
          this._doLayoutDirty();
        },
        _resized: function() {
          this._layoutSize = this.node.getContentSize();
          this._doLayoutDirty();
        },
        _doLayoutHorizontally: function(baseWidth, rowBreak, fnPositionY, applyChildren) {
          var layoutAnchor = this.node.getAnchorPoint();
          var children = this.node.children;
          var sign = 1;
          var paddingX = this.paddingLeft;
          var leftBoundaryOfLayout = -layoutAnchor.x * baseWidth;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            sign = -1;
            leftBoundaryOfLayout = (1 - layoutAnchor.x) * baseWidth;
            paddingX = this.paddingRight;
          }
          var nextX = leftBoundaryOfLayout + sign * paddingX - sign * this.spacingX;
          var rowMaxHeight = 0;
          var tempMaxHeight = 0;
          var secondMaxHeight = 0;
          var row = 0;
          var containerResizeBoundary = 0;
          var maxHeightChildAnchorY = 0;
          var newChildWidth = this.cellSize.width;
          this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildWidth = (baseWidth - (this.paddingLeft + this.paddingRight) - (children.length - 1) * this.spacingX) / children.length);
          children.forEach(function(child) {
            if (!child.activeInHierarchy) return;
            if (this._resize === ResizeMode.CHILDREN) {
              child.width = newChildWidth;
              this.type === Type.GRID && (child.height = this.cellSize.height);
            }
            var anchorX = child.anchorX;
            secondMaxHeight > tempMaxHeight && (tempMaxHeight = secondMaxHeight);
            if (child.height >= tempMaxHeight) {
              secondMaxHeight = tempMaxHeight;
              tempMaxHeight = child.height;
              maxHeightChildAnchorY = child.getAnchorPoint().y;
            }
            this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && (anchorX = 1 - child.anchorX);
            nextX = nextX + sign * anchorX * child.width + sign * this.spacingX;
            var rightBoundaryOfChild = sign * (1 - anchorX) * child.width;
            if (rowBreak) {
              var rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this.paddingRight : this.paddingLeft);
              var leftToRightRowBreak = this.horizontalDirection === HorizontalDirection.LEFT_TO_RIGHT && rowBreakBoundary > (1 - layoutAnchor.x) * baseWidth;
              var rightToLeftRowBreak = this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && rowBreakBoundary < -layoutAnchor.x * baseWidth;
              if (leftToRightRowBreak || rightToLeftRowBreak) {
                if (child.height >= tempMaxHeight) {
                  0 === secondMaxHeight && (secondMaxHeight = tempMaxHeight);
                  rowMaxHeight += secondMaxHeight;
                  secondMaxHeight = tempMaxHeight;
                } else {
                  rowMaxHeight += tempMaxHeight;
                  secondMaxHeight = child.height;
                  tempMaxHeight = 0;
                }
                nextX = leftBoundaryOfLayout + sign * (paddingX + anchorX * child.width);
                row++;
              }
            }
            var finalPositionY = fnPositionY(child, rowMaxHeight, row);
            baseWidth >= child.width + this.paddingLeft + this.paddingRight && applyChildren && child.setPosition(cc.p(nextX, finalPositionY));
            var signX = 1;
            var tempFinalPositionY;
            var topMarign = 0 === tempMaxHeight ? child.height : tempMaxHeight;
            if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
              containerResizeBoundary = containerResizeBoundary || this.node._contentSize.height;
              signX = -1;
              tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingBottom);
              tempFinalPositionY < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
            } else {
              containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.height;
              tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingTop);
              tempFinalPositionY > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
            }
            nextX += rightBoundaryOfChild;
          }.bind(this));
          return containerResizeBoundary;
        },
        _getVerticalBaseHeight: function(children) {
          var newHeight = 0;
          var activeChildCount = 0;
          if (this.resizeMode === ResizeMode.CONTAINER) {
            children.forEach((function(child) {
              if (!child.activeInHierarchy) return;
              activeChildCount++;
              newHeight += child.height;
            }));
            newHeight += (activeChildCount - 1) * this.spacingY + this.paddingBottom + this.paddingTop;
          } else newHeight = this.node.getContentSize().height;
          return newHeight;
        },
        _doLayoutVertically: function(baseHeight, columnBreak, fnPositionX, applyChildren) {
          var layoutAnchor = this.node.getAnchorPoint();
          var children = this.node.children;
          var sign = 1;
          var paddingY = this.paddingBottom;
          var bottomBoundaryOfLayout = -layoutAnchor.y * baseHeight;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            sign = -1;
            bottomBoundaryOfLayout = (1 - layoutAnchor.y) * baseHeight;
            paddingY = this.paddingTop;
          }
          var nextY = bottomBoundaryOfLayout + sign * paddingY - sign * this.spacingY;
          var columnMaxWidth = 0;
          var tempMaxWidth = 0;
          var secondMaxWidth = 0;
          var column = 0;
          var containerResizeBoundary = 0;
          var maxWidthChildAnchorX = 0;
          var newChildHeight = this.cellSize.height;
          this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildHeight = (baseHeight - (this.paddingTop + this.paddingBottom) - (children.length - 1) * this.spacingY) / children.length);
          children.forEach(function(child) {
            if (!child.activeInHierarchy) return;
            if (this.resizeMode === ResizeMode.CHILDREN) {
              child.height = newChildHeight;
              this.type === Type.GRID && (child.width = this.cellSize.width);
            }
            var anchorY = child.anchorY;
            secondMaxWidth > tempMaxWidth && (tempMaxWidth = secondMaxWidth);
            if (child.width >= tempMaxWidth) {
              secondMaxWidth = tempMaxWidth;
              tempMaxWidth = child.width;
              maxWidthChildAnchorX = child.getAnchorPoint().x;
            }
            this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && (anchorY = 1 - child.anchorY);
            nextY = nextY + sign * anchorY * child.height + sign * this.spacingY;
            var topBoundaryOfChild = sign * (1 - anchorY) * child.height;
            if (columnBreak) {
              var columnBreakBoundary = nextY + topBoundaryOfChild + sign * (sign > 0 ? this.paddingTop : this.paddingBottom);
              var bottomToTopColumnBreak = this.verticalDirection === VerticalDirection.BOTTOM_TO_TOP && columnBreakBoundary > (1 - layoutAnchor.y) * baseHeight;
              var topToBottomColumnBreak = this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && columnBreakBoundary < -layoutAnchor.y * baseHeight;
              if (bottomToTopColumnBreak || topToBottomColumnBreak) {
                if (child.width >= tempMaxWidth) {
                  0 === secondMaxWidth && (secondMaxWidth = tempMaxWidth);
                  columnMaxWidth += secondMaxWidth;
                  secondMaxWidth = tempMaxWidth;
                } else {
                  columnMaxWidth += tempMaxWidth;
                  secondMaxWidth = child.width;
                  tempMaxWidth = 0;
                }
                nextY = bottomBoundaryOfLayout + sign * (paddingY + anchorY * child.height);
                column++;
              }
            }
            var finalPositionX = fnPositionX(child, columnMaxWidth, column);
            baseHeight >= child.height + (this.paddingTop + this.paddingBottom) && applyChildren && child.setPosition(cc.p(finalPositionX, nextY));
            var signX = 1;
            var tempFinalPositionX;
            var rightMarign = 0 === tempMaxWidth ? child.width : tempMaxWidth;
            if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
              signX = -1;
              containerResizeBoundary = containerResizeBoundary || this.node._contentSize.width;
              tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingLeft);
              tempFinalPositionX < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
            } else {
              containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.width;
              tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingRight);
              tempFinalPositionX > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
            }
            nextY += topBoundaryOfChild;
          }.bind(this));
          return containerResizeBoundary;
        },
        _doLayoutBasic: function() {
          var children = this.node.children;
          var allChildrenBoundingBox = null;
          children.forEach((function(child) {
            if (!child.activeInHierarchy) return;
            allChildrenBoundingBox = allChildrenBoundingBox ? cc.rectUnion(allChildrenBoundingBox, child.getBoundingBoxToWorld()) : child.getBoundingBoxToWorld();
          }));
          if (allChildrenBoundingBox) {
            var leftBottomInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x, allChildrenBoundingBox.y));
            leftBottomInParentSpace = cc.pAdd(leftBottomInParentSpace, cc.p(-this.paddingLeft, -this.paddingBottom));
            var rightTopInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x + allChildrenBoundingBox.width, allChildrenBoundingBox.y + allChildrenBoundingBox.height));
            rightTopInParentSpace = cc.pAdd(rightTopInParentSpace, cc.p(this.paddingRight, this.paddingTop));
            var newSize = cc.size(parseFloat((rightTopInParentSpace.x - leftBottomInParentSpace.x).toFixed(2)), parseFloat((rightTopInParentSpace.y - leftBottomInParentSpace.y).toFixed(2)));
            var layoutPosition = this.node.getPosition();
            var newAnchorX = (layoutPosition.x - leftBottomInParentSpace.x) / newSize.width;
            var newAnchorY = (layoutPosition.y - leftBottomInParentSpace.y) / newSize.height;
            var newAnchor = cc.p(parseFloat(newAnchorX.toFixed(2)), parseFloat(newAnchorY.toFixed(2)));
            this.node.setAnchorPoint(newAnchor);
            this.node.setContentSize(newSize);
          }
        },
        _doLayoutGridAxisHorizontal: function(layoutAnchor, layoutSize) {
          var baseWidth = layoutSize.width;
          var sign = 1;
          var bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
          var paddingY = this.paddingBottom;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            sign = -1;
            bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
            paddingY = this.paddingTop;
          }
          var fnPositionY = function(child, topOffset, row) {
            return bottomBoundaryOfLayout + sign * (topOffset + child.anchorY * child.height + paddingY + row * this.spacingY);
          }.bind(this);
          var newHeight = 0;
          if (this.resizeMode === ResizeMode.CONTAINER) {
            var boundary = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);
            newHeight = bottomBoundaryOfLayout - boundary;
            newHeight < 0 && (newHeight *= -1);
            bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;
            if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
              sign = -1;
              bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
            }
          }
          this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);
          this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(baseWidth, newHeight);
        },
        _doLayoutGridAxisVertical: function(layoutAnchor, layoutSize) {
          var baseHeight = layoutSize.height;
          var sign = 1;
          var leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
          var paddingX = this.paddingLeft;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            sign = -1;
            leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
            paddingX = this.paddingRight;
          }
          var fnPositionX = function(child, leftOffset, column) {
            return leftBoundaryOfLayout + sign * (leftOffset + child.anchorX * child.width + paddingX + column * this.spacingX);
          }.bind(this);
          var newWidth = 0;
          if (this.resizeMode === ResizeMode.CONTAINER) {
            var boundary = this._doLayoutVertically(baseHeight, true, fnPositionX, false);
            newWidth = leftBoundaryOfLayout - boundary;
            newWidth < 0 && (newWidth *= -1);
            leftBoundaryOfLayout = -layoutAnchor.x * newWidth;
            if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
              sign = -1;
              leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
            }
          }
          this._doLayoutVertically(baseHeight, true, fnPositionX, true);
          this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(newWidth, baseHeight);
        },
        _doLayoutGrid: function() {
          var layoutAnchor = this.node.getAnchorPoint();
          var layoutSize = this.node.getContentSize();
          this.startAxis === AxisDirection.HORIZONTAL ? this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) : this.startAxis === AxisDirection.VERTICAL && this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
        },
        _getHorizontalBaseWidth: function(children) {
          var newWidth = 0;
          var activeChildCount = 0;
          if (this.resizeMode === ResizeMode.CONTAINER) {
            children.forEach((function(child) {
              if (!child.activeInHierarchy) return;
              activeChildCount++;
              newWidth += child.width;
            }));
            newWidth += (activeChildCount - 1) * this.spacingX + this.paddingLeft + this.paddingRight;
          } else newWidth = this.node.getContentSize().width;
          return newWidth;
        },
        _doLayout: function() {
          if (this.type === Type.HORIZONTAL) {
            var newWidth = this._getHorizontalBaseWidth(this.node.children);
            var fnPositionY = function(child) {
              return child.y;
            };
            this._doLayoutHorizontally(newWidth, false, fnPositionY, true);
            this.node.width = newWidth;
          } else if (this.type === Type.VERTICAL) {
            var newHeight = this._getVerticalBaseHeight(this.node.children);
            var fnPositionX = function(child) {
              return child.x;
            };
            this._doLayoutVertically(newHeight, false, fnPositionX, true);
            this.node.height = newHeight;
          } else this.type === Type.NONE ? this.resizeMode === ResizeMode.CONTAINER && this._doLayoutBasic() : this.type === Type.GRID && this._doLayoutGrid();
        },
        updateLayout: function() {
          if (this._layoutDirty && this.node.children.length > 0) {
            this._doLayout();
            this._layoutDirty = false;
          }
        }
      });
      Object.defineProperty(Layout.prototype, "padding", {
        get: function() {
          cc.warnID(4100);
          return this.paddingLeft;
        },
        set: function(value) {
          this._N$padding = value;
          this._migratePaddingData();
          this._doLayoutDirty();
        }
      });
      cc.Layout = module.exports = Layout;
    }), {
      "./CCComponent": 39
    } ],
    45: [ (function(require, module, exports) {
      require("../../clipping-nodes/CCClippingNode");
      require("../../clipping-nodes/CCClippingNodeCanvasRenderCmd");
      require("../../clipping-nodes/CCClippingNodeWebGLRenderCmd");
      require("../../shape-nodes/CCDrawNode");
      var Base = cc._RendererInSG;
      var MaskType = cc.Enum({
        RECT: 0,
        ELLIPSE: 1,
        IMAGE_STENCIL: 2
      });
      var SEGEMENTS_MIN = 3;
      var SEGEMENTS_MAX = 1e4;
      var Mask = cc.Class({
        name: "cc.Mask",
        extends: Base,
        editor: false,
        properties: {
          _clippingStencil: {
            default: null,
            serializable: false
          },
          _type: MaskType.RECT,
          type: {
            get: function() {
              return this._type;
            },
            set: function(value) {
              this._type = value;
              this._refreshStencil();
            },
            type: MaskType,
            tooltip: false
          },
          spriteFrame: {
            default: null,
            type: cc.SpriteFrame,
            tooltip: false,
            notify: function() {
              this._refreshStencil();
            }
          },
          alphaThreshold: {
            default: 1,
            type: cc.Float,
            range: [ 0, 1, .1 ],
            slide: true,
            tooltip: false,
            notify: function() {
              if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                cc.warnID(4201);
                return;
              }
              this._sgNode.setAlphaThreshold(this.alphaThreshold);
            }
          },
          inverted: {
            default: false,
            type: cc.Boolean,
            tooltip: false,
            notify: function() {
              if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                cc.warnID(4202);
                return;
              }
              this._sgNode.setInverted(this.inverted);
            }
          },
          _segements: 64,
          segements: {
            get: function() {
              return this._segements;
            },
            set: function(value) {
              this._segements = cc.clampf(value, SEGEMENTS_MIN, SEGEMENTS_MAX);
              this._refreshStencil();
            },
            tooltip: false
          },
          _resizeToTarget: {
            animatable: false,
            set: function(value) {
              value && this._resizeNodeToTargetNode();
            }
          }
        },
        statics: {
          Type: MaskType
        },
        _resizeNodeToTargetNode: false,
        _initSgNode: function() {},
        _createSgNode: function() {
          return new cc.ClippingNode();
        },
        _hitTest: function(point) {
          var size = this.node.getContentSize(), w = size.width, h = size.height, trans = this.node.getNodeToWorldTransform();
          if (this.type === MaskType.RECT || this.type === MaskType.IMAGE_STENCIL) {
            var rect = cc.rect(0, 0, w, h);
            cc._rectApplyAffineTransformIn(rect, trans);
            var left = point.x - rect.x, right = rect.x + rect.width - point.x, bottom = point.y - rect.y, top = rect.y + rect.height - point.y;
            return left >= 0 && right >= 0 && top >= 0 && bottom >= 0;
          }
          if (this.type === MaskType.ELLIPSE) {
            var a = w / 2, b = h / 2;
            var cx = trans.a * a + trans.c * b + trans.tx;
            var cy = trans.b * a + trans.d * b + trans.ty;
            var px = point.x - cx, py = point.y - cy;
            return px * px / (a * a) + py * py / (b * b) < 1;
          }
        },
        onEnable: function() {
          this._super();
          this.spriteFrame && this.spriteFrame.ensureLoadTexture();
          this._refreshStencil();
          this.node.on("size-changed", this._refreshStencil, this);
          this.node.on("anchor-changed", this._refreshStencil, this);
        },
        onDisable: function() {
          this._super();
          this.node.off("size-changed", this._refreshStencil, this);
          this.node.off("anchor-changed", this._refreshStencil, this);
        },
        _calculateCircle: function(center, radius, segements) {
          var polies = [];
          var anglePerStep = 2 * Math.PI / segements;
          for (var step = 0; step < segements; ++step) polies.push(cc.v2(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y));
          return polies;
        },
        _refreshStencil: function() {
          if (this.type === MaskType.IMAGE_STENCIL && cc._renderType !== cc.game.RENDER_TYPE_WEBGL && false) {
            cc.warnID(4200);
            return;
          }
          var contentSize = this.node.getContentSize();
          var anchorPoint = this.node.getAnchorPoint();
          var stencil = this._clippingStencil;
          if (this._type === MaskType.IMAGE_STENCIL) {
            var isSgSprite = stencil instanceof cc.Scale9Sprite;
            if (!isSgSprite || stencil._spriteFrame !== this.spriteFrame) {
              stencil = new cc.Scale9Sprite();
              stencil.setSpriteFrame(this.spriteFrame);
              this._sgNode.setStencil(stencil);
            }
            stencil.setContentSize(contentSize);
            stencil.setAnchorPoint(anchorPoint);
            this._sgNode.setAlphaThreshold(this.alphaThreshold);
          } else {
            var isDrawNode = stencil instanceof cc.DrawNode;
            if (!isDrawNode) {
              stencil = new cc.DrawNode();
              true;
              stencil.retain();
              this._sgNode.setStencil(stencil);
            }
            var width = contentSize.width;
            var height = contentSize.height;
            var x = -width * anchorPoint.x;
            var y = -height * anchorPoint.y;
            var color = cc.color(255, 255, 255, 0);
            stencil.clear();
            if (this._type === MaskType.RECT) {
              var rectangle = [ cc.v2(x, y), cc.v2(x + width, y), cc.v2(x + width, y + height), cc.v2(x, y + height) ];
              stencil.drawPoly(rectangle, color, 0, color);
            } else if (this._type === MaskType.ELLIPSE) {
              var center = cc.v2(x + width / 2, y + height / 2);
              var radius = {
                x: width / 2,
                y: height / 2
              };
              stencil.drawPoly(this._calculateCircle(center, radius, this._segements), color, 0, color);
            }
          }
          this._sgNode.setInverted(this.inverted);
          this._clippingStencil = stencil;
          false;
        }
      });
      true;
      Mask.prototype.__superOnDestroy = Base.prototype.onDestroy;
      Mask.prototype.onDestroy = function() {
        this.__superOnDestroy();
        if (this._clippingStencil) {
          this._clippingStencil.release();
          this._clippingStencil = null;
        }
      };
      cc.Mask = module.exports = Mask;
    }), {
      "../../clipping-nodes/CCClippingNode": 1,
      "../../clipping-nodes/CCClippingNodeCanvasRenderCmd": 1,
      "../../clipping-nodes/CCClippingNodeWebGLRenderCmd": 1,
      "../../shape-nodes/CCDrawNode": 1
    } ],
    46: [ (function(require, module, exports) {
      var RendererInSG = cc.Class({
        extends: require("./CCSGComponent"),
        name: "cc._RendererInSG",
        ctor: function() {
          var sgNode = this._sgNode = this._createSgNode();
          sgNode.setVisible(false);
          false;
          true;
          sgNode.retain();
          this._plainNode = new _ccsg.Node();
          true;
          this._plainNode.retain();
        },
        __preload: function() {
          this._initSgNode();
          var sgSize;
          false;
        },
        onEnable: function() {
          if ((true, cc.director._actionManager) && cc.director._actionManager.getNumberOfRunningActionsInTarget(this.node) > 0) {
            cc.errorID(1629, this.node.name);
            cc.errorID(1630);
            cc.errorID(1631);
          }
          this._replaceSgNode(this._sgNode);
        },
        onDisable: function() {
          this._replaceSgNode(this._plainNode);
        },
        onDestroy: function() {
          this._removeSgNode();
          true;
          var releasedByNode = this.node._sgNode;
          if (this._plainNode !== releasedByNode) {
            this._plainNode.release();
            this._plainNode = null;
          }
        },
        _replaceSgNode: function(sgNode) {
          false;
          var node = this.node;
          var replaced = node._sgNode;
          replaced._entity = null;
          false;
          var children = replaced.getChildren().slice();
          replaced.removeAllChildren(false);
          if (sgNode.getChildrenCount() > 0) {
            false;
            sgNode.removeAllChildren(false);
          }
          for (var i = 0, len = children.length; i < len; ++i) sgNode.addChild(children[i]);
          var parentNode = replaced.getParent();
          if (parentNode) {
            false;
            if (cc.runtime) {
              parentNode.removeChild(replaced, false);
              parentNode.addChild(sgNode);
              sgNode.arrivalOrder = replaced.arrivalOrder;
            } else {
              parentNode.insertChildBefore(sgNode, replaced);
              parentNode.removeChild(replaced, false);
            }
          }
          node._sgNode = sgNode;
          node._sgNode._entity = node;
          node._updateSgNode();
        }
      });
      cc._RendererInSG = module.exports = RendererInSG;
    }), {
      "./CCSGComponent": 49
    } ],
    47: [ (function(require, module, exports) {
      var RendererUnderSG = cc.Class({
        extends: require("./CCSGComponent"),
        name: "cc._RendererUnderSG",
        ctor: function() {
          var sgNode = this._sgNode = this._createSgNode();
          if (sgNode) {
            true;
            sgNode.retain();
            sgNode.setVisible(false);
          }
        },
        __preload: function() {
          this._initSgNode();
          this._registSizeProvider();
          this._appendSgNode(this._sgNode);
        },
        onEnable: function() {
          this._sgNode && this._sgNode.setVisible(true);
        },
        onDisable: function() {
          this._sgNode && this._sgNode.setVisible(false);
        },
        onDestroy: function() {
          this.node._sizeProvider === this._sgNode && (this.node._sizeProvider = null);
          this._removeSgNode();
        },
        _appendSgNode: function(sgNode) {
          if (!sgNode) return;
          var node = this.node;
          sgNode.setColor(node._color);
          node._cascadeOpacityEnabled || sgNode.setOpacity(node._opacity);
          sgNode.setAnchorPoint(node._anchorPoint);
          sgNode.setOpacityModifyRGB(node._opacityModifyRGB);
          sgNode.setLocalZOrder(-1);
          var sgParent = node._sgNode;
          sgParent.addChild(sgNode);
        }
      });
      cc._RendererUnderSG = module.exports = RendererUnderSG;
    }), {
      "./CCSGComponent": 49
    } ],
    48: [ (function(require, module, exports) {
      require("../label/CCHtmlTextParser");
      require("../label/CCTextUtils");
      var HorizontalAlign = cc.TextAlignment;
      var VerticalAlign = cc.VerticalTextAlignment;
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this;
          var later = function() {
            timeout = null;
            immediate || func.apply(context, arguments);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          callNow && func.apply(context, arguments);
        };
      }
      var RichText = cc.Class({
        name: "cc.RichText",
        extends: cc._RendererUnderSG,
        ctor: function() {
          this._textArray = null;
          this._labelSegments = [];
          this._labelSegmentsCache = [];
          this._linesWidth = [];
          this._resetState();
          false;
          this._updateRichTextStatus = this._updateRichText;
        },
        editor: false,
        properties: {
          string: {
            default: "<color=#00ff00>Rich</c><color=#0fffff>Text</color>",
            multiline: true,
            tooltip: false,
            notify: function() {
              this._updateRichTextStatus();
            }
          },
          horizontalAlign: {
            default: HorizontalAlign.LEFT,
            type: HorizontalAlign,
            tooltip: false,
            animatable: false,
            notify: function(oldValue) {
              if (this.horizontalAlign === oldValue) return;
              this._layoutDirty = true;
              this._updateRichTextStatus();
            }
          },
          fontSize: {
            default: 40,
            tooltip: false,
            notify: function(oldValue) {
              if (this.fontSize === oldValue) return;
              this._layoutDirty = true;
              this._updateRichTextStatus();
            }
          },
          font: {
            default: null,
            type: cc.TTFFont,
            tooltip: false,
            notify: function(oldValue) {
              if (this.font === oldValue) return;
              this._layoutDirty = true;
              false;
              this._updateRichTextStatus();
            }
          },
          maxWidth: {
            default: 0,
            tooltip: false,
            notify: function(oldValue) {
              if (this.maxWidth === oldValue) return;
              this._layoutDirty = true;
              this._updateRichTextStatus();
            }
          },
          lineHeight: {
            default: 40,
            tooltip: false,
            notify: function(oldValue) {
              if (this.lineHeight === oldValue) return;
              this._layoutDirty = true;
              this._updateRichTextStatus();
            }
          },
          imageAtlas: {
            default: null,
            type: cc.SpriteAtlas,
            tooltip: false,
            notify: function(oldValue) {
              if (this.imageAtlas === oldValue) return;
              this._layoutDirty = true;
              this._updateRichTextStatus();
            }
          },
          handleTouchEvent: {
            default: true,
            tooltip: false,
            notify: function(oldValue) {
              if (this.handleTouchEvent === oldValue) return;
              this.enabledInHierarchy && (this.handleTouchEvent ? this._addEventListeners() : this._removeEventListeners());
            }
          }
        },
        statics: {
          HorizontalAlign: HorizontalAlign,
          VerticalAlign: VerticalAlign
        },
        onEnable: function() {
          this._super();
          this.handleTouchEvent && this._addEventListeners();
        },
        onDisable: function() {
          this._super();
          this.handleTouchEvent && this._removeEventListeners();
        },
        _addEventListeners: function() {
          this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        },
        _removeEventListeners: function() {
          this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        },
        _createSgNode: function() {
          var sgNode = new _ccsg.Node();
          sgNode.setCascadeOpacityEnabled(true);
          var self = this;
          sgNode.setColor = function() {
            self._updateLabelSegmentTextAttributes();
          };
          sgNode._setContentSize = sgNode.setContentSize;
          sgNode.setContentSize = function() {};
          return sgNode;
        },
        _updateLabelSegmentTextAttributes: function() {
          this._labelSegments.forEach(function(item) {
            this._applyTextAttribute(item);
          }.bind(this));
        },
        _initSgNode: function() {
          this._updateRichText();
          false;
        },
        _createFontLabel: function(string) {
          return _ccsg.Label.pool.get(string, this.font, null, this.fontSize);
        },
        _getFontRawUrl: function() {
          var isAsset = this.font instanceof cc.TTFFont;
          var fntRawUrl = isAsset ? this.font.rawUrl : "";
          return fntRawUrl;
        },
        _onTTFLoaded: function() {
          var rawUrl = this._getFontRawUrl();
          if (!rawUrl) return;
          var self = this;
          var callback = function() {
            self._layoutDirty = true;
            self._updateRichText();
          };
          cc.CustomFontLoader.loadTTF(rawUrl, callback);
        },
        _measureText: function(styleIndex, string) {
          var self = this;
          var func = function(string) {
            var label;
            if (0 === self._labelSegmentsCache.length) {
              label = self._createFontLabel(string);
              self._labelSegmentsCache.push(label);
            } else {
              label = self._labelSegmentsCache[0];
              label.setString(string);
            }
            label._styleIndex = styleIndex;
            self._applyTextAttribute(label);
            var labelSize = label.getContentSize();
            return labelSize.width;
          };
          return string ? func(string) : func;
        },
        _onTouchEnded: function(event) {
          var components = this.node.getComponents(cc.Component);
          for (var i = 0; i < this._labelSegments.length; ++i) {
            var labelSegment = this._labelSegments[i];
            var clickHandler = labelSegment._clickHandler;
            if (clickHandler && this._containsTouchLocation(labelSegment, event.touch.getLocation())) {
              components.forEach((function(component) {
                component.enabledInHierarchy && component[clickHandler] && component[clickHandler](event);
              }));
              event.stopPropagation();
            }
          }
        },
        _containsTouchLocation: function(label, point) {
          var myRect = label.getBoundingBoxToWorld();
          return cc.rectContainsPoint(myRect, point);
        },
        _resetState: function() {
          var sgNode = this._sgNode;
          sgNode && sgNode.removeAllChildren();
          this._labelSegments.length = 0;
          this._labelSegmentsCache.length = 0;
          this._linesWidth.length = 0;
          this._lineOffsetX = 0;
          this._lineCount = 1;
          this._labelWidth = 0;
          this._labelHeight = 0;
          this._layoutDirty = true;
        },
        _addLabelSegment: function(stringToken, styleIndex) {
          var labelSegment;
          if (0 === this._labelSegmentsCache.length) labelSegment = this._createFontLabel(stringToken); else {
            labelSegment = this._labelSegmentsCache.pop();
            labelSegment.setString(stringToken);
          }
          labelSegment._styleIndex = styleIndex;
          labelSegment._lineCount = this._lineCount;
          this._applyTextAttribute(labelSegment);
          labelSegment.setAnchorPoint(0, 0);
          this._sgNode.addChild(labelSegment);
          this._labelSegments.push(labelSegment);
          true;
          labelSegment.setOverflow(1);
          var size = labelSegment.getContentSize();
          labelSegment.enableWrap(false);
          labelSegment.setDimensions(size.width, this.lineHeight);
          return labelSegment;
        },
        _updateRichTextWithMaxWidth: function(labelString, labelWidth, styleIndex) {
          var fragmentWidth = labelWidth;
          var labelSegment;
          if (this._lineOffsetX > 0 && fragmentWidth + this._lineOffsetX > this.maxWidth) {
            var checkStartIndex = 0;
            while (this._lineOffsetX <= this.maxWidth) {
              var checkEndIndex = this._getFirstWordLen(labelString, checkStartIndex, labelString.length);
              var checkString = labelString.substr(checkStartIndex, checkEndIndex);
              var checkStringWidth = this._measureText(styleIndex, checkString);
              if (!(this._lineOffsetX + checkStringWidth <= this.maxWidth)) {
                if (checkStartIndex > 0) {
                  var remainingString = labelString.substr(0, checkStartIndex);
                  this._addLabelSegment(remainingString, styleIndex);
                  labelString = labelString.substr(checkStartIndex, labelString.length);
                  fragmentWidth = this._measureText(styleIndex, labelString);
                }
                this._updateLineInfo();
                break;
              }
              this._lineOffsetX += checkStringWidth;
              checkStartIndex += checkEndIndex;
            }
          }
          if (fragmentWidth > this.maxWidth) {
            var fragments = cc.TextUtils.fragmentText(labelString, fragmentWidth, this.maxWidth, this._measureText(styleIndex));
            for (var k = 0; k < fragments.length; ++k) {
              var splitString = fragments[k];
              labelSegment = this._addLabelSegment(splitString, styleIndex);
              var labelSize = labelSegment.getContentSize();
              this._lineOffsetX += labelSize.width;
              fragments.length > 1 && k < fragments.length - 1 && this._updateLineInfo();
            }
          } else {
            this._lineOffsetX += fragmentWidth;
            this._addLabelSegment(labelString, styleIndex);
          }
        },
        _isLastComponentCR: function(stringToken) {
          return stringToken.length - 1 === stringToken.lastIndexOf("\n");
        },
        _updateLineInfo: function() {
          this._linesWidth.push(this._lineOffsetX);
          this._lineOffsetX = 0;
          this._lineCount++;
        },
        _needsUpdateTextLayout: function(newTextArray) {
          if (this._layoutDirty || !this._textArray || !newTextArray) return true;
          if (this._textArray.length !== newTextArray.length) return true;
          for (var i = 0; i < this._textArray.length; ++i) {
            var oldItem = this._textArray[i];
            var newItem = newTextArray[i];
            if (oldItem.text != newItem.text) return true;
            if (oldItem.style) {
              if (newItem.style) {
                if (oldItem.style.size !== newItem.style.size || oldItem.style.italic !== newItem.style.italic || oldItem.style.isImage !== newItem.style.isImage) return true;
                if (oldItem.style.isImage === newItem.style.isImage && oldItem.style.src !== newItem.style.src) return true;
              } else if (oldItem.style.size || oldItem.style.italic || oldItem.style.isImage) return true;
            } else if (newItem.style && (newItem.style.size || newItem.style.italic || newItem.style.isImage)) return true;
          }
          return false;
        },
        _onSpriteFrameLoaded: function(event, spriteFrame) {
          var newSpriteFrame;
          newSpriteFrame = spriteFrame || event.target;
          var sprite = newSpriteFrame.__sprite;
          sprite.setSpriteFrame(newSpriteFrame);
        },
        _applySpriteFrame: function(spriteFrame) {
          if (spriteFrame) if (spriteFrame.textureLoaded()) this._onSpriteFrameLoaded(null, spriteFrame); else {
            spriteFrame.once("load", this._onSpriteFrameLoaded, this);
            spriteFrame.ensureLoadTexture();
          }
        },
        _addRichTextImageElement: function(richTextElement) {
          var spriteFrameName = richTextElement.style.src;
          var spriteFrame = this.imageAtlas.getSpriteFrame(spriteFrameName);
          if (spriteFrame) {
            var sprite = new cc.Scale9Sprite();
            sprite.setAnchorPoint(0, 0);
            spriteFrame.__sprite = sprite;
            this._sgNode.addChild(sprite);
            this._labelSegments.push(sprite);
            var spriteRect = spriteFrame.getRect();
            var scaleFactor = 1;
            var spriteWidth = spriteRect.width;
            var spriteHeight = spriteRect.height;
            var expectWidth = richTextElement.style.imageWidth;
            var expectHeight = richTextElement.style.imageHeight;
            if (expectHeight > 0 && expectHeight < this.lineHeight) {
              scaleFactor = expectHeight / spriteHeight;
              spriteWidth *= scaleFactor;
              spriteHeight *= scaleFactor;
            } else {
              scaleFactor = this.lineHeight / spriteHeight;
              spriteWidth *= scaleFactor;
              spriteHeight *= scaleFactor;
            }
            expectWidth > 0 && (spriteWidth = expectWidth);
            if (this.maxWidth > 0) {
              this._lineOffsetX + spriteWidth > this.maxWidth && this._updateLineInfo();
              this._lineOffsetX += spriteWidth;
            } else {
              this._lineOffsetX += spriteWidth;
              this._lineOffsetX > this._labelWidth && (this._labelWidth = this._lineOffsetX);
            }
            this._applySpriteFrame(spriteFrame);
            sprite.setContentSize(spriteWidth, spriteHeight);
            sprite._lineCount = this._lineCount;
            richTextElement.style.event && richTextElement.style.event.click && (sprite._clickHandler = richTextElement.style.event.click);
          } else cc.warnID(4400);
        },
        _updateRichText: function() {
          if (!this.enabled) return;
          var newTextArray = cc.htmlTextParser.parse(this.string);
          if (!this._needsUpdateTextLayout(newTextArray)) {
            this._textArray = newTextArray;
            this._updateLabelSegmentTextAttributes();
            return;
          }
          this._textArray = newTextArray;
          this._resetState();
          var lastEmptyLine = false;
          var label;
          var labelSize;
          for (var i = 0; i < this._textArray.length; ++i) {
            var richTextElement = this._textArray[i];
            var text = richTextElement.text;
            if ("" === text) {
              if (richTextElement.style && richTextElement.style.newline) {
                this._updateLineInfo();
                continue;
              }
              if (richTextElement.style && richTextElement.style.isImage && this.imageAtlas) {
                this._addRichTextImageElement(richTextElement);
                continue;
              }
            }
            var multilineTexts = text.split("\n");
            for (var j = 0; j < multilineTexts.length; ++j) {
              var labelString = multilineTexts[j];
              if ("" === labelString) {
                if (this._isLastComponentCR(text) && j == multilineTexts.length - 1) continue;
                this._updateLineInfo();
                lastEmptyLine = true;
                continue;
              }
              lastEmptyLine = false;
              if (this.maxWidth > 0) {
                var labelWidth = this._measureText(i, labelString);
                this._updateRichTextWithMaxWidth(labelString, labelWidth, i);
                multilineTexts.length > 1 && j < multilineTexts.length - 1 && this._updateLineInfo();
              } else {
                label = this._addLabelSegment(labelString, i);
                labelSize = label.getContentSize();
                this._lineOffsetX += labelSize.width;
                this._lineOffsetX > this._labelWidth && (this._labelWidth = this._lineOffsetX);
                multilineTexts.length > 1 && j < multilineTexts.length - 1 && this._updateLineInfo();
              }
            }
          }
          lastEmptyLine || this._linesWidth.push(this._lineOffsetX);
          this.maxWidth > 0 && (this._labelWidth = this.maxWidth);
          this._labelHeight = this._lineCount * this.lineHeight;
          this.node.setContentSize(this._labelWidth, this._labelHeight);
          this._sgNode._setContentSize(this._labelWidth, this._labelHeight);
          this._updateRichTextPosition();
          this._layoutDirty = false;
        },
        _getFirstWordLen: function(text, startIndex, textLen) {
          var character = text.charAt(startIndex);
          if (cc.TextUtils.isUnicodeCJK(character) || cc.TextUtils.isUnicodeSpace(character)) return 1;
          var len = 1;
          for (var index = startIndex + 1; index < textLen; ++index) {
            character = text.charAt(index);
            if (cc.TextUtils.isUnicodeSpace(character) || cc.TextUtils.isUnicodeCJK(character)) break;
            len++;
          }
          return len;
        },
        _updateRichTextPosition: function() {
          var nextTokenX = 0;
          var nextLineIndex = 1;
          var totalLineCount = this._lineCount;
          for (var i = 0; i < this._labelSegments.length; ++i) {
            var label = this._labelSegments[i];
            var lineCount = label._lineCount;
            if (lineCount > nextLineIndex) {
              nextTokenX = 0;
              nextLineIndex = lineCount;
            }
            var lineOffsetX = 0;
            switch (this.horizontalAlign) {
             case cc.TextAlignment.LEFT:
              lineOffsetX = 0;
              break;

             case cc.TextAlignment.CENTER:
              lineOffsetX = (this._labelWidth - this._linesWidth[lineCount - 1]) / 2;
              break;

             case cc.TextAlignment.RIGHT:
              lineOffsetX = this._labelWidth - this._linesWidth[lineCount - 1];
            }
            label.setPositionX(nextTokenX + lineOffsetX);
            var labelSize = label.getContentSize();
            var positionY = (totalLineCount - lineCount) * this.lineHeight;
            label instanceof cc.Scale9Sprite && (positionY += (this.lineHeight - label.getContentSize().height) / 2);
            label.setPositionY(positionY);
            lineCount === nextLineIndex && (nextTokenX += labelSize.width);
          }
        },
        _convertLiteralColorValue: function(color) {
          var colorValue = color.toUpperCase();
          return cc.Color[colorValue] ? cc.Color[colorValue] : cc.hexToColor(color);
        },
        _applyTextAttribute: function(label) {
          if (label instanceof cc.Scale9Sprite) return;
          var index = label._styleIndex;
          label.setLineHeight(this.lineHeight);
          label.setVerticalAlign(VerticalAlign.CENTER);
          var textStyle = null;
          this._textArray[index] && (textStyle = this._textArray[index].style);
          textStyle && textStyle.color ? label.setColor(this._convertLiteralColorValue(textStyle.color)) : label.setColor(this.node.color);
          textStyle && textStyle.bold ? label.enableBold(true) : label.enableBold(false);
          textStyle && textStyle.italic ? label.enableItalics(true) : label.enableItalics(false);
          textStyle && textStyle.underline ? label.enableUnderline(true) : label.enableUnderline(false);
          if (textStyle && textStyle.outline) {
            label.setOutlined(true);
            label.setOutlineColor(this._convertLiteralColorValue(textStyle.outline.color));
            label.setOutlineWidth(textStyle.outline.width);
            label.setMargin(textStyle.outline.width);
          } else {
            label.setOutlined(false);
            label.setMargin(0);
          }
          textStyle && textStyle.size ? label.setFontSize(textStyle.size) : label.setFontSize(this.fontSize);
          textStyle && textStyle.event && textStyle.event.click && (label._clickHandler = textStyle.event.click);
        },
        onDestroy: function() {
          this._super();
          for (var i = 0; i < this._labelSegments.length; ++i) {
            this._labelSegments[i].removeFromParent(true);
            _ccsg.Label.pool.put(this._labelSegments[i]);
          }
          this._resetState();
        }
      });
      cc.RichText = module.exports = RichText;
    }), {
      "../label/CCHtmlTextParser": 72,
      "../label/CCTextUtils": 73
    } ],
    49: [ (function(require, module, exports) {
      var SceneGraphHelper = require("../utils/scene-graph-helper");
      var SGComponent = cc.Class({
        extends: require("./CCComponent"),
        name: "cc._SGComponent",
        editor: false,
        properties: {
          _sgNode: {
            default: null,
            serializable: false
          }
        },
        _createSgNode: null,
        _initSgNode: null,
        _removeSgNode: SceneGraphHelper.removeSgNode,
        _registSizeProvider: function() {
          if (this.node._sizeProvider) {
            var name;
            false;
          } else this.node._sizeProvider = this._sgNode;
        }
      });
      cc._SGComponent = module.exports = SGComponent;
    }), {
      "../utils/scene-graph-helper": 120,
      "./CCComponent": 39
    } ],
    50: [ (function(require, module, exports) {
      var GETTINGSHORTERFACTOR = 20;
      var Direction = cc.Enum({
        HORIZONTAL: 0,
        VERTICAL: 1
      });
      var Scrollbar = cc.Class({
        name: "cc.Scrollbar",
        extends: require("./CCComponent"),
        editor: false,
        properties: {
          _scrollView: null,
          _touching: false,
          _autoHideRemainingTime: {
            default: 0,
            serializable: false
          },
          _opacity: 255,
          handle: {
            default: null,
            type: cc.Sprite,
            tooltip: false,
            notify: function() {
              this._onScroll(cc.p(0, 0));
            },
            animatable: false
          },
          direction: {
            default: Direction.HORIZONTAL,
            type: Direction,
            tooltip: false,
            notify: function() {
              this._onScroll(cc.p(0, 0));
            },
            animatable: false
          },
          enableAutoHide: {
            default: true,
            animatable: false,
            tooltip: false
          },
          autoHideTime: {
            default: 1,
            animatable: false,
            tooltip: false
          }
        },
        statics: {
          Direction: Direction
        },
        setTargetScrollView: function(scrollView) {
          this._scrollView = scrollView;
        },
        _convertToScrollViewSpace: function(content) {
          var worldSpacePos = content.convertToWorldSpace(cc.p(0, 0));
          var scrollViewSpacePos = this._scrollView.node.convertToNodeSpace(worldSpacePos);
          return scrollViewSpacePos;
        },
        _setOpacity: function(opacity) {
          this.handle && this.node.setOpacity(opacity);
        },
        _onScroll: function(outOfBoundary) {
          if (this._scrollView) {
            var content = this._scrollView.content;
            if (content) {
              var contentSize = content.getContentSize();
              var scrollViewSize = this._scrollView.node.getContentSize();
              var handleNodeSize = this.node.getContentSize();
              if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) return;
              if (this.enableAutoHide) {
                this._autoHideRemainingTime = this.autoHideTime;
                this._setOpacity(this._opacity);
              }
              var contentMeasure = 0;
              var scrollViewMeasure = 0;
              var outOfBoundaryValue = 0;
              var contentPosition = 0;
              var handleNodeMeasure = 0;
              if (this.direction === Direction.HORIZONTAL) {
                contentMeasure = contentSize.width;
                scrollViewMeasure = scrollViewSize.width;
                handleNodeMeasure = handleNodeSize.width;
                outOfBoundaryValue = outOfBoundary.x;
                contentPosition = -this._convertToScrollViewSpace(content).x;
              } else if (this.direction === Direction.VERTICAL) {
                contentMeasure = contentSize.height;
                scrollViewMeasure = scrollViewSize.height;
                handleNodeMeasure = handleNodeSize.height;
                outOfBoundaryValue = outOfBoundary.y;
                contentPosition = -this._convertToScrollViewSpace(content).y;
              }
              var length = this._calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundaryValue);
              var position = this._calculatePosition(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundaryValue, length);
              this._updateLength(length);
              this._updateHanlderPosition(position);
            }
          }
        },
        _updateHanlderPosition: function(position) {
          if (this.handle) {
            var oldPosition = this._fixupHandlerPosition();
            this.handle.node.setPosition(cc.pAdd(position, oldPosition));
          }
        },
        _fixupHandlerPosition: function() {
          var barSize = this.node.getContentSize();
          var barAnchor = this.node.getAnchorPoint();
          var handleSize = this.handle.node.getContentSize();
          var handleParent = this.handle.node.parent;
          var leftBottomWorldPosition = this.node.convertToWorldSpaceAR(cc.p(-barSize.width * barAnchor.x, -barSize.height * barAnchor.y));
          var fixupPosition = handleParent.convertToNodeSpaceAR(leftBottomWorldPosition);
          this.direction === Direction.HORIZONTAL ? fixupPosition = cc.pAdd(fixupPosition, cc.p(0, (barSize.height - handleSize.height) / 2)) : this.direction === Direction.VERTICAL && (fixupPosition = cc.pAdd(fixupPosition, cc.p((barSize.width - handleSize.width) / 2, 0)));
          this.handle.node.setPosition(fixupPosition);
          return fixupPosition;
        },
        _onTouchBegan: function() {
          if (!this.enableAutoHide) return;
          this._touching = true;
        },
        _conditionalDisableScrollBar: function(contentSize, scrollViewSize) {
          if (contentSize.width <= scrollViewSize.width && this.direction === Direction.HORIZONTAL) return true;
          if (contentSize.height <= scrollViewSize.height && this.direction === Direction.VERTICAL) return true;
          return false;
        },
        _onTouchEnded: function() {
          if (!this.enableAutoHide) return;
          this._touching = false;
          if (this.autoHideTime <= 0) return;
          if (this._scrollView) {
            var content = this._scrollView.content;
            if (content) {
              var contentSize = content.getContentSize();
              var scrollViewSize = this._scrollView.node.getContentSize();
              if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) return;
            }
          }
          this._autoHideRemainingTime = this.autoHideTime;
        },
        _calculateLength: function(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundary) {
          var denominatorValue = contentMeasure;
          outOfBoundary && (denominatorValue += (outOfBoundary > 0 ? outOfBoundary : -outOfBoundary) * GETTINGSHORTERFACTOR);
          var lengthRation = scrollViewMeasure / denominatorValue;
          return handleNodeMeasure * lengthRation;
        },
        _calculatePosition: function(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundary, actualLenth) {
          var denominatorValue = contentMeasure - scrollViewMeasure;
          outOfBoundary && (denominatorValue += Math.abs(outOfBoundary));
          var positionRatio = 0;
          if (denominatorValue) {
            positionRatio = contentPosition / denominatorValue;
            positionRatio = cc.clamp01(positionRatio);
          }
          var position = (handleNodeMeasure - actualLenth) * positionRatio;
          return this.direction === Direction.VERTICAL ? cc.p(0, position) : cc.p(position, 0);
        },
        _updateLength: function(length) {
          if (this.handle) {
            var handleNode = this.handle.node;
            var handleNodeSize = handleNode.getContentSize();
            handleNode.setAnchorPoint(cc.p(0, 0));
            this.direction === Direction.HORIZONTAL ? handleNode.setContentSize(length, handleNodeSize.height) : handleNode.setContentSize(handleNodeSize.width, length);
          }
        },
        _processAutoHide: function(deltaTime) {
          if (!this.enableAutoHide || this._autoHideRemainingTime <= 0) return;
          if (this._touching) return;
          this._autoHideRemainingTime -= deltaTime;
          if (this._autoHideRemainingTime <= this.autoHideTime) {
            this._autoHideRemainingTime = Math.max(0, this._autoHideRemainingTime);
            var opacity = this._opacity * (this._autoHideRemainingTime / this.autoHideTime);
            this._setOpacity(opacity);
          }
        },
        start: function() {
          this.enableAutoHide && this._setOpacity(0);
        },
        hide: function() {
          this._autoHideRemainingTime = 0;
          this._setOpacity(0);
        },
        show: function() {
          this._autoHideRemainingTime = this.autoHideTime;
          this._setOpacity(this._opacity);
        },
        update: function(dt) {
          this._processAutoHide(dt);
        }
      });
      cc.Scrollbar = module.exports = Scrollbar;
    }), {
      "./CCComponent": 39
    } ],
    51: [ (function(require, module, exports) {
      var NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
      var OUT_OF_BOUNDARY_BREAKING_FACTOR = .05;
      var EPSILON = 1e-4;
      var MOVEMENT_FACTOR = .7;
      var quintEaseOut = function(time) {
        time -= 1;
        return time * time * time * time * time + 1;
      };
      var getTimeInMilliseconds = function() {
        var currentTime = new Date();
        return currentTime.getMilliseconds();
      };
      var EventType = cc.Enum({
        SCROLL_TO_TOP: 0,
        SCROLL_TO_BOTTOM: 1,
        SCROLL_TO_LEFT: 2,
        SCROLL_TO_RIGHT: 3,
        SCROLLING: 4,
        BOUNCE_TOP: 5,
        BOUNCE_BOTTOM: 6,
        BOUNCE_LEFT: 7,
        BOUNCE_RIGHT: 8,
        SCROLL_ENDED: 9,
        TOUCH_UP: 10,
        AUTOSCROLL_ENDED_WITH_THRESHOLD: 11,
        SCROLL_BEGAN: 12
      });
      var eventMap = {
        "scroll-to-top": EventType.SCROLL_TO_TOP,
        "scroll-to-bottom": EventType.SCROLL_TO_BOTTOM,
        "scroll-to-left": EventType.SCROLL_TO_LEFT,
        "scroll-to-right": EventType.SCROLL_TO_RIGHT,
        scrolling: EventType.SCROLLING,
        "bounce-bottom": EventType.BOUNCE_BOTTOM,
        "bounce-left": EventType.BOUNCE_LEFT,
        "bounce-right": EventType.BOUNCE_RIGHT,
        "bounce-top": EventType.BOUNCE_TOP,
        "scroll-ended": EventType.SCROLL_ENDED,
        "touch-up": EventType.TOUCH_UP,
        "scroll-ended-with-threshold": EventType.AUTOSCROLL_ENDED_WITH_THRESHOLD,
        "scroll-began": EventType.SCROLL_BEGAN
      };
      var ScrollView = cc.Class({
        name: "cc.ScrollView",
        extends: require("./CCViewGroup"),
        editor: false,
        ctor: function() {
          this._topBoundary = 0;
          this._bottomBoundary = 0;
          this._leftBoundary = 0;
          this._rightBoundary = 0;
          this._touchMoveDisplacements = [];
          this._touchMoveTimeDeltas = [];
          this._touchMovePreviousTimestamp = 0;
          this._touchMoved = false;
          this._autoScrolling = false;
          this._autoScrollAttenuate = false;
          this._autoScrollStartPosition = cc.p(0, 0);
          this._autoScrollTargetDelta = cc.p(0, 0);
          this._autoScrollTotalTime = 0;
          this._autoScrollAccumulatedTime = 0;
          this._autoScrollCurrentlyOutOfBoundary = false;
          this._autoScrollBraking = false;
          this._autoScrollBrakingStartPosition = cc.p(0, 0);
          this._outOfBoundaryAmount = cc.p(0, 0);
          this._outOfBoundaryAmountDirty = true;
          this._stopMouseWheel = false;
          this._mouseWheelEventElapsedTime = 0;
          this._isScrollEndedWithThresholdEventFired = false;
          this._scrollEventEmitMask = 0;
          this._isBouncing = false;
          this._scrolling = false;
        },
        properties: {
          content: {
            default: void 0,
            type: cc.Node,
            tooltip: false
          },
          horizontal: {
            default: true,
            animatable: false,
            tooltip: false
          },
          vertical: {
            default: true,
            animatable: false,
            tooltip: false
          },
          inertia: {
            default: true,
            tooltip: false
          },
          brake: {
            default: .5,
            type: "Float",
            range: [ 0, 1, .1 ],
            tooltip: false
          },
          elastic: {
            default: true,
            animatable: false,
            tooltip: false
          },
          bounceDuration: {
            default: 1,
            range: [ 0, 10 ],
            tooltip: false
          },
          horizontalScrollBar: {
            default: void 0,
            type: cc.Scrollbar,
            tooltip: false,
            notify: function() {
              if (this.horizontalScrollBar) {
                this.horizontalScrollBar.setTargetScrollView(this);
                this._updateScrollBar(0);
              }
            },
            animatable: false
          },
          verticalScrollBar: {
            default: void 0,
            type: cc.Scrollbar,
            tooltip: false,
            notify: function() {
              if (this.verticalScrollBar) {
                this.verticalScrollBar.setTargetScrollView(this);
                this._updateScrollBar(0);
              }
            },
            animatable: false
          },
          scrollEvents: {
            default: [],
            type: cc.Component.EventHandler,
            tooltip: false
          },
          cancelInnerEvents: {
            default: true,
            animatable: false,
            tooltip: false
          }
        },
        statics: {
          EventType: EventType
        },
        scrollToBottom: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, 0),
            applyToHorizontal: false,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta, true);
        },
        scrollToTop: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, 1),
            applyToHorizontal: false,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToLeft: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, 0),
            applyToHorizontal: true,
            applyToVertical: false
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToRight: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(1, 0),
            applyToHorizontal: true,
            applyToVertical: false
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToTopLeft: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, 1),
            applyToHorizontal: true,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToTopRight: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(1, 1),
            applyToHorizontal: true,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToBottomLeft: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, 0),
            applyToHorizontal: true,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToBottomRight: function(timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(1, 0),
            applyToHorizontal: true,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToOffset: function(offset, timeInSecond, attenuated) {
          var maxScrollOffset = this.getMaxScrollOffset();
          var anchor = cc.p(0, 0);
          0 === maxScrollOffset.x ? anchor.x = 0 : anchor.x = offset.x / maxScrollOffset.x;
          0 === maxScrollOffset.y ? anchor.y = 1 : anchor.y = (maxScrollOffset.y - offset.y) / maxScrollOffset.y;
          this.scrollTo(anchor, timeInSecond, attenuated);
        },
        getScrollOffset: function() {
          var topDelta = this._getContentTopBoundary() - this._topBoundary;
          var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
          return cc.p(leftDeta, topDelta);
        },
        getMaxScrollOffset: function() {
          var scrollSize = this.node.getContentSize();
          var contentSize = this.content.getContentSize();
          var horizontalMaximizeOffset = contentSize.width - scrollSize.width;
          var verticalMaximizeOffset = contentSize.height - scrollSize.height;
          horizontalMaximizeOffset = horizontalMaximizeOffset >= 0 ? horizontalMaximizeOffset : 0;
          verticalMaximizeOffset = verticalMaximizeOffset >= 0 ? verticalMaximizeOffset : 0;
          return cc.p(horizontalMaximizeOffset, verticalMaximizeOffset);
        },
        scrollToPercentHorizontal: function(percent, timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(percent, 0),
            applyToHorizontal: true,
            applyToVertical: false
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollTo: function(anchor, timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: anchor,
            applyToHorizontal: true,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        scrollToPercentVertical: function(percent, timeInSecond, attenuated) {
          var moveDelta = this._calculateMovePercentDelta({
            anchor: cc.p(0, percent),
            applyToHorizontal: false,
            applyToVertical: true
          });
          timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
        },
        stopAutoScroll: function() {
          this._autoScrolling = false;
          this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
        },
        setContentPosition: function(position) {
          if (cc.pFuzzyEqual(position, this.getContentPosition(), EPSILON)) return;
          this.content.setPosition(position);
          this._outOfBoundaryAmountDirty = true;
        },
        getContentPosition: function() {
          return this.content.getPosition();
        },
        isScrolling: function() {
          return this._scrolling;
        },
        isAutoScrolling: function() {
          return this._autoScrolling;
        },
        _registerEvent: function() {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.node.on(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
        },
        _unregisterEvent: function() {
          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.node.off(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
        },
        _onMouseWheel: function(event, captureListeners) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;
          var deltaMove = cc.p(0, 0);
          var wheelPrecision = -.1;
          true;
          wheelPrecision = -7;
          this.vertical ? deltaMove = cc.p(0, event.getScrollY() * wheelPrecision) : this.horizontal && (deltaMove = cc.p(event.getScrollY() * wheelPrecision, 0));
          this._mouseWheelEventElapsedTime = 0;
          this._processDeltaMove(deltaMove);
          if (!this._stopMouseWheel) {
            this._handlePressLogic();
            this.schedule(this._checkMouseWheel, 1 / 60);
            this._stopMouseWheel = true;
          }
          this._stopPropagationIfTargetIsMe(event);
        },
        _checkMouseWheel: function(dt) {
          var currentOutOfBoundary = this._getHowMuchOutOfBoundary();
          var maxElapsedTime = .1;
          if (!cc.pFuzzyEqual(currentOutOfBoundary, cc.p(0, 0), EPSILON)) {
            this._processInertiaScroll();
            this.unschedule(this._checkMouseWheel);
            this._stopMouseWheel = false;
            return;
          }
          this._mouseWheelEventElapsedTime += dt;
          if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
            this._onScrollBarTouchEnded();
            this.unschedule(this._checkMouseWheel);
            this._stopMouseWheel = false;
          }
        },
        _calculateMovePercentDelta: function(options) {
          var anchor = options.anchor;
          var applyToHorizontal = options.applyToHorizontal;
          var applyToVertical = options.applyToVertical;
          this._calculateBoundary();
          anchor = cc.pClamp(anchor, cc.p(0, 0), cc.p(1, 1));
          var scrollSize = this.node.getContentSize();
          var contentSize = this.content.getContentSize();
          var bottomDeta = this._getContentBottomBoundary() - this._bottomBoundary;
          bottomDeta = -bottomDeta;
          var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
          leftDeta = -leftDeta;
          var moveDelta = cc.p(0, 0);
          var totalScrollDelta = 0;
          if (applyToHorizontal) {
            totalScrollDelta = contentSize.width - scrollSize.width;
            moveDelta.x = leftDeta - totalScrollDelta * anchor.x;
          }
          if (applyToVertical) {
            totalScrollDelta = contentSize.height - scrollSize.height;
            moveDelta.y = bottomDeta - totalScrollDelta * anchor.y;
          }
          return moveDelta;
        },
        _moveContentToTopLeft: function(scrollViewSize) {
          var contentSize = this.content.getContentSize();
          var bottomDeta = this._getContentBottomBoundary() - this._bottomBoundary;
          bottomDeta = -bottomDeta;
          var moveDelta = cc.p(0, 0);
          var totalScrollDelta = 0;
          var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
          leftDeta = -leftDeta;
          if (contentSize.height < scrollViewSize.height) {
            totalScrollDelta = contentSize.height - scrollViewSize.height;
            moveDelta.y = bottomDeta - totalScrollDelta;
            this.verticalScrollBar && this.verticalScrollBar.hide();
          } else this.verticalScrollBar && this.verticalScrollBar.show();
          if (contentSize.width < scrollViewSize.width) {
            totalScrollDelta = contentSize.width - scrollViewSize.width;
            moveDelta.x = leftDeta;
            this.horizontalScrollBar && this.horizontalScrollBar.hide();
          } else this.horizontalScrollBar && this.horizontalScrollBar.show();
          this._moveContent(moveDelta);
          this._adjustContentOutOfBoundary();
        },
        _calculateBoundary: function() {
          if (this.content) {
            var layout = this.content.getComponent(cc.Layout);
            layout && layout.enabledInHierarchy && layout.updateLayout();
            var scrollViewSize = this.node.getContentSize();
            var leftBottomPosition = this._convertToContentParentSpace(cc.p(0, 0));
            this._leftBoundary = leftBottomPosition.x;
            this._bottomBoundary = leftBottomPosition.y;
            var topRightPosition = this._convertToContentParentSpace(cc.p(scrollViewSize.width, scrollViewSize.height));
            this._rightBoundary = topRightPosition.x;
            this._topBoundary = topRightPosition.y;
            true;
            this._moveContentToTopLeft(scrollViewSize);
          }
        },
        _convertToContentParentSpace: function(position) {
          var scrollViewPositionInWorldSpace = this.node.convertToWorldSpace(position);
          var contentParent = this.content.parent;
          return contentParent.convertToNodeSpaceAR(scrollViewPositionInWorldSpace);
        },
        _hasNestedViewGroup: function(event, captureListeners) {
          if (event.eventPhase !== cc.Event.CAPTURING_PHASE) return;
          if (captureListeners) for (var i = 0; i < captureListeners.length; ++i) {
            var item = captureListeners[i];
            if (this.node === item) {
              if (event.target.getComponent(cc.ViewGroup)) return true;
              return false;
            }
            if (item.getComponent(cc.ViewGroup)) return true;
          }
          return false;
        },
        _stopPropagationIfTargetIsMe: function(event) {
          event.eventPhase === cc.Event.AT_TARGET && event.target === this.node && event.stopPropagation();
        },
        _onTouchBegan: function(event, captureListeners) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;
          var touch = event.touch;
          this.content && this._handlePressLogic(touch);
          this._touchMoved = false;
          this._stopPropagationIfTargetIsMe(event);
        },
        _onTouchMoved: function(event, captureListeners) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;
          var touch = event.touch;
          this.content && this._handleMoveLogic(touch);
          if (!this.cancelInnerEvents) return;
          var deltaMove = cc.pSub(touch.getLocation(), touch.getStartLocation());
          if (cc.pLength(deltaMove) > 7 && !this._touchMoved && event.target !== this.node) {
            var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
            cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
            cancelEvent.touch = event.touch;
            cancelEvent.simulate = true;
            event.target.dispatchEvent(cancelEvent);
            this._touchMoved = true;
          }
          this._stopPropagationIfTargetIsMe(event);
        },
        _onTouchEnded: function(event, captureListeners) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;
          this._dispatchEvent("touch-up");
          var touch = event.touch;
          this.content && this._handleReleaseLogic(touch);
          this._touchMoved ? event.stopPropagation() : this._stopPropagationIfTargetIsMe(event);
        },
        _onTouchCancelled: function(event, captureListeners) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;
          if (!event.simulate) {
            var touch = event.touch;
            this.content && this._handleReleaseLogic(touch);
          }
          this._stopPropagationIfTargetIsMe(event);
        },
        _processDeltaMove: function(deltaMove) {
          this._scrollChildren(deltaMove);
          this._gatherTouchMove(deltaMove);
        },
        _handleMoveLogic: function(touch) {
          var deltaMove = touch.getDelta();
          this._processDeltaMove(deltaMove);
        },
        _scrollChildren: function(deltaMove) {
          deltaMove = this._clampDelta(deltaMove);
          var realMove = deltaMove;
          var outOfBoundary;
          if (this.elastic) {
            outOfBoundary = this._getHowMuchOutOfBoundary();
            realMove.x *= 0 === outOfBoundary.x ? 1 : .5;
            realMove.y *= 0 === outOfBoundary.y ? 1 : .5;
          }
          if (!this.elastic) {
            outOfBoundary = this._getHowMuchOutOfBoundary(realMove);
            realMove = cc.pAdd(realMove, outOfBoundary);
          }
          var scrollEventType = -1;
          if (realMove.y > 0) {
            var icBottomPos = this.content.y - this.content.anchorY * this.content.height;
            icBottomPos + realMove.y > this._bottomBoundary && (scrollEventType = "scroll-to-bottom");
          } else if (realMove.y < 0) {
            var icTopPos = this.content.y - this.content.anchorY * this.content.height + this.content.height;
            icTopPos + realMove.y <= this._topBoundary && (scrollEventType = "scroll-to-top");
          } else if (realMove.x < 0) {
            var icRightPos = this.content.x - this.content.anchorX * this.content.width + this.content.width;
            icRightPos + realMove.x <= this._rightBoundary && (scrollEventType = "scroll-to-right");
          } else if (realMove.x > 0) {
            var icLeftPos = this.content.x - this.content.anchorX * this.content.width;
            icLeftPos + realMove.x >= this._leftBoundary && (scrollEventType = "scroll-to-left");
          }
          this._moveContent(realMove, false);
          if (0 !== realMove.x || 0 !== realMove.y) {
            if (!this._scrolling) {
              this._scrolling = true;
              this._dispatchEvent("scroll-began");
            }
            this._dispatchEvent("scrolling");
          }
          -1 !== scrollEventType && this._dispatchEvent(scrollEventType);
        },
        _handlePressLogic: function() {
          this._autoScrolling && this._dispatchEvent("scroll-ended");
          this._autoScrolling = false;
          this._isBouncing = false;
          this._touchMovePreviousTimestamp = getTimeInMilliseconds();
          this._touchMoveDisplacements.length = 0;
          this._touchMoveTimeDeltas.length = 0;
          this._onScrollBarTouchBegan();
        },
        _clampDelta: function(delta) {
          var contentSize = this.content.getContentSize();
          var scrollViewSize = this.node.getContentSize();
          contentSize.width < scrollViewSize.width && (delta.x = 0);
          contentSize.height < scrollViewSize.height && (delta.y = 0);
          return delta;
        },
        _gatherTouchMove: function(delta) {
          delta = this._clampDelta(delta);
          while (this._touchMoveDisplacements.length >= NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED) {
            this._touchMoveDisplacements.shift();
            this._touchMoveTimeDeltas.shift();
          }
          this._touchMoveDisplacements.push(delta);
          var timeStamp = getTimeInMilliseconds();
          this._touchMoveTimeDeltas.push((timeStamp - this._touchMovePreviousTimestamp) / 1e3);
          this._touchMovePreviousTimestamp = timeStamp;
        },
        _startBounceBackIfNeeded: function() {
          if (!this.elastic) return false;
          var bounceBackAmount = this._getHowMuchOutOfBoundary();
          bounceBackAmount = this._clampDelta(bounceBackAmount);
          if (cc.pFuzzyEqual(bounceBackAmount, cc.p(0, 0), EPSILON)) return false;
          var bounceBackTime = Math.max(this.bounceDuration, 0);
          this._startAutoScroll(bounceBackAmount, bounceBackTime, true);
          if (!this._isBouncing) {
            bounceBackAmount.y > 0 && this._dispatchEvent("bounce-top");
            bounceBackAmount.y < 0 && this._dispatchEvent("bounce-bottom");
            bounceBackAmount.x > 0 && this._dispatchEvent("bounce-right");
            bounceBackAmount.x < 0 && this._dispatchEvent("bounce-left");
            this._isBouncing = true;
          }
          return true;
        },
        _processInertiaScroll: function() {
          var bounceBackStarted = this._startBounceBackIfNeeded();
          if (!bounceBackStarted && this.inertia) {
            var touchMoveVelocity = this._calculateTouchMoveVelocity();
            !cc.pFuzzyEqual(touchMoveVelocity, cc.p(0, 0), EPSILON) && this.brake < 1 && this._startInertiaScroll(touchMoveVelocity);
          }
          this._onScrollBarTouchEnded();
        },
        _handleReleaseLogic: function(touch) {
          var delta = touch.getDelta();
          this._gatherTouchMove(delta);
          this._processInertiaScroll();
          if (this._scrolling) {
            this._scrolling = false;
            this._autoScrolling || this._dispatchEvent("scroll-ended");
          }
        },
        _isOutOfBoundary: function() {
          var outOfBoundary = this._getHowMuchOutOfBoundary();
          return !cc.pFuzzyEqual(outOfBoundary, cc.p(0, 0), EPSILON);
        },
        _isNecessaryAutoScrollBrake: function() {
          if (this._autoScrollBraking) return true;
          if (this._isOutOfBoundary()) {
            if (!this._autoScrollCurrentlyOutOfBoundary) {
              this._autoScrollCurrentlyOutOfBoundary = true;
              this._autoScrollBraking = true;
              this._autoScrollBrakingStartPosition = this.getContentPosition();
              return true;
            }
          } else this._autoScrollCurrentlyOutOfBoundary = false;
          return false;
        },
        getScrollEndedEventTiming: function() {
          return EPSILON;
        },
        _processAutoScrolling: function(dt) {
          var isAutoScrollBrake = this._isNecessaryAutoScrollBrake();
          var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
          this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
          var percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
          this._autoScrollAttenuate && (percentage = quintEaseOut(percentage));
          var newPosition = cc.pAdd(this._autoScrollStartPosition, cc.pMult(this._autoScrollTargetDelta, percentage));
          var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
          var fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming();
          if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
            this._dispatchEvent("scroll-ended-with-threshold");
            this._isScrollEndedWithThresholdEventFired = true;
          }
          if (this.elastic) {
            var brakeOffsetPosition = cc.pSub(newPosition, this._autoScrollBrakingStartPosition);
            isAutoScrollBrake && (brakeOffsetPosition = cc.pMult(brakeOffsetPosition, brakingFactor));
            newPosition = cc.pAdd(this._autoScrollBrakingStartPosition, brakeOffsetPosition);
          } else {
            var moveDelta = cc.pSub(newPosition, this.getContentPosition());
            var outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);
            if (!cc.pFuzzyEqual(outOfBoundary, cc.p(0, 0), EPSILON)) {
              newPosition = cc.pAdd(newPosition, outOfBoundary);
              reachedEnd = true;
            }
          }
          reachedEnd && (this._autoScrolling = false);
          var contentPos = cc.pSub(newPosition, this.getContentPosition());
          this._moveContent(contentPos, reachedEnd);
          this._dispatchEvent("scrolling");
          if (!this._autoScrolling) {
            this._isBouncing = false;
            this._dispatchEvent("scroll-ended");
          }
        },
        _startInertiaScroll: function(touchMoveVelocity) {
          var inertiaTotalMovement = cc.pMult(touchMoveVelocity, MOVEMENT_FACTOR);
          this._startAttenuatingAutoScroll(inertiaTotalMovement, touchMoveVelocity);
        },
        _calculateAttenuatedFactor: function(distance) {
          if (this.brake <= 0) return 1 - this.brake;
          var attenuatedFactor = (1 - this.brake) * (1 / (1 + 14e-6 * distance + distance * distance * 8e-9));
          return attenuatedFactor;
        },
        _startAttenuatingAutoScroll: function(deltaMove, initialVelocity) {
          var time = this._calculateAutoScrollTimeByInitalSpeed(cc.pLength(initialVelocity));
          var targetDelta = cc.pNormalize(deltaMove);
          var contentSize = this.content.getContentSize();
          var scrollviewSize = this.node.getContentSize();
          var totalMoveWidth = contentSize.width - scrollviewSize.width;
          var totalMoveHeight = contentSize.height - scrollviewSize.height;
          var attenuatedFactorX = this._calculateAttenuatedFactor(totalMoveWidth);
          var attenuatedFactorY = this._calculateAttenuatedFactor(totalMoveHeight);
          targetDelta = cc.p(targetDelta.x * totalMoveWidth * (1 - this.brake) * attenuatedFactorX, targetDelta.y * totalMoveHeight * attenuatedFactorY * (1 - this.brake));
          var originalMoveLength = cc.pLength(deltaMove);
          var factor = cc.pLength(targetDelta) / originalMoveLength;
          targetDelta = cc.pAdd(targetDelta, deltaMove);
          if (this.brake > 0 && factor > 7) {
            factor = Math.sqrt(factor);
            targetDelta = cc.pAdd(cc.pMult(deltaMove, factor), deltaMove);
          }
          if (this.brake > 0 && factor > 3) {
            factor = 3;
            time *= factor;
          }
          0 === this.brake && factor > 1 && (time *= factor);
          this._startAutoScroll(targetDelta, time, true);
        },
        _calculateAutoScrollTimeByInitalSpeed: function(initalSpeed) {
          var time = Math.sqrt(Math.sqrt(initalSpeed / 5));
          return time;
        },
        _startAutoScroll: function(deltaMove, timeInSecond, attenuated) {
          var adjustedDeltaMove = this._flattenVectorByDirection(deltaMove);
          this._autoScrolling = true;
          this._autoScrollTargetDelta = adjustedDeltaMove;
          this._autoScrollAttenuate = attenuated;
          this._autoScrollStartPosition = this.getContentPosition();
          this._autoScrollTotalTime = timeInSecond;
          this._autoScrollAccumulatedTime = 0;
          this._autoScrollBraking = false;
          this._isScrollEndedWithThresholdEventFired = false;
          this._autoScrollBrakingStartPosition = cc.p(0, 0);
          var currentOutOfBoundary = this._getHowMuchOutOfBoundary();
          if (!cc.pFuzzyEqual(currentOutOfBoundary, cc.p(0, 0), EPSILON)) {
            this._autoScrollCurrentlyOutOfBoundary = true;
            var afterOutOfBoundary = this._getHowMuchOutOfBoundary(adjustedDeltaMove);
            (currentOutOfBoundary.x * afterOutOfBoundary.x > 0 || currentOutOfBoundary.y * afterOutOfBoundary.y > 0) && (this._autoScrollBraking = true);
          }
        },
        _calculateTouchMoveVelocity: function() {
          var totalTime = 0;
          totalTime = this._touchMoveTimeDeltas.reduce((function(a, b) {
            return a + b;
          }), totalTime);
          if (totalTime <= 0 || totalTime >= .5) return cc.p(0, 0);
          var totalMovement = cc.p(0, 0);
          totalMovement = this._touchMoveDisplacements.reduce((function(a, b) {
            return cc.pAdd(a, b);
          }), totalMovement);
          return cc.p(totalMovement.x * (1 - this.brake) / totalTime, totalMovement.y * (1 - this.brake) / totalTime);
        },
        _flattenVectorByDirection: function(vector) {
          var result = vector;
          result.x = this.horizontal ? result.x : 0;
          result.y = this.vertical ? result.y : 0;
          return result;
        },
        _moveContent: function(deltaMove, canStartBounceBack) {
          var adjustedMove = this._flattenVectorByDirection(deltaMove);
          var newPosition = cc.pAdd(this.getContentPosition(), adjustedMove);
          this.setContentPosition(newPosition);
          var outOfBoundary = this._getHowMuchOutOfBoundary();
          this._updateScrollBar(outOfBoundary);
          this.elastic && canStartBounceBack && this._startBounceBackIfNeeded();
        },
        _getContentLeftBoundary: function() {
          var contentPos = this.getContentPosition();
          var leftBoundary = contentPos.x - this.content.getAnchorPoint().x * this.content.getContentSize().width;
          return leftBoundary;
        },
        _getContentRightBoundary: function() {
          var contentSize = this.content.getContentSize();
          return this._getContentLeftBoundary() + contentSize.width;
        },
        _getContentTopBoundary: function() {
          var contentSize = this.content.getContentSize();
          return this._getContentBottomBoundary() + contentSize.height;
        },
        _getContentBottomBoundary: function() {
          var contentPos = this.getContentPosition();
          var bottomBoundary = contentPos.y - this.content.getAnchorPoint().y * this.content.getContentSize().height;
          return bottomBoundary;
        },
        _getHowMuchOutOfBoundary: function(addition) {
          addition = addition || cc.p(0, 0);
          if (cc.pFuzzyEqual(addition, cc.p(0, 0), EPSILON) && !this._outOfBoundaryAmountDirty) return this._outOfBoundaryAmount;
          var outOfBoundaryAmount = cc.p(0, 0);
          this._getContentLeftBoundary() + addition.x > this._leftBoundary ? outOfBoundaryAmount.x = this._leftBoundary - (this._getContentLeftBoundary() + addition.x) : this._getContentRightBoundary() + addition.x < this._rightBoundary && (outOfBoundaryAmount.x = this._rightBoundary - (this._getContentRightBoundary() + addition.x));
          this._getContentTopBoundary() + addition.y < this._topBoundary ? outOfBoundaryAmount.y = this._topBoundary - (this._getContentTopBoundary() + addition.y) : this._getContentBottomBoundary() + addition.y > this._bottomBoundary && (outOfBoundaryAmount.y = this._bottomBoundary - (this._getContentBottomBoundary() + addition.y));
          if (cc.pFuzzyEqual(addition, cc.p(0, 0), EPSILON)) {
            this._outOfBoundaryAmount = outOfBoundaryAmount;
            this._outOfBoundaryAmountDirty = false;
          }
          outOfBoundaryAmount = this._clampDelta(outOfBoundaryAmount);
          return outOfBoundaryAmount;
        },
        _updateScrollBar: function(outOfBoundary) {
          this.horizontalScrollBar && this.horizontalScrollBar._onScroll(outOfBoundary);
          this.verticalScrollBar && this.verticalScrollBar._onScroll(outOfBoundary);
        },
        _onScrollBarTouchBegan: function() {
          this.horizontalScrollBar && this.horizontalScrollBar._onTouchBegan();
          this.verticalScrollBar && this.verticalScrollBar._onTouchBegan();
        },
        _onScrollBarTouchEnded: function() {
          this.horizontalScrollBar && this.horizontalScrollBar._onTouchEnded();
          this.verticalScrollBar && this.verticalScrollBar._onTouchEnded();
        },
        _dispatchEvent: function(event) {
          if ("scroll-ended" === event) this._scrollEventEmitMask = 0; else if ("scroll-to-top" === event || "scroll-to-bottom" === event || "scroll-to-left" === event || "scroll-to-right" === event) {
            var flag = 1 << eventMap[event];
            if (this._scrollEventEmitMask & flag) return;
            this._scrollEventEmitMask |= flag;
          }
          cc.Component.EventHandler.emitEvents(this.scrollEvents, this, eventMap[event]);
          this.node.emit(event, this);
        },
        _adjustContentOutOfBoundary: function() {
          this._outOfBoundaryAmountDirty = true;
          if (this._isOutOfBoundary()) {
            var outOfBoundary = this._getHowMuchOutOfBoundary(cc.p(0, 0));
            var newPosition = cc.pAdd(this.getContentPosition(), outOfBoundary);
            if (this.content) {
              this.content.setPosition(newPosition);
              this._updateScrollBar(0);
            }
          }
        },
        start: function() {
          this._calculateBoundary();
          this.content && cc.director.once(cc.Director.EVENT_AFTER_VISIT, this._adjustContentOutOfBoundary, this);
        },
        _hideScrollbar: function() {
          this.horizontalScrollBar && this.horizontalScrollBar.hide();
          this.verticalScrollBar && this.verticalScrollBar.hide();
        },
        _showScrollbar: function() {
          this.horizontalScrollBar && this.horizontalScrollBar.show();
          this.verticalScrollBar && this.verticalScrollBar.show();
        },
        onDisable: function() {
          true;
          this._unregisterEvent();
          this.node.off("size-changed", this._calculateBoundary, this);
          this.node.off("scale-changed", this._calculateBoundary, this);
          if (this.content) {
            this.content.off("size-changed", this._calculateBoundary, this);
            this.content.off("scale-changed", this._calculateBoundary, this);
          }
          this._hideScrollbar();
          this.stopAutoScroll();
        },
        onEnable: function() {
          true;
          this._registerEvent();
          this.node.on("size-changed", this._calculateBoundary, this);
          this.node.on("scale-changed", this._calculateBoundary, this);
          if (this.content) {
            this.content.on("size-changed", this._calculateBoundary, this);
            this.content.on("scale-changed", this._calculateBoundary, this);
          }
          this._showScrollbar();
        },
        update: function(dt) {
          this._autoScrolling && this._processAutoScrolling(dt);
        }
      });
      cc.ScrollView = module.exports = ScrollView;
    }), {
      "./CCViewGroup": 56
    } ],
    52: [ (function(require, module, exports) {
      var Base = require("./CCRendererUnderSG");
      var SpriteType = cc.Scale9Sprite.RenderingType;
      var FillType = cc.Scale9Sprite.FillType;
      var BlendFactor = cc.BlendFunc.BlendFactor;
      var SizeMode = cc.Enum({
        CUSTOM: 0,
        TRIMMED: 1,
        RAW: 2
      });
      var Sprite = cc.Class({
        name: "cc.Sprite",
        extends: Base,
        editor: false,
        ctor: function() {
          this._blendFunc = new cc.BlendFunc(this._srcBlendFactor, this._dstBlendFactor);
        },
        properties: {
          _spriteFrame: {
            default: null,
            type: cc.SpriteFrame
          },
          _type: SpriteType.SIMPLE,
          _sizeMode: SizeMode.TRIMMED,
          _fillType: 0,
          _fillCenter: cc.v2(0, 0),
          _fillStart: 0,
          _fillRange: 0,
          _isTrimmedMode: true,
          _srcBlendFactor: BlendFactor.SRC_ALPHA,
          _dstBlendFactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
          _atlas: {
            default: null,
            type: cc.SpriteAtlas,
            tooltip: false,
            editorOnly: true,
            visible: true,
            animatable: false
          },
          spriteFrame: {
            get: function() {
              return this._spriteFrame;
            },
            set: function(value, force) {
              var lastSprite = this._spriteFrame;
              false;
              if (lastSprite === value) return;
              this._spriteFrame = value;
              this._applySpriteFrame(lastSprite);
              false;
            },
            type: cc.SpriteFrame
          },
          type: {
            get: function() {
              return this._type;
            },
            set: function(value) {
              this._type = value;
              this._sgNode.setRenderingType(value);
            },
            type: SpriteType,
            animatable: false,
            tooltip: false
          },
          fillType: {
            get: function() {
              return this._fillType;
            },
            set: function(value) {
              this._fillType = value;
              this._sgNode && this._sgNode.setFillType(value);
            },
            type: FillType,
            tooltip: false
          },
          fillCenter: {
            get: function() {
              return this._fillCenter;
            },
            set: function(value) {
              this._fillCenter = cc.v2(value);
              this._sgNode && this._sgNode.setFillCenter(this._fillCenter);
            },
            tooltip: false
          },
          fillStart: {
            get: function() {
              return this._fillStart;
            },
            set: function(value) {
              this._fillStart = cc.clampf(value, -1, 1);
              this._sgNode && this._sgNode.setFillStart(value);
            },
            tooltip: false
          },
          fillRange: {
            get: function() {
              return this._fillRange;
            },
            set: function(value) {
              this._fillRange = cc.clampf(value, -1, 1);
              this._sgNode && this._sgNode.setFillRange(value);
            },
            tooltip: false
          },
          trim: {
            get: function() {
              return this._isTrimmedMode;
            },
            set: function(value) {
              if (this._isTrimmedMode !== value) {
                this._isTrimmedMode = value;
                this._sgNode.enableTrimmedContentSize(value);
              }
            },
            animatable: false,
            tooltip: false
          },
          srcBlendFactor: {
            get: function() {
              return this._srcBlendFactor;
            },
            set: function(value) {
              this._srcBlendFactor = value;
              this._blendFunc.src = value;
              this._sgNode.setBlendFunc(this._blendFunc);
            },
            animatable: false,
            type: BlendFactor,
            tooltip: false
          },
          dstBlendFactor: {
            get: function() {
              return this._dstBlendFactor;
            },
            set: function(value) {
              this._dstBlendFactor = value;
              this._blendFunc.dst = value;
              this._sgNode.setBlendFunc(this._blendFunc);
            },
            animatable: false,
            type: BlendFactor,
            tooltip: false
          },
          sizeMode: {
            get: function() {
              return this._sizeMode;
            },
            set: function(value) {
              this._sizeMode = value;
              value !== SizeMode.CUSTOM && this._applySpriteSize();
            },
            animatable: false,
            type: SizeMode,
            tooltip: false
          }
        },
        statics: {
          FillType: FillType,
          Type: SpriteType,
          SizeMode: SizeMode
        },
        setVisible: function(visible) {
          this.enabled = visible;
        },
        setInsetLeft: function(insetLeft) {
          this._sgNode.setInsetLeft(insetLeft);
        },
        getInsetLeft: function() {
          return this._sgNode.getInsetLeft();
        },
        setInsetTop: function(insetTop) {
          this._sgNode.setInsetTop(insetTop);
        },
        getInsetTop: function() {
          return this._sgNode.getInsetTop();
        },
        setInsetRight: function(insetRight) {
          this._sgNode.setInsetRight(insetRight);
        },
        getInsetRight: function() {
          return this._sgNode.getInsetRight();
        },
        setInsetBottom: function(insetBottom) {
          this._sgNode.setInsetBottom(insetBottom);
        },
        getInsetBottom: function() {
          return this._sgNode.getInsetBottom();
        },
        onEnable: function() {
          this._sgNode && this._spriteFrame && this._spriteFrame.textureLoaded() && this._sgNode.setVisible(true);
        },
        _applyAtlas: false,
        _applySpriteFrameInsets: function() {
          var spriteFrame = this._spriteFrame;
          var sgNode = this._sgNode;
          sgNode.setInsetTop(spriteFrame.insetTop);
          sgNode.setInsetBottom(spriteFrame.insetBottom);
          sgNode.setInsetRight(spriteFrame.insetRight);
          sgNode.setInsetLeft(spriteFrame.insetLeft);
        },
        _applySpriteSize: function() {
          if (this._spriteFrame) if (SizeMode.RAW === this._sizeMode) {
            var size = this._spriteFrame.getOriginalSize();
            this.node.setContentSize(size);
          } else if (SizeMode.TRIMMED === this._sizeMode) {
            var rect = this._spriteFrame.getRect();
            this.node.setContentSize(rect.width, rect.height);
          }
        },
        _onTextureLoaded: function(event) {
          var self = this;
          if (!self.isValid) return;
          var sgNode = self._sgNode;
          sgNode.setSpriteFrame(self._spriteFrame);
          self._applySpriteSize();
          self.enabledInHierarchy && !sgNode.isVisible() && sgNode.setVisible(true);
        },
        _applySpriteFrame: function(oldFrame, keepInsets) {
          var sgNode = this._sgNode;
          oldFrame && oldFrame.off && oldFrame.off("load", this._onTextureLoaded, this);
          var spriteFrame = this._spriteFrame;
          if (spriteFrame) {
            keepInsets || this._applySpriteFrameInsets();
            if (spriteFrame.textureLoaded()) this._onTextureLoaded(null); else {
              spriteFrame.once("load", this._onTextureLoaded, this);
              spriteFrame.ensureLoadTexture();
            }
          } else sgNode.setVisible(false);
          false;
        },
        _createSgNode: function() {
          return new cc.Scale9Sprite();
        },
        _initSgNode: function() {
          var sgNode = this._sgNode;
          var insetsChangedViaAPI = 0 !== sgNode.getInsetLeft() || 0 !== sgNode.getInsetRight() || 0 !== sgNode.getInsetTop() || 0 !== sgNode.getInsetBottom();
          this._applySpriteFrame(null, insetsChangedViaAPI);
          sgNode.setContentSize(this.node.getContentSize(true));
          this._applySpriteSize();
          sgNode.setRenderingType(this._type);
          sgNode.setFillType(this._fillType);
          sgNode.setFillCenter(this._fillCenter);
          sgNode.setFillStart(this._fillStart);
          sgNode.setFillRange(this._fillRange);
          sgNode.enableTrimmedContentSize(this._isTrimmedMode);
          this._blendFunc.src = this._srcBlendFactor;
          this._blendFunc.dst = this._dstBlendFactor;
          sgNode.setBlendFunc(this._blendFunc);
        },
        _resized: false
      });
      false;
      var misc = require("../utils/misc");
      var SameNameGetSets = [ "insetLeft", "insetTop", "insetRight", "insetBottom" ];
      var DiffNameGetSets = {
        type: [ null, "setRenderingType" ]
      };
      misc.propertyDefine(Sprite, SameNameGetSets, DiffNameGetSets);
      cc.Sprite = module.exports = Sprite;
    }), {
      "../utils/misc": 117,
      "./CCRendererUnderSG": 47
    } ],
    53: [ (function(require, module, exports) {
      var SpriteDistortion = cc.Class({
        name: "cc.SpriteDistortion",
        extends: require("./CCComponent"),
        editor: false,
        ctor: function() {
          this._spriteSGNode = null;
        },
        properties: {
          _distortionOffset: cc.v2(0, 0),
          offset: {
            get: function() {
              return this._distortionOffset;
            },
            set: function(value) {
              this._distortionOffset.x = value.x;
              this._distortionOffset.y = value.y;
              this._spriteSGNode && this._spriteSGNode.setDistortionOffset(this._distortionOffset);
            }
          },
          _distortionTiling: cc.v2(1, 1),
          tiling: {
            get: function() {
              return this._distortionTiling;
            },
            set: function(value) {
              this._distortionTiling.x = value.x;
              this._distortionTiling.y = value.y;
              this._spriteSGNode && this._spriteSGNode.setDistortionTiling(this._distortionTiling);
            }
          }
        },
        onEnable: function() {
          var sprite = this.node.getComponent("cc.Sprite");
          var sgNode = this._spriteSGNode = sprite && sprite._sgNode;
          if (this._spriteSGNode) {
            sgNode.setState(cc.Scale9Sprite.state.DISTORTION);
            sgNode.setDistortionOffset(this._distortionOffset);
            sgNode.setDistortionTiling(this._distortionTiling);
          }
        },
        onDisable: function() {
          this._spriteSGNode && this._spriteSGNode.setState(cc.Scale9Sprite.state.NORMAL);
          this._spriteSGNode = null;
        }
      });
      cc.SpriteDistortion = module.exports = SpriteDistortion;
    }), {
      "./CCComponent": 39
    } ],
    54: [ (function(require, module, exports) {
      var ComponentType = cc.Enum({
        NONE: 0,
        CHECKBOX: 1,
        TEXT_ATLAS: 2,
        SLIDER_BAR: 3,
        LIST_VIEW: 4,
        PAGE_VIEW: 5
      });
      var ListDirection = cc.Enum({
        VERTICAL: 0,
        HORIZONTAL: 1
      });
      var VerticalAlign = cc.Enum({
        TOP: 0,
        CENTER: 1,
        BOTTOM: 2
      });
      var HorizontalAlign = cc.Enum({
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2
      });
      var StudioComponent = cc.Class({
        name: "cc.StudioComponent",
        extends: cc.Component,
        editor: false,
        properties: false,
        statics: {
          ComponentType: ComponentType,
          ListDirection: ListDirection,
          VerticalAlign: VerticalAlign,
          HorizontalAlign: HorizontalAlign
        }
      });
      var PrefabHelper = require("../utils/prefab-helper");
      StudioComponent.PlaceHolder = cc.Class({
        name: "cc.StudioComponent.PlaceHolder",
        extends: cc.Component,
        properties: {
          _baseUrl: "",
          nestedPrefab: cc.Prefab
        },
        onLoad: function() {
          if (!this.nestedPrefab) {
            false;
            return;
          }
          this._replaceWithNestedPrefab();
        },
        _replaceWithNestedPrefab: function() {
          var node = this.node;
          var _prefab = node._prefab;
          _prefab.root = node;
          _prefab.asset = this.nestedPrefab;
          PrefabHelper.syncWithPrefab(node);
        }
      });
      cc.StudioComponent = module.exports = StudioComponent;
    }), {
      "../utils/prefab-helper": 119
    } ],
    55: [ (function(require, module, exports) {
      require("../videoplayer/CCSGVideoPlayer");
      var EventType = _ccsg.VideoPlayer.EventType;
      var ResourceType = cc.Enum({
        REMOTE: 0,
        LOCAL: 1
      });
      var VideoPlayer = cc.Class({
        name: "cc.VideoPlayer",
        extends: cc._RendererUnderSG,
        editor: false,
        properties: {
          _resourceType: ResourceType.REMOTE,
          resourceType: {
            tooltip: false,
            type: ResourceType,
            set: function(value) {
              this._resourceType = value;
              this._updateVideoSource();
            },
            get: function() {
              return this._resourceType;
            }
          },
          _remoteURL: "",
          remoteURL: {
            tooltip: false,
            type: cc.String,
            set: function(url) {
              this._remoteURL = url;
              this._updateVideoSource();
            },
            get: function() {
              return this._remoteURL;
            }
          },
          _clip: {
            default: null,
            url: cc.RawAsset
          },
          clip: {
            tooltip: false,
            get: function() {
              return this._clip;
            },
            set: function(value) {
              "string" !== (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && (value = "");
              this._clip = value;
              this._updateVideoSource();
            },
            url: cc.RawAsset
          },
          currentTime: {
            tooltip: false,
            type: cc.Float,
            set: function(time) {
              this._sgNode && this._sgNode.seekTo(time);
            },
            get: function() {
              if (this._sgNode) return this._sgNode.currentTime();
              return -1;
            }
          },
          keepAspectRatio: {
            tooltip: false,
            default: true,
            type: cc.Boolean,
            notify: function() {
              this._sgNode.setKeepAspectRatioEnabled(this.keepAspectRatio);
            }
          },
          isFullscreen: {
            tooltip: false,
            default: false,
            type: cc.Boolean,
            notify: function() {
              this._sgNode.setFullScreenEnabled(this.isFullscreen);
            }
          },
          videoPlayerEvent: {
            default: [],
            type: cc.Component.EventHandler
          }
        },
        statics: {
          EventType: EventType,
          ResourceType: ResourceType
        },
        onLoad: function() {
          true;
          cc.sys.os !== cc.sys.OS_OSX && cc.sys.os !== cc.sys.OS_WINDOWS || (this.enabled = false);
        },
        _createSgNode: function() {
          true;
          if (cc.sys.os === cc.sys.OS_OSX || cc.sys.os === cc.sys.OS_WINDOWS) {
            console.log("VideoPlayer is not supported on Mac and Windows!");
            return null;
          }
          return new _ccsg.VideoPlayer();
        },
        _updateVideoSource: function() {
          var sgNode = this._sgNode;
          this.resourceType === ResourceType.REMOTE ? sgNode.setURL(this.remoteURL) : sgNode.setURL(this._clip || "");
        },
        _initSgNode: function() {
          var sgNode = this._sgNode;
          if (sgNode) {
            false;
            this._updateVideoSource();
            sgNode.seekTo(this.currentTime);
            sgNode.setKeepAspectRatioEnabled(this.keepAspectRatio);
            sgNode.setFullScreenEnabled(this.isFullscreen);
            sgNode.setContentSize(this.node.getContentSize());
            this.pause();
            true;
            sgNode.setEventListener(EventType.PLAYING, this.onPlaying.bind(this));
            sgNode.setEventListener(EventType.PAUSED, this.onPasued.bind(this));
            sgNode.setEventListener(EventType.STOPPED, this.onStopped.bind(this));
            sgNode.setEventListener(EventType.COMPLETED, this.onCompleted.bind(this));
            sgNode.setEventListener(EventType.META_LOADED, this.onMetaLoaded.bind(this));
            sgNode.setEventListener(EventType.CLICKED, this.onClicked.bind(this));
            sgNode.setEventListener(EventType.READY_TO_PLAY, this.onReadyToPlay.bind(this));
          }
        },
        onReadyToPlay: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.READY_TO_PLAY);
          this.node.emit("ready-to-play", this);
        },
        onMetaLoaded: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.META_LOADED);
          this.node.emit("meta-loaded", this);
        },
        onClicked: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.CLICKED);
          this.node.emit("clicked", this);
        },
        onPlaying: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.PLAYING);
          this.node.emit("playing", this);
        },
        onPasued: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.PAUSED);
          this.node.emit("paused", this);
        },
        onStopped: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.STOPPED);
          this.node.emit("stopped", this);
        },
        onCompleted: function() {
          cc.Component.EventHandler.emitEvents(this.videoPlayerEvent, this, EventType.COMPLETED);
          this.node.emit("completed", this);
        },
        play: function() {
          this._sgNode && this._sgNode.play();
        },
        resume: function() {
          this._sgNode && this._sgNode.resume();
        },
        pause: function() {
          this._sgNode && this._sgNode.pause();
        },
        stop: function() {
          this._sgNode && this._sgNode.stop();
        },
        getDuration: function() {
          if (this._sgNode) return this._sgNode.duration();
          return -1;
        },
        isPlaying: function() {
          if (this._sgNode) return this._sgNode.isPlaying();
          return false;
        }
      });
      cc.VideoPlayer = module.exports = VideoPlayer;
    }), {
      "../videoplayer/CCSGVideoPlayer": 1
    } ],
    56: [ (function(require, module, exports) {
      var ViewGroup = cc.Class({
        name: "cc.ViewGroup",
        extends: require("./CCComponent")
      });
      cc.ViewGroup = module.exports = ViewGroup;
    }), {
      "./CCComponent": 39
    } ],
    57: [ (function(require, module, exports) {
      require("../webview/CCSGWebView");
      var EventType = _ccsg.WebView.EventType;
      function emptyCallback() {}
      var WebView = cc.Class({
        name: "cc.WebView",
        extends: cc._RendererUnderSG,
        editor: false,
        properties: {
          _useOriginalSize: true,
          _url: "",
          url: {
            type: String,
            tooltip: false,
            get: function() {
              return this._url;
            },
            set: function(url) {
              this._url = url;
              var sgNode = this._sgNode;
              sgNode && sgNode.loadURL(url);
            }
          },
          webviewEvents: {
            default: [],
            type: cc.Component.EventHandler
          }
        },
        statics: {
          EventType: EventType
        },
        onLoad: (true, function() {
          cc.sys.os !== cc.sys.OS_OSX && cc.sys.os !== cc.sys.OS_WINDOWS || (this.enabled = false);
        }),
        _createSgNode: function() {
          true;
          if (cc.sys.os === cc.sys.OS_OSX || cc.sys.os === cc.sys.OS_WINDOWS) {
            console.log("WebView is not supported on Mac and Windows!");
            return null;
          }
          return new _ccsg.WebView();
        },
        _initSgNode: function() {
          var sgNode = this._sgNode;
          if (!sgNode) return;
          false;
          sgNode.loadURL(this._url);
          false;
          sgNode.setContentSize(this.node.getContentSize());
        },
        onEnable: function() {
          this._super();
          true;
          var sgNode = this._sgNode;
          sgNode.setEventListener(EventType.LOADED, this._onWebViewLoaded.bind(this));
          sgNode.setEventListener(EventType.LOADING, this._onWebViewLoading.bind(this));
          sgNode.setEventListener(EventType.ERROR, this._onWebViewLoadError.bind(this));
        },
        onDisable: function() {
          this._super();
          true;
          var sgNode = this._sgNode;
          sgNode.setEventListener(EventType.LOADED, emptyCallback);
          sgNode.setEventListener(EventType.LOADING, emptyCallback);
          sgNode.setEventListener(EventType.ERROR, emptyCallback);
        },
        _onWebViewLoaded: function() {
          cc.Component.EventHandler.emitEvents(this.webviewEvents, this, EventType.LOADED);
          this.node.emit("loaded", this);
        },
        _onWebViewLoading: function() {
          cc.Component.EventHandler.emitEvents(this.webviewEvents, this, EventType.LOADING);
          this.node.emit("loading", this);
          return true;
        },
        _onWebViewLoadError: function() {
          cc.Component.EventHandler.emitEvents(this.webviewEvents, this, EventType.ERROR);
          this.node.emit("error", this);
        },
        setJavascriptInterfaceScheme: function(scheme) {
          this._sgNode && this._sgNode.setJavascriptInterfaceScheme(scheme);
        },
        setOnJSCallback: function(callback) {
          this._sgNode && this._sgNode.setOnJSCallback(callback);
        },
        evaluateJS: function(str) {
          this._sgNode && this._sgNode.evaluateJS(str);
        }
      });
      cc.WebView = module.exports = WebView;
    }), {
      "../webview/CCSGWebView": 1
    } ],
    58: [ (function(require, module, exports) {
      var WidgetManager = require("../base-ui/CCWidgetManager");
      var AlignFlags = WidgetManager._AlignFlags;
      var TOP = AlignFlags.TOP;
      var MID = AlignFlags.MID;
      var BOT = AlignFlags.BOT;
      var LEFT = AlignFlags.LEFT;
      var CENTER = AlignFlags.CENTER;
      var RIGHT = AlignFlags.RIGHT;
      var TOP_BOT = TOP | BOT;
      var LEFT_RIGHT = LEFT | RIGHT;
      var Widget = cc.Class({
        name: "cc.Widget",
        extends: require("./CCComponent"),
        editor: false,
        properties: {
          target: {
            get: function() {
              return this._target;
            },
            set: function(value) {
              this._target = value;
              false;
            },
            type: cc.Node,
            tooltip: false
          },
          isAlignTop: {
            get: function() {
              return (this._alignFlags & TOP) > 0;
            },
            set: function(value) {
              this._setAlign(TOP, value);
            },
            animatable: false,
            tooltip: false
          },
          isAlignVerticalCenter: {
            get: function() {
              return (this._alignFlags & MID) > 0;
            },
            set: function(value) {
              if (value) {
                this.isAlignTop = false;
                this.isAlignBottom = false;
                this._alignFlags |= MID;
              } else this._alignFlags &= ~MID;
            },
            animatable: false,
            tooltip: false
          },
          isAlignBottom: {
            get: function() {
              return (this._alignFlags & BOT) > 0;
            },
            set: function(value) {
              this._setAlign(BOT, value);
            },
            animatable: false,
            tooltip: false
          },
          isAlignLeft: {
            get: function() {
              return (this._alignFlags & LEFT) > 0;
            },
            set: function(value) {
              this._setAlign(LEFT, value);
            },
            animatable: false,
            tooltip: false
          },
          isAlignHorizontalCenter: {
            get: function() {
              return (this._alignFlags & CENTER) > 0;
            },
            set: function(value) {
              if (value) {
                this.isAlignLeft = false;
                this.isAlignRight = false;
                this._alignFlags |= CENTER;
              } else this._alignFlags &= ~CENTER;
            },
            animatable: false,
            tooltip: false
          },
          isAlignRight: {
            get: function() {
              return (this._alignFlags & RIGHT) > 0;
            },
            set: function(value) {
              this._setAlign(RIGHT, value);
            },
            animatable: false,
            tooltip: false
          },
          isStretchWidth: {
            get: function() {
              return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
            },
            visible: false
          },
          isStretchHeight: {
            get: function() {
              return (this._alignFlags & TOP_BOT) === TOP_BOT;
            },
            visible: false
          },
          top: {
            get: function() {
              return this._top;
            },
            set: function(value) {
              this._top = value;
            },
            tooltip: false
          },
          bottom: {
            get: function() {
              return this._bottom;
            },
            set: function(value) {
              this._bottom = value;
            },
            tooltip: false
          },
          left: {
            get: function() {
              return this._left;
            },
            set: function(value) {
              this._left = value;
            },
            tooltip: false
          },
          right: {
            get: function() {
              return this._right;
            },
            set: function(value) {
              this._right = value;
            },
            tooltip: false
          },
          horizontalCenter: {
            get: function() {
              return this._horizontalCenter;
            },
            set: function(value) {
              this._horizontalCenter = value;
            },
            tooltip: false
          },
          verticalCenter: {
            get: function() {
              return this._verticalCenter;
            },
            set: function(value) {
              this._verticalCenter = value;
            },
            tooltip: false
          },
          isAbsoluteHorizontalCenter: {
            get: function() {
              return this._isAbsHorizontalCenter;
            },
            set: function(value) {
              this._isAbsHorizontalCenter = value;
            },
            animatable: false
          },
          isAbsoluteVerticalCenter: {
            get: function() {
              return this._isAbsVerticalCenter;
            },
            set: function(value) {
              this._isAbsVerticalCenter = value;
            },
            animatable: false
          },
          isAbsoluteTop: {
            get: function() {
              return this._isAbsTop;
            },
            set: function(value) {
              this._isAbsTop = value;
            },
            animatable: false
          },
          isAbsoluteBottom: {
            get: function() {
              return this._isAbsBottom;
            },
            set: function(value) {
              this._isAbsBottom = value;
            },
            animatable: false
          },
          isAbsoluteLeft: {
            get: function() {
              return this._isAbsLeft;
            },
            set: function(value) {
              this._isAbsLeft = value;
            },
            animatable: false
          },
          isAbsoluteRight: {
            get: function() {
              return this._isAbsRight;
            },
            set: function(value) {
              this._isAbsRight = value;
            },
            animatable: false
          },
          isAlignOnce: {
            default: true,
            tooltip: false,
            displayName: "AlignOnce"
          },
          _target: null,
          _alignFlags: 0,
          _left: 0,
          _right: 0,
          _top: 0,
          _bottom: 0,
          _verticalCenter: 0,
          _horizontalCenter: 0,
          _isAbsLeft: true,
          _isAbsRight: true,
          _isAbsTop: true,
          _isAbsBottom: true,
          _isAbsHorizontalCenter: true,
          _isAbsVerticalCenter: true,
          _originalWidth: 0,
          _originalHeight: 0
        },
        onEnable: function() {
          WidgetManager.add(this);
        },
        onDisable: function() {
          WidgetManager.remove(this);
        },
        _setAlign: function(flag, isAlign) {
          var current = (this._alignFlags & flag) > 0;
          if (isAlign == current) return;
          var isHorizontal = (flag & LEFT_RIGHT) > 0;
          if (isAlign) {
            this._alignFlags |= flag;
            if (isHorizontal) {
              this.isAlignHorizontalCenter = false;
              if (this.isStretchWidth) {
                this._originalWidth = this.node.width;
                false;
              }
            } else {
              this.isAlignVerticalCenter = false;
              if (this.isStretchHeight) {
                this._originalHeight = this.node.height;
                false;
              }
            }
            false;
          } else {
            isHorizontal ? this.isStretchWidth && (this.node.width = this._originalWidth) : this.isStretchHeight && (this.node.height = this._originalHeight);
            this._alignFlags &= ~flag;
          }
        },
        updateAlignment: function() {
          WidgetManager.updateAlignment(this.node);
        }
      });
      cc.Widget = module.exports = Widget;
    }), {
      "../base-ui/CCWidgetManager": 30,
      "./CCComponent": 39
    } ],
    59: [ (function(require, module, exports) {
      require("./CCComponent");
      require("./CCRendererInSG");
      require("./CCRendererUnderSG");
      require("./CCComponentEventHandler");
      require("./missing-script");
      module.exports = [ require("./CCSprite"), require("./CCWidget"), require("./CCCanvas"), require("./CCAudioSource"), require("./CCAnimation"), require("./CCButton"), require("./CCLabel"), require("./CCProgressBar"), require("./CCMask"), require("./CCScrollBar"), require("./CCScrollView"), require("./CCPageViewIndicator"), require("./CCPageView"), require("./CCSlider"), require("./CCLayout"), require("./CCEditBox"), require("./CCVideoPlayer"), require("./CCWebView"), require("./CCSpriteDistortion"), require("./CCLabelOutline"), require("./CCRichText"), require("./CCToggleContainer"), require("./CCToggleGroup"), require("./CCToggle"), require("./CCBlockInputEvents") ];
    }), {
      "./CCAnimation": 34,
      "./CCAudioSource": 35,
      "./CCBlockInputEvents": 36,
      "./CCButton": 37,
      "./CCCanvas": 38,
      "./CCComponent": 39,
      "./CCComponentEventHandler": 40,
      "./CCEditBox": 41,
      "./CCLabel": 42,
      "./CCLabelOutline": 43,
      "./CCLayout": 44,
      "./CCMask": 45,
      "./CCPageView": 1,
      "./CCPageViewIndicator": 1,
      "./CCProgressBar": 1,
      "./CCRendererInSG": 46,
      "./CCRendererUnderSG": 47,
      "./CCRichText": 48,
      "./CCScrollBar": 50,
      "./CCScrollView": 51,
      "./CCSlider": 1,
      "./CCSprite": 52,
      "./CCSpriteDistortion": 53,
      "./CCToggle": 1,
      "./CCToggleContainer": 1,
      "./CCToggleGroup": 1,
      "./CCVideoPlayer": 55,
      "./CCWebView": 57,
      "./CCWidget": 58,
      "./missing-script": 60
    } ],
    60: [ (function(require, module, exports) {
      var JS = cc.js;
      var BUILTIN_CLASSID_RE = require("../utils/misc").BUILTIN_CLASSID_RE;
      var MissingClass = cc.Class({
        name: "cc.MissingClass",
        properties: {
          _$erialized: {
            default: null,
            visible: false,
            editorOnly: true
          }
        }
      });
      var MissingScript = cc.Class({
        name: "cc.MissingScript",
        extends: cc.Component,
        editor: {
          inspector: "packages://inspector/inspectors/comps/missing-script.js"
        },
        properties: {
          compiled: {
            default: false,
            serializable: false
          },
          _$erialized: {
            default: null,
            visible: false,
            editorOnly: true
          }
        },
        ctor: false,
        statics: {
          safeFindClass: function(id, data) {
            var cls = JS._getClassById(id);
            if (cls) return cls;
            if (id) {
              cc.deserialize.reportMissingClass(id);
              return MissingScript.getMissingWrapper(id, data);
            }
            return null;
          },
          getMissingWrapper: function(id, data) {
            return data.node && (/^[0-9a-zA-Z+/]{23}$/.test(id) || BUILTIN_CLASSID_RE.test(id)) ? MissingScript : MissingClass;
          }
        },
        onLoad: function() {
          cc.warnID(4600, this.node.name);
        }
      });
      cc._MissingScript = module.exports = MissingScript;
    }), {
      "../utils/misc": 117
    } ],
    61: [ (function(require, module, exports) {
      var JS = cc.js;
      require("../event/event");
      var EventMouse = function(eventType, bubbles) {
        cc.Event.call(this, cc.Event.MOUSE, bubbles);
        this._eventType = eventType;
        this._button = 0;
        this._x = 0;
        this._y = 0;
        this._prevX = 0;
        this._prevY = 0;
        this._scrollX = 0;
        this._scrollY = 0;
      };
      JS.extend(EventMouse, cc.Event);
      var proto = EventMouse.prototype;
      proto.setScrollData = function(scrollX, scrollY) {
        this._scrollX = scrollX;
        this._scrollY = scrollY;
      };
      proto.getScrollX = function() {
        return this._scrollX;
      };
      proto.getScrollY = function() {
        return this._scrollY;
      };
      proto.setLocation = function(x, y) {
        this._x = x;
        this._y = y;
      };
      proto.getLocation = function() {
        return {
          x: this._x,
          y: this._y
        };
      };
      proto.getLocationInView = function() {
        return {
          x: this._x,
          y: cc.view._designResolutionSize.height - this._y
        };
      };
      proto._setPrevCursor = function(x, y) {
        this._prevX = x;
        this._prevY = y;
      };
      proto.getPreviousLocation = function() {
        return {
          x: this._prevX,
          y: this._prevY
        };
      };
      proto.getDelta = function() {
        return {
          x: this._x - this._prevX,
          y: this._y - this._prevY
        };
      };
      proto.getDeltaX = function() {
        return this._x - this._prevX;
      };
      proto.getDeltaY = function() {
        return this._y - this._prevY;
      };
      proto.setButton = function(button) {
        this._button = button;
      };
      proto.getButton = function() {
        return this._button;
      };
      proto.getLocationX = function() {
        return this._x;
      };
      proto.getLocationY = function() {
        return this._y;
      };
      EventMouse.NONE = 0;
      EventMouse.DOWN = 1;
      EventMouse.UP = 2;
      EventMouse.MOVE = 3;
      EventMouse.SCROLL = 4;
      EventMouse.BUTTON_LEFT = 0;
      EventMouse.BUTTON_RIGHT = 2;
      EventMouse.BUTTON_MIDDLE = 1;
      EventMouse.BUTTON_4 = 3;
      EventMouse.BUTTON_5 = 4;
      EventMouse.BUTTON_6 = 5;
      EventMouse.BUTTON_7 = 6;
      EventMouse.BUTTON_8 = 7;
      var EventTouch = function(touchArr, bubbles) {
        cc.Event.call(this, cc.Event.TOUCH, bubbles);
        this._eventCode = 0;
        this._touches = touchArr || [];
        this.touch = null;
        this.currentTouch = null;
      };
      JS.extend(EventTouch, cc.Event);
      proto = EventTouch.prototype;
      proto.getEventCode = function() {
        return this._eventCode;
      };
      proto.getTouches = function() {
        return this._touches;
      };
      proto._setEventCode = function(eventCode) {
        this._eventCode = eventCode;
      };
      proto._setTouches = function(touches) {
        this._touches = touches;
      };
      proto.setLocation = function(x, y) {
        this.touch && this.touch.setTouchInfo(this.touch.getID(), x, y);
      };
      proto.getLocation = function() {
        return this.touch ? this.touch.getLocation() : cc.v2();
      };
      proto.getLocationInView = function() {
        return this.touch ? this.touch.getLocationInView() : cc.v2();
      };
      proto.getPreviousLocation = function() {
        return this.touch ? this.touch.getPreviousLocation() : cc.v2();
      };
      proto.getStartLocation = function() {
        return this.touch ? this.touch.getStartLocation() : cc.v2();
      };
      proto.getID = function() {
        return this.touch ? this.touch.getID() : null;
      };
      proto.getDelta = function() {
        return this.touch ? this.touch.getDelta() : cc.v2();
      };
      proto.getDeltaX = function() {
        return this.touch ? this.touch.getDelta().x : 0;
      };
      proto.getDeltaY = function() {
        return this.touch ? this.touch.getDelta().y : 0;
      };
      proto.getLocationX = function() {
        return this.touch ? this.touch.getLocationX() : 0;
      };
      proto.getLocationY = function() {
        return this.touch ? this.touch.getLocationY() : 0;
      };
      EventTouch.MAX_TOUCHES = 5;
      EventTouch.BEGAN = 0;
      EventTouch.MOVED = 1;
      EventTouch.ENDED = 2;
      EventTouch.CANCELED = 3;
      var EventAcceleration = function(acc, bubbles) {
        cc.Event.call(this, cc.Event.ACCELERATION, bubbles);
        this.acc = acc;
      };
      JS.extend(EventAcceleration, cc.Event);
      var EventKeyboard = function(keyCode, isPressed, bubbles) {
        cc.Event.call(this, cc.Event.KEYBOARD, bubbles);
        this.keyCode = keyCode;
        this.isPressed = isPressed;
      };
      JS.extend(EventKeyboard, cc.Event);
      cc.Event.EventMouse = EventMouse;
      cc.Event.EventTouch = EventTouch;
      cc.Event.EventAcceleration = EventAcceleration;
      cc.Event.EventKeyboard = EventKeyboard;
      module.exports = cc.Event;
    }), {
      "../event/event": 65
    } ],
    62: [ (function(require, module, exports) {
      require("./CCEvent");
      var eventManager;
      true;
      eventManager = cc.eventManager;
      module.exports = eventManager;
    }), {
      "./CCEvent": 61,
      "./CCEventListener": 1,
      "./CCEventManager": 1,
      "./CCTouch": 1
    } ],
    63: [ (function(require, module, exports) {
      var JS = cc.js;
      var CallbacksHandler = require("../platform/callbacks-invoker").CallbacksHandler;
      function EventListeners() {
        CallbacksHandler.call(this);
      }
      JS.extend(EventListeners, CallbacksHandler);
      EventListeners.prototype.invoke = function(event, captureListeners) {
        var key = event.type;
        var list = this._callbackTable[key];
        if (list) {
          var rootInvoker = !list.isInvoking;
          list.isInvoking = true;
          var callbacks = list.callbacks;
          var targets = list.targets;
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            var callback = callbacks[i];
            if (callback) {
              var target = targets[i] || event.currentTarget;
              callback.call(target, event, captureListeners);
              if (event._propagationImmediateStopped) break;
            }
          }
          if (rootInvoker) {
            list.isInvoking = false;
            list.containCanceled && list.purgeCanceled();
          }
        }
      };
      module.exports = EventListeners;
      false;
    }), {
      "../platform/callbacks-invoker": 100
    } ],
    64: [ (function(require, module, exports) {
      var EventListeners = require("./event-listeners");
      require("./event");
      var JS = cc.js;
      var fastRemove = JS.array.fastRemove;
      var cachedArray = new Array(16);
      cachedArray.length = 0;
      var CAPTURING_FLAG = 2;
      var BUBBLING_FLAG = 4;
      var _doDispatchEvent = function(owner, event) {
        var target, i;
        event.target = owner;
        cachedArray.length = 0;
        owner._getCapturingTargets(event.type, cachedArray);
        event.eventPhase = 1;
        for (i = cachedArray.length - 1; i >= 0; --i) {
          target = cachedArray[i];
          if (target._isTargetActive(event.type) && target._capturingListeners) {
            event.currentTarget = target;
            target._capturingListeners.invoke(event, cachedArray);
            if (event._propagationStopped) {
              cachedArray.length = 0;
              return;
            }
          }
        }
        cachedArray.length = 0;
        if (owner._isTargetActive(event.type)) {
          event.eventPhase = 2;
          event.currentTarget = owner;
          owner._capturingListeners && owner._capturingListeners.invoke(event);
          !event._propagationImmediateStopped && owner._bubblingListeners && owner._bubblingListeners.invoke(event);
        }
        if (!event._propagationStopped && event.bubbles) {
          owner._getBubblingTargets(event.type, cachedArray);
          event.eventPhase = 3;
          for (i = 0; i < cachedArray.length; ++i) {
            target = cachedArray[i];
            if (target._isTargetActive(event.type) && target._bubblingListeners) {
              event.currentTarget = target;
              target._bubblingListeners.invoke(event);
              if (event._propagationStopped) {
                cachedArray.length = 0;
                return;
              }
            }
          }
        }
        cachedArray.length = 0;
      };
      function EventTarget() {
        this._capturingListeners = null;
        this._bubblingListeners = null;
        this._hasListenerCache = null;
      }
      var proto = EventTarget.prototype;
      proto._addEventFlag = function(type, listeners, useCapture) {
        var cache = this._hasListenerCache;
        cache || (cache = this._hasListenerCache = cc.js.createMap());
        void 0 === cache[type] && (cache[type] = 0);
        var flag = useCapture ? CAPTURING_FLAG : BUBBLING_FLAG;
        cache[type] |= flag;
      };
      proto._purgeEventFlag = function(type, listeners, useCapture) {
        var cache = this._hasListenerCache;
        if (!cache || listeners.has(type)) return;
        var flag = useCapture ? CAPTURING_FLAG : BUBBLING_FLAG;
        cache[type] &= ~flag;
        0 === cache[type] && delete cache[type];
      };
      proto._resetFlagForTarget = function(target, listeners, useCapture) {
        var cache = this._hasListenerCache;
        if (!cache) return;
        var flag = useCapture ? CAPTURING_FLAG : BUBBLING_FLAG;
        for (var key in cache) if (!listeners.has(key)) {
          cache[key] &= ~flag;
          0 === cache[key] && delete cache[key];
        }
      };
      proto.hasEventListener = function(type, checkCapture) {
        var cache = this._hasListenerCache;
        if (!cache) return false;
        var flag = checkCapture ? CAPTURING_FLAG : BUBBLING_FLAG;
        return (cache[type] & flag) > 0;
      };
      proto.on = function(type, callback, target, useCapture) {
        if ("boolean" === (__typeofVal = typeof target, "object" === __typeofVal ? __realTypeOfObj(target) : __typeofVal)) {
          useCapture = target;
          target = void 0;
        } else useCapture = !!useCapture;
        if (!callback) {
          cc.errorID(6800);
          return;
        }
        var listeners = null;
        listeners = useCapture ? this._capturingListeners = this._capturingListeners || new EventListeners() : this._bubblingListeners = this._bubblingListeners || new EventListeners();
        if (!listeners.has(type, callback, target)) {
          listeners.add(type, callback, target);
          target && target.__eventTargets && target.__eventTargets.push(this);
          this._addEventFlag(type, listeners, useCapture);
        }
        return callback;
      };
      proto.off = function(type, callback, target, useCapture) {
        if ("boolean" === (__typeofVal = typeof target, "object" === __typeofVal ? __realTypeOfObj(target) : __typeofVal)) {
          useCapture = target;
          target = void 0;
        } else useCapture = !!useCapture;
        if (callback) {
          var listeners = useCapture ? this._capturingListeners : this._bubblingListeners;
          if (listeners) {
            listeners.remove(type, callback, target);
            target && target.__eventTargets && fastRemove(target.__eventTargets, this);
            this._purgeEventFlag(type, listeners, useCapture);
          }
        } else {
          this._capturingListeners && this._capturingListeners.removeAll(type);
          this._bubblingListeners && this._bubblingListeners.removeAll(type);
          this._hasListenerCache && delete this._hasListenerCache[type];
        }
      };
      proto.targetOff = function(target) {
        if (this._capturingListeners) {
          this._capturingListeners.removeAll(target);
          this._resetFlagForTarget(target, this._capturingListeners, true);
        }
        if (this._bubblingListeners) {
          this._bubblingListeners.removeAll(target);
          this._resetFlagForTarget(target, this._bubblingListeners, false);
        }
      };
      proto.once = function(type, callback, target, useCapture) {
        var eventType_hasOnceListener = "__ONCE_FLAG:" + type;
        var listeners = useCapture ? this._capturingListeners : this._bubblingListeners;
        var hasOnceListener = listeners && listeners.has(eventType_hasOnceListener, callback, target);
        if (!hasOnceListener) {
          var self = this;
          var onceWrapper = function(event) {
            self.off(type, onceWrapper, target, useCapture);
            listeners.remove(eventType_hasOnceListener, callback, target);
            callback.call(this, event);
          };
          this.on(type, onceWrapper, target, useCapture);
          listeners || (listeners = useCapture ? this._capturingListeners : this._bubblingListeners);
          listeners.add(eventType_hasOnceListener, callback, target);
        }
      };
      proto.dispatchEvent = function(event) {
        _doDispatchEvent(this, event);
        cachedArray.length = 0;
      };
      proto.emit = function(message, detail) {
        false;
        var cache = this._hasListenerCache;
        if (!cache) return;
        var flag = cache[message];
        if (!flag) return;
        var event = cc.Event.EventCustom.get(message);
        event.detail = detail;
        event.eventPhase = 2;
        event.target = event.currentTarget = this;
        var capturingListeners = this._capturingListeners;
        capturingListeners && flag & CAPTURING_FLAG && capturingListeners.invoke(event);
        var bubblingListeners = this._bubblingListeners;
        bubblingListeners && flag & BUBBLING_FLAG && !event._propagationImmediateStopped && bubblingListeners.invoke(event);
        cc.Event.EventCustom.put(event);
      };
      proto._isTargetActive = function(type) {
        return true;
      };
      proto._getCapturingTargets = function(type, array) {};
      proto._getBubblingTargets = function(type, array) {};
      EventTarget.prototype._EventTargetOn = EventTarget.prototype.on;
      EventTarget.prototype._EventTargetOnce = EventTarget.prototype.once;
      EventTarget.prototype._EventTargetOff = EventTarget.prototype.off;
      EventTarget.prototype._EventTargetTargetOff = EventTarget.prototype.targetOff;
      cc.EventTarget = module.exports = EventTarget;
    }), {
      "./event": 65,
      "./event-listeners": 63
    } ],
    65: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      cc.Event = function(type, bubbles) {
        this.type = type;
        this.bubbles = !!bubbles;
        this.target = null;
        this.currentTarget = null;
        this.eventPhase = 0;
        this._propagationStopped = false;
        this._propagationImmediateStopped = false;
      };
      cc.Event.prototype = {
        constructor: cc.Event,
        unuse: function() {
          this.type = cc.Event.NO_TYPE;
          this.target = null;
          this.currentTarget = null;
          this.eventPhase = cc.Event.NONE;
          this._propagationStopped = false;
          this._propagationImmediateStopped = false;
        },
        reuse: function(type, bubbles) {
          this.type = type;
          this.bubbles = bubbles || false;
        },
        stopPropagation: function() {
          this._propagationStopped = true;
        },
        stopPropagationImmediate: function() {
          this._propagationImmediateStopped = true;
        },
        isStopped: function() {
          return this._propagationStopped || this._propagationImmediateStopped;
        },
        getCurrentTarget: function() {
          return this.currentTarget;
        },
        getType: function() {
          return this.type;
        }
      };
      cc.Event.NO_TYPE = "no_type";
      cc.Event.TOUCH = "touch";
      cc.Event.MOUSE = "mouse";
      cc.Event.KEYBOARD = "keyboard";
      cc.Event.ACCELERATION = "acceleration";
      cc.Event.NONE = 0;
      cc.Event.CAPTURING_PHASE = 1;
      cc.Event.AT_TARGET = 2;
      cc.Event.BUBBLING_PHASE = 3;
      var EventCustom = function(type, bubbles) {
        cc.Event.call(this, type, bubbles);
        this.detail = null;
      };
      JS.extend(EventCustom, cc.Event);
      EventCustom.prototype.reset = EventCustom;
      EventCustom.prototype.setUserData = function(data) {
        this.detail = data;
      };
      EventCustom.prototype.getUserData = function() {
        return this.detail;
      };
      EventCustom.prototype.getEventName = cc.Event.prototype.getType;
      var MAX_POOL_SIZE = 10;
      var _eventPool = new JS.Pool(MAX_POOL_SIZE);
      EventCustom.put = function(event) {
        _eventPool.put(event);
      };
      EventCustom.get = function(type, bubbles) {
        var event = _eventPool._get();
        event ? event.reset(type, bubbles) : event = new EventCustom(type, bubbles);
        return event;
      };
      cc.Event.EventCustom = EventCustom;
      module.exports = cc.Event;
    }), {
      "../platform/js": 107
    } ],
    66: [ (function(require, module, exports) {
      require("./event");
      require("./event-listeners");
      require("./event-target");
      require("./system-event");
    }), {
      "./event": 65,
      "./event-listeners": 63,
      "./event-target": 64,
      "./system-event": 67
    } ],
    67: [ (function(require, module, exports) {
      var EventTarget = require("../event/event-target");
      var eventManager = require("../event-manager");
      var inputManger;
      true;
      inputManger = cc.inputManager;
      var EventType = cc.Enum({
        KEY_DOWN: "keydown",
        KEY_UP: "keyup",
        DEVICEMOTION: "devicemotion"
      });
      var keyboardListener = null;
      var accelerationListener = null;
      var keyboardListenerAddFrame = 0;
      var SystemEvent = cc.Class({
        name: "SystemEvent",
        extends: EventTarget,
        statics: {
          EventType: EventType
        },
        setAccelerometerEnabled: function(isEnable) {
          inputManger.setAccelerometerEnabled(isEnable);
        },
        setAccelerometerInterval: function(interval) {
          inputManger.setAccelerometerInterval(interval);
        },
        on: function(type, callback, target, useCapture) {
          this._super(type, callback, target, useCapture);
          if (type === EventType.KEY_DOWN || type === EventType.KEY_UP) {
            keyboardListener || (keyboardListener = cc.EventListener.create({
              event: cc.EventListener.KEYBOARD,
              onKeyPressed: function(keyCode, event) {
                event.type = EventType.KEY_DOWN;
                true;
                event.keyCode = keyCode;
                event.isPressed = true;
                cc.systemEvent.dispatchEvent(event);
              },
              onKeyReleased: function(keyCode, event) {
                event.type = EventType.KEY_UP;
                true;
                event.keyCode = keyCode;
                event.isPressed = false;
                cc.systemEvent.dispatchEvent(event);
              }
            }));
            if (!eventManager.hasEventListener(cc._EventListenerKeyboard.LISTENER_ID)) {
              var currentFrame = cc.director.getTotalFrames();
              if (currentFrame !== keyboardListenerAddFrame) {
                eventManager.addListener(keyboardListener, 1);
                keyboardListenerAddFrame = currentFrame;
              }
            }
          }
          if (type === EventType.DEVICEMOTION) {
            accelerationListener || (accelerationListener = cc.EventListener.create({
              event: cc.EventListener.ACCELERATION,
              callback: function(acc, event) {
                event.type = EventType.DEVICEMOTION;
                true;
                event.acc = acc;
                cc.systemEvent.dispatchEvent(event);
              }
            }));
            eventManager.hasEventListener(cc._EventListenerAcceleration.LISTENER_ID) || eventManager.addListener(accelerationListener, 1);
          }
        },
        off: function(type, callback, target, useCapture) {
          this._super(type, callback, target, useCapture);
          if (keyboardListener && (type === EventType.KEY_DOWN || type === EventType.KEY_UP)) {
            var hasKeyDownEventListener = this.hasEventListener(EventType.KEY_DOWN);
            var hasKeyUpEventListener = this.hasEventListener(EventType.KEY_UP);
            hasKeyDownEventListener || hasKeyUpEventListener || eventManager.removeListener(keyboardListener);
          }
          accelerationListener && type === EventType.DEVICEMOTION && eventManager.removeListener(accelerationListener);
        }
      });
      cc.SystemEvent = module.exports = SystemEvent;
      true;
      cc.systemEvent = new cc.SystemEvent();
    }), {
      "../event-manager": 62,
      "../event/event-target": 64,
      "../platform/CCInputManager": 1
    } ],
    68: [ (function(require, module, exports) {
      var LineCap = require("./types").LineCap;
      var LineJoin = require("./types").LineJoin;
      var Graphics = cc.Class({
        name: "cc.Graphics",
        extends: cc._RendererUnderSG,
        editor: false,
        properties: {
          _lineWidth: 1,
          _strokeColor: cc.Color.BLACK,
          _lineJoin: LineJoin.MITER,
          _lineCap: LineCap.BUTT,
          _fillColor: cc.Color.WHITE,
          _miterLimit: 10,
          lineWidth: {
            get: function() {
              return this._lineWidth;
            },
            set: function(value) {
              this._sgNode.lineWidth = this._lineWidth = value;
            }
          },
          lineJoin: {
            get: function() {
              return this._lineJoin;
            },
            set: function(value) {
              this._sgNode.lineJoin = this._lineJoin = value;
            },
            type: LineJoin
          },
          lineCap: {
            get: function() {
              return this._lineCap;
            },
            set: function(value) {
              this._sgNode.lineCap = this._lineCap = value;
            },
            type: LineCap
          },
          strokeColor: {
            get: function() {
              return this._strokeColor;
            },
            set: function(value) {
              this._sgNode.strokeColor = this._strokeColor = value;
            }
          },
          fillColor: {
            get: function() {
              return this._fillColor;
            },
            set: function(value) {
              this._sgNode.fillColor = this._fillColor = value;
            }
          },
          miterLimit: {
            get: function() {
              return this._miterLimit;
            },
            set: function(value) {
              this._sgNode.miterLimit = this._miterLimit = value;
            }
          }
        },
        statics: {
          LineJoin: LineJoin,
          LineCap: LineCap
        },
        _createSgNode: function() {
          if (true, !_ccsg.GraphicsNode) {
            var sgNode = new _ccsg.Node();
            var func = function() {};
            [ "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "ellipse", "circle", "rect", "roundRect", "fillRect", "clear", "close", "stroke", "fill" ].forEach((function(funcName) {
              sgNode[funcName] = func;
            }));
            return sgNode;
          }
          return new _ccsg.GraphicsNode();
        },
        _initSgNode: function() {
          var sgNode = this._sgNode;
          sgNode.lineWidth = this._lineWidth;
          sgNode.lineJoin = this._lineJoin;
          sgNode.lineCap = this._lineCap;
          sgNode.strokeColor = this._strokeColor;
          sgNode.fillColor = this._fillColor;
          sgNode.miterLimit = this._miterLimit;
          sgNode.setContentSize(this.node.getContentSize(true));
        },
        moveTo: function(x, y) {
          this._sgNode.moveTo(x, y);
        },
        lineTo: function(x, y) {
          this._sgNode.lineTo(x, y);
        },
        bezierCurveTo: function(c1x, c1y, c2x, c2y, x, y) {
          this._sgNode.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
        },
        quadraticCurveTo: function(cx, cy, x, y) {
          this._sgNode.quadraticCurveTo(cx, cy, x, y);
        },
        arc: function(cx, cy, r, startAngle, endAngle, counterclockwise) {
          counterclockwise = counterclockwise || false;
          this._sgNode.arc(cx, cy, r, startAngle, endAngle, counterclockwise);
        },
        ellipse: function(cx, cy, rx, ry) {
          this._sgNode.ellipse(cx, cy, rx, ry);
        },
        circle: function(cx, cy, r) {
          this._sgNode.circle(cx, cy, r);
        },
        rect: function(x, y, w, h) {
          this._sgNode.rect(x, y, w, h);
        },
        roundRect: function(x, y, w, h, r) {
          this._sgNode.roundRect(x, y, w, h, r);
        },
        fillRect: function(x, y, w, h) {
          this._sgNode.fillRect(x, y, w, h);
        },
        clear: function(clean) {
          this._sgNode.clear(!!clean);
        },
        close: function() {
          this._sgNode.close();
        },
        stroke: function() {
          this._sgNode.stroke();
        },
        fill: function() {
          this._sgNode.fill();
        }
      });
      cc.Graphics = module.exports = Graphics;
    }), {
      "./types": 70
    } ],
    69: [ (function(require, module, exports) {
      "use strict";
      var GraphicsNode;
      false;
      GraphicsNode = _ccsg.GraphicsNode = cc.GraphicsNode;
      if (GraphicsNode) {
        var misc = require("../utils/misc");
        misc.propertyDefine(GraphicsNode, [ "lineWidth", "lineCap", "lineJoin", "miterLimit", "strokeColor", "fillColor" ], {});
      }
      require("./graphics");
    }), {
      "../utils/misc": 117,
      "./graphics": 68,
      "./graphics-node": 1
    } ],
    70: [ (function(require, module, exports) {
      "use strict";
      var LineCap = cc.Enum({
        BUTT: 0,
        ROUND: 1,
        SQUARE: 2
      });
      var LineJoin = cc.Enum({
        BEVEL: 0,
        ROUND: 1,
        MITER: 2
      });
      module.exports = {
        LineCap: LineCap,
        LineJoin: LineJoin
      };
    }), {} ],
    71: [ (function(require, module, exports) {
      require("./platform");
      require("./assets");
      true;
      require("./CCNode");
      require("./CCScene");
      require("./components");
      require("./graphics");
      require("./collider");
      require("./collider/CCIntersection");
      require("./physics");
      require("./camera/CCCamera");
      require("./base-ui/CCWidgetManager");
    }), {
      "./CCNode": 16,
      "./CCScene": 17,
      "./assets": 29,
      "./base-ui/CCWidgetManager": 30,
      "./camera/CCCamera": 31,
      "./collider": 1,
      "./collider/CCIntersection": 32,
      "./components": 59,
      "./graphics": 69,
      "./physics": 1,
      "./platform": 104
    } ],
    72: [ (function(require, module, exports) {
      var eventRegx = /^(click)(\s)*=/;
      var imageAttrReg = /(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=/;
      cc.HtmlTextParser = function() {
        this._parsedObject = {};
        this._specialSymbolArray = [];
        this._specialSymbolArray.push([ /&lt;/g, "<" ]);
        this._specialSymbolArray.push([ /&gt;/g, ">" ]);
        this._specialSymbolArray.push([ /&amp;/g, "&" ]);
        this._specialSymbolArray.push([ /&quot;/g, '"' ]);
        this._specialSymbolArray.push([ /&apos;/g, "'" ]);
      };
      cc.HtmlTextParser.prototype = {
        constructor: cc.HtmlTextParser,
        parse: function(htmlString) {
          this._resultObjectArray = [];
          this._stack = [];
          var startIndex = 0;
          var length = htmlString.length;
          while (startIndex < length) {
            var tagBeginIndex = htmlString.indexOf("<", startIndex);
            if (tagBeginIndex < 0) {
              this._stack.pop();
              this._processResult(htmlString.substring(startIndex));
              startIndex = length;
            } else {
              this._processResult(htmlString.substring(startIndex, tagBeginIndex));
              var tagEndIndex = htmlString.indexOf(">", startIndex);
              -1 === tagEndIndex ? tagEndIndex = tagBeginIndex : "/" === htmlString.charAt(tagBeginIndex + 1) ? this._stack.pop() : this._addToStack(htmlString.substring(tagBeginIndex + 1, tagEndIndex));
              startIndex = tagEndIndex + 1;
            }
          }
          return this._resultObjectArray;
        },
        _attributeToObject: function(attribute) {
          attribute = attribute.trim();
          var obj = {};
          var header = attribute.match(/^(color|size)(\s)*=/);
          var tagName;
          var nextSpace;
          var eventObj;
          var eventHanlderString;
          if (header) {
            tagName = header[0];
            attribute = attribute.substring(tagName.length).trim();
            if ("" === attribute) return obj;
            nextSpace = attribute.indexOf(" ");
            switch (tagName[0]) {
             case "c":
              obj.color = nextSpace > -1 ? attribute.substring(0, nextSpace).trim() : attribute;
              break;

             case "s":
              obj.size = parseInt(attribute);
            }
            if (nextSpace > -1) {
              eventHanlderString = attribute.substring(nextSpace + 1).trim();
              eventObj = this._processEventHandler(eventHanlderString);
              obj.event = eventObj;
            }
            return obj;
          }
          header = attribute.match(/^(br(\s)*\/)/);
          if (header && header[0].length > 0) {
            tagName = header[0].trim();
            if (tagName.startsWith("br") && "/" === tagName[tagName.length - 1]) {
              obj.isNewLine = true;
              this._resultObjectArray.push({
                text: "",
                style: {
                  newline: true
                }
              });
              return obj;
            }
          }
          header = attribute.match(/^(img(\s)*src(\s)*=[^>]+\/)/);
          if (header && header[0].length > 0) {
            tagName = header[0].trim();
            if (tagName.startsWith("img") && "/" === tagName[tagName.length - 1]) {
              header = attribute.match(imageAttrReg);
              var tagValue;
              var remainingArgument;
              var isValidImageTag = false;
              while (header) {
                attribute = attribute.substring(attribute.indexOf(header[0]));
                tagName = attribute.substr(0, header[0].length);
                remainingArgument = attribute.substring(tagName.length).trim();
                nextSpace = remainingArgument.indexOf(" ");
                tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
                tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
                tagName = tagName.toLocaleLowerCase();
                attribute = remainingArgument.substring(nextSpace).trim();
                if ("src" === tagName) {
                  obj.isImage = true;
                  tagValue.endsWith("/") && (tagValue = tagValue.substring(0, tagValue.length - 1));
                  if (0 === tagValue.indexOf("'")) {
                    isValidImageTag = true;
                    tagValue = tagValue.substring(1, tagValue.length - 1);
                  } else if (0 === tagValue.indexOf('"')) {
                    isValidImageTag = true;
                    tagValue = tagValue.substring(1, tagValue.length - 1);
                  }
                  obj.src = tagValue;
                } else "height" === tagName ? obj.imageHeight = parseInt(tagValue) : "width" === tagName ? obj.imageWidth = parseInt(tagValue) : "click" === tagName && (obj.event = this._processEventHandler(tagName + "=" + tagValue));
                header = attribute.match(imageAttrReg);
              }
              isValidImageTag && obj.isImage && this._resultObjectArray.push({
                text: "",
                style: obj
              });
              return {};
            }
          }
          header = attribute.match(/^(outline(\s)*[^>]*)/);
          if (header) {
            attribute = header[0].substring("outline".length).trim();
            var defaultOutlineObject = {
              color: "#ffffff",
              width: 1
            };
            if (attribute) {
              var outlineAttrReg = /(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=/;
              header = attribute.match(outlineAttrReg);
              var tagValue;
              while (header) {
                attribute = attribute.substring(attribute.indexOf(header[0]));
                tagName = attribute.substr(0, header[0].length);
                remainingArgument = attribute.substring(tagName.length).trim();
                nextSpace = remainingArgument.indexOf(" ");
                tagValue = nextSpace > -1 ? remainingArgument.substr(0, nextSpace) : remainingArgument;
                tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
                tagName = tagName.toLocaleLowerCase();
                attribute = remainingArgument.substring(nextSpace).trim();
                "click" === tagName ? obj.event = this._processEventHandler(tagName + "=" + tagValue) : "color" === tagName ? defaultOutlineObject.color = tagValue : "width" === tagName && (defaultOutlineObject.width = parseInt(tagValue));
                header = attribute.match(outlineAttrReg);
              }
            }
            obj.outline = defaultOutlineObject;
          }
          header = attribute.match(/^(on|u|b|i)(\s)*/);
          if (header && header[0].length > 0) {
            tagName = header[0];
            attribute = attribute.substring(tagName.length).trim();
            switch (tagName[0]) {
             case "u":
              obj.underline = true;
              break;

             case "i":
              obj.italic = true;
              break;

             case "b":
              obj.bold = true;
            }
            if ("" === attribute) return obj;
            eventObj = this._processEventHandler(attribute);
            obj.event = eventObj;
          }
          return obj;
        },
        _processEventHandler: function(eventString) {
          var index = 0;
          var obj = {};
          var eventNames = eventString.match(eventRegx);
          var isValidTag = false;
          while (eventNames) {
            var eventName = eventNames[0];
            var eventValue = "";
            isValidTag = false;
            eventString = eventString.substring(eventName.length).trim();
            if ('"' === eventString.charAt(0)) {
              index = eventString.indexOf('"', 1);
              if (index > -1) {
                eventValue = eventString.substring(1, index).trim();
                isValidTag = true;
              }
              index++;
            } else if ("'" === eventString.charAt(0)) {
              index = eventString.indexOf("'", 1);
              if (index > -1) {
                eventValue = eventString.substring(1, index).trim();
                isValidTag = true;
              }
              index++;
            } else {
              var match = eventString.match(/(\S)+/);
              eventValue = match ? match[0] : "";
              index = eventValue.length;
            }
            if (isValidTag) {
              eventName = eventName.substring(0, eventName.length - 1).trim();
              obj[eventName] = eventValue;
            }
            eventString = eventString.substring(index).trim();
            eventNames = eventString.match(eventRegx);
          }
          return obj;
        },
        _addToStack: function(attribute) {
          var obj = this._attributeToObject(attribute);
          if (0 === this._stack.length) this._stack.push(obj); else {
            if (obj.isNewLine || obj.isImage) return;
            var previousTagObj = this._stack[this._stack.length - 1];
            for (var key in previousTagObj) obj[key] || (obj[key] = previousTagObj[key]);
            this._stack.push(obj);
          }
        },
        _processResult: function(value) {
          if ("" === value) return;
          value = this._escapeSpecialSymbol(value);
          this._stack.length > 0 ? this._resultObjectArray.push({
            text: value,
            style: this._stack[this._stack.length - 1]
          }) : this._resultObjectArray.push({
            text: value
          });
        },
        _escapeSpecialSymbol: function(str) {
          for (var i = 0; i < this._specialSymbolArray.length; ++i) {
            var key = this._specialSymbolArray[i][0];
            var value = this._specialSymbolArray[i][1];
            str = str.replace(key, value);
          }
          return str;
        }
      };
      cc.htmlTextParser = new cc.HtmlTextParser();
    }), {} ],
    73: [ (function(require, module, exports) {
      var CustomFontDescriptor = function() {
        this._status = "unloaded";
        this._observers = [];
        this._isLoadWithCSS = false;
      };
      CustomFontDescriptor.prototype.onLoaded = function() {
        this._status = "loaded";
        this._observers.forEach((function(item) {
          item();
        }));
      };
      CustomFontDescriptor.prototype.isLoaded = function() {
        return "loaded" === this._status;
      };
      CustomFontDescriptor.prototype.addHandler = function(callback) {
        -1 === this._observers.indexOf(callback) && this._observers.push(callback);
      };
      var CustomFontLoader = {
        _fontCache: {},
        _fontWidthCache: {},
        _canvasContext: null,
        _testString: "BESbswy",
        _allFontsLoaded: false,
        _intervalId: 0,
        loadTTF: function(url, callback) {
          var fontFamilyName = this._getFontFamily(url);
          var md5Pipe = cc.loader.md5Pipe;
          md5Pipe && (url = md5Pipe.transformURL(url));
          var useFontFace = cc.sys.browserType !== cc.sys.BROWSER_TYPE_BAIDU && cc.sys.browserType !== cc.sys.BROWSER_TYPE_BAIDU_APP && cc.sys.browserType !== cc.sys.BROWSER_TYPE_MOBILE_QQ;
          window.FontFace && useFontFace ? this._loadWithFontFace(fontFamilyName, url, callback) : this._loadWithCSS(fontFamilyName, url, callback);
          0 === this._intervalId && (this._intervalId = setInterval(this._checkFontLoaded.bind(this), 100));
        },
        _checkFontLoaded: function() {
          this._allFontsLoaded = true;
          for (var k in this._fontCache) {
            var fontDescriptor = this._fontCache[k];
            if (fontDescriptor.isLoaded() || !fontDescriptor._isLoadWithCSS) continue;
            var oldWidth = this._fontWidthCache[k];
            this._canvasContext.font = "40px " + k;
            var newWidth = this._canvasContext.measureText(this._testString).width;
            oldWidth !== newWidth ? fontDescriptor.onLoaded() : this._allFontsLoaded = false;
          }
          if (this._allFontsLoaded) {
            clearInterval(this._intervalId);
            this._intervalId = 0;
          }
        },
        _loadWithFontFace: function(fontFamilyName, url, callback) {
          var fontDescriptor = this._fontCache[fontFamilyName];
          if (fontDescriptor) fontDescriptor.isLoaded() || fontDescriptor.addHandler(callback); else {
            var fontFace = new FontFace(fontFamilyName, "url('" + url + "')");
            document.fonts.add(fontFace);
            fontDescriptor = new CustomFontDescriptor();
            fontDescriptor.addHandler(callback);
            this._fontCache[fontFamilyName] = fontDescriptor;
            fontFace.loaded.then((function() {
              fontDescriptor.onLoaded();
            }));
          }
        },
        _loadWithCSS: function(fontFamilyName, url, callback) {
          var fontDescriptor = this._fontCache[fontFamilyName];
          if (fontDescriptor) fontDescriptor.isLoaded() || fontDescriptor.addHandler(callback); else {
            var doc = document;
            var fontStyle = document.createElement("style");
            fontStyle.type = "text/css";
            doc.body.appendChild(fontStyle);
            var fontStr = "";
            isNaN(fontFamilyName - 0) ? fontStr += "@font-face { font-family:" + fontFamilyName + "; src:" : fontStr += "@font-face { font-family:'" + fontFamilyName + "'; src:";
            fontStr += "url('" + url + "');";
            fontStyle.textContent = fontStr + "}";
            var preloadDiv = document.createElement("div");
            var _divStyle = preloadDiv.style;
            _divStyle.fontFamily = fontFamilyName;
            preloadDiv.innerHTML = ".";
            _divStyle.position = "absolute";
            _divStyle.left = "-100px";
            _divStyle.top = "-100px";
            doc.body.appendChild(preloadDiv);
            fontDescriptor = new CustomFontDescriptor();
            fontDescriptor.addHandler(callback);
            this._fontCache[fontFamilyName] = fontDescriptor;
            fontDescriptor._isLoadWithCSS = true;
            if (!this._canvasContext) {
              var labelCanvas = document.createElement("canvas");
              labelCanvas.width = 100;
              labelCanvas.height = 100;
              this._canvasContext = labelCanvas.getContext("2d");
            }
            var fontDesc = "40px " + fontFamilyName;
            this._canvasContext.font = fontDesc;
            var width = this._canvasContext.measureText(this._testString).width;
            this._fontWidthCache[fontFamilyName] = width;
            var self = this;
            fontStyle.onload = function() {
              setTimeout((function() {
                if (!self._allFontsLoaded) {
                  cc.logID(4004);
                  fontDescriptor.onLoaded();
                  cc.director.getScheduler().unschedule(this._checkFontLoaded, this);
                }
              }), 2e4);
            };
          }
        },
        _getFontFamily: function(fontHandle) {
          var ttfIndex = fontHandle.lastIndexOf(".ttf");
          if (-1 === ttfIndex) return fontHandle;
          var slashPos = fontHandle.lastIndexOf("/");
          var fontFamilyName;
          fontFamilyName = -1 === slashPos ? fontHandle.substring(0, ttfIndex) + "_LABEL" : fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
          return fontFamilyName;
        }
      };
      var TextUtils = {
        label_wordRex: /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/,
        label_symbolRex: /^[!,.:;'}\]%\?>、‘“》？。，！]/,
        label_lastWordRex: /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+|\S)$/,
        label_lastEnglish: /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+$/,
        label_firstEnglish: /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]/,
        label_wrapinspection: true,
        isUnicodeCJK: function(ch) {
          var __CHINESE_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;
          var __JAPANESE_REG = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
          var __KOREAN_REG = /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/;
          return __CHINESE_REG.test(ch) || __JAPANESE_REG.test(ch) || __KOREAN_REG.test(ch);
        },
        isUnicodeSpace: function(ch) {
          ch = ch.charCodeAt(0);
          return ch >= 9 && ch <= 13 || 32 === ch || 133 === ch || 160 === ch || 5760 === ch || ch >= 8192 && ch <= 8202 || 8232 === ch || 8233 === ch || 8239 === ch || 8287 === ch || 12288 === ch;
        },
        fragmentText: function(stringToken, allWidth, maxWidth, measureText) {
          var wrappedWords = [];
          if (0 === stringToken.length || maxWidth < 0) {
            wrappedWords.push("");
            return wrappedWords;
          }
          var text = stringToken;
          while (allWidth > maxWidth && text.length > 1) {
            var fuzzyLen = text.length * (maxWidth / allWidth) | 0;
            var tmpText = text.substr(fuzzyLen);
            var width = allWidth - measureText(tmpText);
            var sLine = tmpText;
            var pushNum = 0;
            var checkWhile = 0;
            var checkCount = 10;
            while (width > maxWidth && checkWhile++ < checkCount) {
              fuzzyLen *= maxWidth / width;
              fuzzyLen |= 0;
              tmpText = text.substr(fuzzyLen);
              width = allWidth - measureText(tmpText);
            }
            checkWhile = 0;
            while (width <= maxWidth && checkWhile++ < checkCount) {
              if (tmpText) {
                var exec = this.label_wordRex.exec(tmpText);
                pushNum = exec ? exec[0].length : 1;
                sLine = tmpText;
              }
              fuzzyLen += pushNum;
              tmpText = text.substr(fuzzyLen);
              width = allWidth - measureText(tmpText);
            }
            fuzzyLen -= pushNum;
            if (0 === fuzzyLen) {
              fuzzyLen = 1;
              sLine = sLine.substr(1);
            }
            var sText = text.substr(0, fuzzyLen), result;
            if (this.label_wrapinspection && this.label_symbolRex.test(sLine || tmpText)) {
              result = this.label_lastWordRex.exec(sText);
              fuzzyLen -= result ? result[0].length : 0;
              0 === fuzzyLen && (fuzzyLen = 1);
              sLine = text.substr(fuzzyLen);
              sText = text.substr(0, fuzzyLen);
            }
            if (this.label_firstEnglish.test(sLine)) {
              result = this.label_lastEnglish.exec(sText);
              if (result && sText !== result[0]) {
                fuzzyLen -= result[0].length;
                sLine = text.substr(fuzzyLen);
                sText = text.substr(0, fuzzyLen);
              }
            }
            if (0 === wrappedWords.length) wrappedWords.push(sText); else {
              sText = sText.trim();
              sText.length > 0 && wrappedWords.push(sText);
            }
            text = sLine || tmpText;
            allWidth = measureText(text);
          }
          if (0 === wrappedWords.length) wrappedWords.push(text); else {
            text = text.trim();
            text.length > 0 && wrappedWords.push(text);
          }
          return wrappedWords;
        }
      };
      cc.TextUtils = module.exports = TextUtils;
      cc.CustomFontLoader = module.exports = CustomFontLoader;
    }), {} ],
    74: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      var Pipeline = require("./pipeline");
      var LoadingItems = require("./loading-items");
      var AssetLoader = require("./asset-loader");
      var Downloader = require("./downloader");
      var Loader = require("./loader");
      var AssetTable = require("./asset-table");
      var callInNextTick = require("../platform/utils").callInNextTick;
      var AutoReleaseUtils = require("./auto-release-utils");
      var ReleasedAssetChecker = (true, require("./released-asset-checker"));
      var resources = new AssetTable();
      var AUDIO_TYPES = [ "mp3", "ogg", "wav", "m4a" ];
      function getXMLHttpRequest() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
      }
      var _info = {
        url: null,
        raw: false
      };
      function getResWithUrl(res) {
        var id, result, isUuid;
        if ("object" === (__typeofVal = typeof res, "object" === __typeofVal ? __realTypeOfObj(res) : __typeofVal)) {
          result = res;
          if (res.url) return result;
          id = res.uuid;
        } else {
          result = {};
          id = res;
        }
        isUuid = result.type ? "uuid" === result.type : cc.AssetLibrary._getAssetUrl(id);
        cc.AssetLibrary._getAssetInfoInRuntime(id, _info);
        result.url = isUuid ? _info.url : id;
        if (_info.url && "uuid" === result.type && _info.raw) {
          result.type = null;
          result.isRawAsset = true;
        } else isUuid || (result.isRawAsset = true);
        return result;
      }
      var _sharedResources = [];
      var _sharedList = [];
      function CCLoader() {
        var assetLoader = new AssetLoader();
        var downloader = new Downloader();
        var loader = new Loader();
        Pipeline.call(this, [ assetLoader, downloader, loader ]);
        this.assetLoader = assetLoader;
        this.downloader = downloader;
        this.loader = loader;
        this.onProgress = null;
        this._autoReleaseSetting = {};
        true;
        this._releasedAssetChecker_DEBUG = new ReleasedAssetChecker();
      }
      JS.extend(CCLoader, Pipeline);
      var proto = CCLoader.prototype;
      proto.init = function(director) {
        true;
        var self = this;
        director.on(cc.Director.EVENT_BEFORE_VISIT, (function() {
          self._releasedAssetChecker_DEBUG.checkCouldRelease(self._cache);
        }));
      };
      proto.getXMLHttpRequest = getXMLHttpRequest;
      proto.addDownloadHandlers = function(extMap) {
        this.downloader.addHandlers(extMap);
      };
      proto.addLoadHandlers = function(extMap) {
        this.loader.addHandlers(extMap);
      };
      proto.load = function(resources, progressCallback, completeCallback) {
        if (void 0 === completeCallback) {
          completeCallback = progressCallback;
          progressCallback = this.onProgress || null;
        }
        var self = this;
        var singleRes = false;
        if (!(resources instanceof Array)) {
          singleRes = true;
          resources = resources ? [ resources ] : [];
        }
        _sharedResources.length = 0;
        for (var i = 0; i < resources.length; ++i) {
          var resource = resources[i];
          if (resource && resource.id) {
            cc.warnID(4920, resource.id);
            resource.uuid || resource.url || (resource.url = resource.id);
          }
          var res = getResWithUrl(resource);
          if (!res.url && !res.uuid) continue;
          var item = this._cache[res.url];
          _sharedResources.push(item || res);
        }
        var queue = LoadingItems.create(this, progressCallback, (function(errors, items) {
          callInNextTick((function() {
            if (completeCallback) {
              if (singleRes) {
                var id = res.url;
                completeCallback.call(self, items.getError(id), items.getContent(id));
              } else completeCallback.call(self, errors, items);
              completeCallback = null;
            }
            var _id;
            false;
            items.destroy();
          }));
        }));
        LoadingItems.initQueueDeps(queue);
        queue.append(_sharedResources);
        _sharedResources.length = 0;
      };
      proto.flowInDeps = function(owner, urlList, callback) {
        _sharedList.length = 0;
        for (var i = 0; i < urlList.length; ++i) {
          var res = getResWithUrl(urlList[i]);
          if (!res.url && !res.uuid) continue;
          var item = this._cache[res.url];
          item ? _sharedList.push(item) : _sharedList.push(res);
        }
        var queue = LoadingItems.create(this, owner ? function(completedCount, totalCount, item) {
          this._ownerQueue && this._ownerQueue.onProgress && this._ownerQueue._childOnProgress(item);
        } : null, (function(errors, items) {
          callback(errors, items);
          owner && owner.deps && (owner.deps.length = 0);
          items.destroy();
        }));
        if (owner) {
          var ownerQueue = LoadingItems.getQueue(owner);
          queue._ownerQueue = ownerQueue._ownerQueue || ownerQueue;
        }
        var accepted = queue.append(_sharedList, owner);
        _sharedList.length = 0;
        return accepted;
      };
      proto._resources = resources;
      proto._getResUuid = function(url, type, quiet) {
        if (!url) return null;
        var index = url.indexOf("?");
        -1 !== index && (url = url.substr(0, index));
        var uuid = resources.getUuid(url, type);
        if (!uuid) {
          var extname = cc.path.extname(url);
          if (extname) {
            url = url.slice(0, -extname.length);
            uuid = resources.getUuid(url, type);
            uuid && !quiet && cc.warnID(4901, url, extname);
          }
        }
        return uuid;
      };
      proto._getReferenceKey = function(assetOrUrlOrUuid) {
        var key;
        "object" === (__typeofVal = typeof assetOrUrlOrUuid, "object" === __typeofVal ? __realTypeOfObj(assetOrUrlOrUuid) : __typeofVal) ? key = assetOrUrlOrUuid._uuid || null : "string" === (__typeofVal = typeof assetOrUrlOrUuid, 
        "object" === __typeofVal ? __realTypeOfObj(assetOrUrlOrUuid) : __typeofVal) && (key = this._getResUuid(assetOrUrlOrUuid, null, true) || assetOrUrlOrUuid);
        if (!key) {
          cc.warnID(4800, assetOrUrlOrUuid);
          return key;
        }
        cc.AssetLibrary._getAssetInfoInRuntime(key, _info);
        return this._cache[_info.url] ? _info.url : key;
      };
      proto._urlNotFound = function(url, type, completeCallback) {
        callInNextTick((function() {
          url = cc.url.normalize(url);
          var info = (type ? JS.getClassName(type) : "Asset") + ' in "resources/' + url + '" does not exist.';
          completeCallback && completeCallback(new Error(info), []);
        }));
      };
      proto._parseLoadResArgs = function(type, onProgress, onComplete) {
        if (void 0 === onComplete) {
          var isValidType = cc.isChildClassOf(type, cc.RawAsset);
          if (onProgress) {
            onComplete = onProgress;
            isValidType && (onProgress = this.onProgress || null);
          } else if (void 0 === onProgress && !isValidType) {
            onComplete = type;
            onProgress = this.onProgress || null;
            type = null;
          }
          if (void 0 !== onProgress && !isValidType) {
            onProgress = type;
            type = null;
          }
        }
        return {
          type: type,
          onProgress: onProgress,
          onComplete: onComplete
        };
      };
      proto.loadRes = function(url, type, progressCallback, completeCallback) {
        var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
        type = args.type;
        progressCallback = args.onProgress;
        completeCallback = args.onComplete;
        var self = this;
        var uuid = self._getResUuid(url, type);
        uuid ? this.load({
          type: "uuid",
          uuid: uuid
        }, progressCallback, (function(err, asset) {
          asset && self.setAutoReleaseRecursively(uuid, false);
          completeCallback && completeCallback(err, asset);
        })) : self._urlNotFound(url, type, completeCallback);
      };
      proto._loadResUuids = function(uuids, progressCallback, completeCallback, urls) {
        if (uuids.length > 0) {
          var self = this;
          var res = uuids.map((function(uuid) {
            return {
              type: "uuid",
              uuid: uuid
            };
          }));
          this.load(res, progressCallback, (function(errors, items) {
            if (completeCallback) {
              var assetRes = [];
              var urlRes = urls && [];
              for (var i = 0; i < res.length; ++i) {
                var uuid = res[i].uuid;
                var id = this._getReferenceKey(uuid);
                var item = items.getContent(id);
                if (item) {
                  self.setAutoReleaseRecursively(uuid, false);
                  assetRes.push(item);
                  urlRes && urlRes.push(urls[i]);
                }
              }
              urls ? completeCallback(errors, assetRes, urlRes) : completeCallback(errors, assetRes);
            }
          }));
        } else completeCallback && callInNextTick((function() {
          urls ? completeCallback(null, [], []) : completeCallback(null, []);
        }));
      };
      proto.loadResArray = function(urls, type, progressCallback, completeCallback) {
        var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
        type = args.type;
        progressCallback = args.onProgress;
        completeCallback = args.onComplete;
        var uuids = [];
        for (var i = 0; i < urls.length; i++) {
          var url = urls[i];
          var uuid = this._getResUuid(url, type);
          if (!uuid) {
            this._urlNotFound(url, type, completeCallback);
            return;
          }
          uuids.push(uuid);
        }
        this._loadResUuids(uuids, progressCallback, completeCallback);
      };
      proto.loadResDir = function(url, type, progressCallback, completeCallback) {
        var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
        type = args.type;
        progressCallback = args.onProgress;
        completeCallback = args.onComplete;
        var urls = [];
        var uuids = resources.getUuidArray(url, type, urls);
        this._loadResUuids(uuids, progressCallback, completeCallback, urls);
      };
      proto.getRes = function(url, type) {
        var item = this._cache[url];
        if (!item) {
          var uuid = this._getResUuid(url, type, true);
          if (!uuid) return null;
          var ref = this._getReferenceKey(uuid);
          item = this._cache[ref];
        }
        item && item.alias && (item = item.alias);
        return item && item.complete ? item.content : null;
      };
      proto.getResCount = function() {
        return Object.keys(this._cache).length;
      };
      proto.getDependsRecursively = function(owner) {
        if (owner) {
          var key = this._getReferenceKey(owner);
          var assets = AutoReleaseUtils.getDependsRecursively(key);
          assets.push(key);
          return assets;
        }
        return [];
      };
      proto.release = function(asset) {
        if (Array.isArray(asset)) for (var i = 0; i < asset.length; i++) {
          var key = asset[i];
          this.release(key);
        } else if (asset) {
          var id = this._getReferenceKey(asset);
          var item = this.getItem(id);
          if (item) {
            var removed = this.removeItem(id);
            asset = item.content;
            if (asset instanceof cc.Asset) {
              (true, asset instanceof cc.SpriteFrame) && removed && asset.release();
              var urls = asset.rawUrls;
              for (var _i = 0; _i < urls.length; _i++) this.release(urls[_i]);
            } else asset instanceof cc.Texture2D ? cc.textureCache.removeTextureForKey(item.rawUrl || item.url) : -1 !== AUDIO_TYPES.indexOf(item.type) && cc.audioEngine.uncache(item.rawUrl || item.url);
            (true, removed) && this._releasedAssetChecker_DEBUG.setReleased(item, id);
          }
        }
      };
      proto.releaseAsset = function(asset) {
        var uuid = asset._uuid;
        uuid && this.release(uuid);
      };
      proto.releaseRes = function(url, type) {
        var uuid = this._getResUuid(url, type);
        uuid ? this.release(uuid) : cc.errorID(4914, url);
      };
      proto.releaseResDir = function(url, type) {
        var uuids = resources.getUuidArray(url, type);
        for (var i = 0; i < uuids.length; i++) {
          var uuid = uuids[i];
          this.release(uuid);
        }
      };
      proto.releaseAll = function() {
        for (var id in this._cache) this.release(id);
      };
      proto.removeItem = function(key) {
        var removed = Pipeline.prototype.removeItem.call(this, key);
        delete this._autoReleaseSetting[key];
        return removed;
      };
      proto.setAutoRelease = function(assetOrUrlOrUuid, autoRelease) {
        var key = this._getReferenceKey(assetOrUrlOrUuid);
        !!key && (this._autoReleaseSetting[key] = !!autoRelease);
      };
      proto.setAutoReleaseRecursively = function(assetOrUrlOrUuid, autoRelease) {
        autoRelease = !!autoRelease;
        var key = this._getReferenceKey(assetOrUrlOrUuid);
        if (key) {
          this._autoReleaseSetting[key] = autoRelease;
          var depends = AutoReleaseUtils.getDependsRecursively(key);
          for (var i = 0; i < depends.length; i++) {
            var depend = depends[i];
            this._autoReleaseSetting[depend] = autoRelease;
          }
        } else false;
      };
      proto.isAutoRelease = function(assetOrUrl) {
        var key = this._getReferenceKey(assetOrUrl);
        if (key) return !!this._autoReleaseSetting[key];
        return false;
      };
      cc.loader = new CCLoader();
      false;
      module.exports = cc.loader;
    }), {
      "../platform/js": 107,
      "../platform/utils": 111,
      "./asset-loader": 75,
      "./asset-table": 76,
      "./auto-release-utils": 77,
      "./downloader": 78,
      "./loader": 81,
      "./loading-items": 82,
      "./pipeline": 85,
      "./released-asset-checker": 86
    } ],
    75: [ (function(require, module, exports) {
      var Path = require("../utils/CCPath");
      var Pipeline = require("./pipeline");
      var LoadingItems = require("./loading-items");
      var ID = "AssetLoader";
      var AssetLoader = function(extMap) {
        this.id = ID;
        this.async = true;
        this.pipeline = null;
      };
      AssetLoader.ID = ID;
      var reusedArray = [];
      AssetLoader.prototype.handle = function(item, callback) {
        var uuid = item.uuid;
        if (!uuid) return !item.content ? null : item.content;
        var self = this;
        cc.AssetLibrary.queryAssetInfo(uuid, (function(error, url, isRawAsset) {
          if (error) callback(error); else {
            item.url = item.rawUrl = url;
            item.isRawAsset = isRawAsset;
            if (isRawAsset) {
              var ext = Path.extname(url).toLowerCase();
              if (!ext) {
                callback(new Error("Download Uuid: can not find type of raw asset[" + uuid + "]: " + url));
                return;
              }
              ext = ext.substr(1);
              var queue = LoadingItems.getQueue(item);
              reusedArray[0] = {
                queueId: item.queueId,
                id: url,
                url: url,
                type: ext,
                error: null,
                alias: item,
                complete: true
              };
              false;
              queue.append(reusedArray);
              item.type = ext;
              callback(null, item.content);
            } else {
              item.type = "uuid";
              callback(null, item.content);
            }
          }
        }));
      };
      Pipeline.AssetLoader = module.exports = AssetLoader;
    }), {
      "../utils/CCPath": 112,
      "./loading-items": 82,
      "./pipeline": 85
    } ],
    76: [ (function(require, module, exports) {
      var pushToMap = require("../utils/misc").pushToMap;
      function Entry(uuid, type) {
        this.uuid = uuid;
        this.type = type;
      }
      function AssetTable() {
        this._pathToUuid = {};
      }
      function isMatchByWord(path, test) {
        if (path.length > test.length) {
          var nextAscii = path.charCodeAt(test.length);
          return 46 === nextAscii || 47 === nextAscii;
        }
        return true;
      }
      var proto = AssetTable.prototype;
      proto.getUuid = function(path, type) {
        path = cc.url.normalize(path);
        var item = this._pathToUuid[path];
        if (item) if (Array.isArray(item)) {
          if (!type) return item[0].uuid;
          for (var i = 0; i < item.length; i++) {
            var entry = item[i];
            if (cc.isChildClassOf(entry.type, type)) return entry.uuid;
          }
        } else if (!type || cc.isChildClassOf(item.type, type)) return item.uuid;
        return "";
      };
      proto.getUuidArray = function(path, type, out_urls) {
        path = cc.url.normalize(path);
        "/" === path[path.length - 1] && (path = path.slice(0, -1));
        var path2uuid = this._pathToUuid;
        var uuids = [];
        var isChildClassOf = cc.isChildClassOf;
        for (var p in path2uuid) if (p.startsWith(path) && isMatchByWord(p, path) || !path) {
          var item = path2uuid[p];
          if (Array.isArray(item)) for (var i = 0; i < item.length; i++) {
            var entry = item[i];
            if (!type || isChildClassOf(entry.type, type)) {
              uuids.push(entry.uuid);
              out_urls && out_urls.push(p);
            }
          } else if (!type || isChildClassOf(item.type, type)) {
            uuids.push(item.uuid);
            out_urls && out_urls.push(p);
          }
        }
        return uuids;
      };
      proto.add = function(path, uuid, type, isMainAsset) {
        path = path.substring(0, path.length - cc.path.extname(path).length);
        var newEntry = new Entry(uuid, type);
        pushToMap(this._pathToUuid, path, newEntry, isMainAsset);
      };
      proto._getInfo_DEBUG = (true, function(uuid, out_info) {
        var path2uuid = this._pathToUuid;
        var paths = Object.keys(path2uuid);
        for (var p = 0; p < paths.length; ++p) {
          var path = paths[p];
          var item = path2uuid[path];
          if (Array.isArray(item)) for (var i = 0; i < item.length; i++) {
            var entry = item[i];
            if (entry.uuid === uuid) {
              out_info.path = path;
              out_info.type = entry.type;
              return true;
            }
          } else if (item.uuid === uuid) {
            out_info.path = path;
            out_info.type = item.type;
            return true;
          }
        }
        return false;
      });
      proto.reset = function() {
        this._pathToUuid = {};
      };
      module.exports = AssetTable;
    }), {
      "../utils/misc": 117
    } ],
    77: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      function parseDepends(key, parsed) {
        var item = cc.loader.getItem(key);
        if (item) {
          var depends = item.dependKeys;
          if (depends) for (var i = 0; i < depends.length; i++) {
            var depend = depends[i];
            if (!parsed[depend]) {
              parsed[depend] = true;
              parseDepends(depend, parsed);
            }
          }
        }
      }
      function visitAsset(asset, excludeMap) {
        var key = cc.loader._getReferenceKey(asset);
        if (!excludeMap[key]) {
          excludeMap[key] = true;
          parseDepends(key, excludeMap);
        }
      }
      function visitComponent(comp, excludeMap) {
        var props = Object.getOwnPropertyNames(comp);
        for (var i = 0; i < props.length; i++) {
          var value = comp[props[i]];
          if ("object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value) if (Array.isArray(value)) for (var j = 0; j < value.length; j++) {
            var val = value[j];
            val instanceof cc.RawAsset && visitAsset(val, excludeMap);
          } else if (value.constructor && value.constructor !== Object) value instanceof cc.RawAsset && visitAsset(value, excludeMap); else {
            var keys = Object.getOwnPropertyNames(value);
            for (var _j = 0; _j < keys.length; _j++) {
              var _val = value[keys[_j]];
              _val instanceof cc.RawAsset && visitAsset(_val, excludeMap);
            }
          }
        }
      }
      function visitNode(node, excludeMap) {
        for (var i = 0; i < node._components.length; i++) visitComponent(node._components[i], excludeMap);
        for (var _i = 0; _i < node._children.length; _i++) visitNode(node._children[_i], excludeMap);
      }
      module.exports = {
        autoRelease: function(oldSceneAssets, nextSceneAssets, persistNodes) {
          var releaseSettings = cc.loader._autoReleaseSetting;
          var excludeMap = JS.createMap();
          if (nextSceneAssets) for (var i = 0; i < nextSceneAssets.length; i++) excludeMap[nextSceneAssets[i]] = true;
          for (var _i2 = 0; _i2 < persistNodes.length; _i2++) visitNode(persistNodes[_i2], excludeMap);
          if (oldSceneAssets) for (var _i3 = 0; _i3 < oldSceneAssets.length; _i3++) {
            var key = oldSceneAssets[_i3];
            false === releaseSettings[key] || excludeMap[key] || cc.loader.release(key);
          }
          var keys = Object.keys(releaseSettings);
          for (var _i4 = 0; _i4 < keys.length; _i4++) {
            var _key = keys[_i4];
            true !== releaseSettings[_key] || excludeMap[_key] || cc.loader.release(_key);
          }
        },
        getDependsRecursively: function(key) {
          var depends = {};
          parseDepends(key, depends);
          return Object.keys(depends);
        }
      };
    }), {
      "../platform/js": 107
    } ],
    78: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      var sys = require("../platform/CCSys");
      var Path = require("../utils/CCPath");
      var misc = require("../utils/misc");
      var Pipeline = require("./pipeline");
      var PackDownloader = require("./pack-downloader");
      var downloadText = require("./text-downloader");
      var urlAppendTimestamp = require("./utils").urlAppendTimestamp;
      var downloadAudio;
      true;
      downloadAudio = require("./audio-downloader");
      function downloadScript(item, callback, isAsync) {
        if (sys.platform === sys.WECHAT_GAME) {
          require(item.url);
          callback(null, item.url);
          return;
        }
        var url = item.url, d = document, s = document.createElement("script");
        s.async = isAsync;
        s.src = urlAppendTimestamp(url);
        function loadHandler() {
          s.parentNode.removeChild(s);
          s.removeEventListener("load", loadHandler, false);
          s.removeEventListener("error", errorHandler, false);
          callback(null, url);
        }
        function errorHandler() {
          s.parentNode.removeChild(s);
          s.removeEventListener("load", loadHandler, false);
          s.removeEventListener("error", errorHandler, false);
          callback(new Error("Load " + url + " failed!"), url);
        }
        s.addEventListener("load", loadHandler, false);
        s.addEventListener("error", errorHandler, false);
        d.body.appendChild(s);
      }
      function downloadWebp(item, callback, isCrossOrigin, img) {
        if (!cc.sys.capabilities.webp) return new Error("Load Webp ( " + item.url + " ) failed");
        return downloadImage(item, callback, isCrossOrigin, img);
      }
      function downloadImage(item, callback, isCrossOrigin, img) {
        void 0 === isCrossOrigin && (isCrossOrigin = true);
        var url = urlAppendTimestamp(item.url);
        img = img || misc.imagePool.get();
        isCrossOrigin && "file:" !== window.location.protocol ? img.crossOrigin = "anonymous" : img.crossOrigin = null;
        if (img.complete && img.naturalWidth > 0 && img.src === url) return img;
        (function() {
          function loadCallback() {
            img.removeEventListener("load", loadCallback);
            img.removeEventListener("error", errorCallback);
            callback(null, img);
          }
          function errorCallback() {
            img.removeEventListener("load", loadCallback);
            img.removeEventListener("error", errorCallback);
            "https:" !== window.location.protocol && img.crossOrigin && "anonymous" === img.crossOrigin.toLowerCase() ? downloadImage(item, callback, false, img) : callback(new Error("Load image (" + url + ") failed"));
          }
          img.addEventListener("load", loadCallback);
          img.addEventListener("error", errorCallback);
          img.src = url;
        })();
      }
      var FONT_TYPE = {
        ".eot": "embedded-opentype",
        ".ttf": "truetype",
        ".ttc": "truetype",
        ".woff": "woff",
        ".svg": "svg"
      };
      function _loadFont(name, srcs, type) {
        var doc = document, fontStyle = document.createElement("style");
        fontStyle.type = "text/css";
        doc.body.appendChild(fontStyle);
        var fontStr = "";
        isNaN(name - 0) ? fontStr += "@font-face { font-family:" + name + "; src:" : fontStr += "@font-face { font-family:'" + name + "'; src:";
        if (srcs instanceof Array) for (var i = 0, li = srcs.length; i < li; i++) {
          var src = srcs[i];
          type = Path.extname(src).toLowerCase();
          fontStr += "url('" + srcs[i] + "') format('" + FONT_TYPE[type] + "')";
          fontStr += i === li - 1 ? ";" : ",";
        } else {
          type = type.toLowerCase();
          fontStr += "url('" + srcs + "') format('" + FONT_TYPE[type] + "');";
        }
        fontStyle.textContent += fontStr + "}";
        var preloadDiv = document.createElement("div");
        var _divStyle = preloadDiv.style;
        _divStyle.fontFamily = name;
        preloadDiv.innerHTML = ".";
        _divStyle.position = "absolute";
        _divStyle.left = "-100px";
        _divStyle.top = "-100px";
        doc.body.appendChild(preloadDiv);
      }
      function downloadFont(item, callback) {
        var url = item.url, type = item.type, name = item.name, srcs = item.srcs;
        if (name && srcs) {
          -1 === srcs.indexOf(url) && srcs.push(url);
          _loadFont(name, srcs);
        } else {
          type = Path.extname(url);
          name = Path.basename(url, type);
          _loadFont(name, url, type);
        }
        if (!document.fonts) return null;
        document.fonts.load("1em " + name).then((function() {
          callback(null, null);
        }), (function(err) {
          callback(err);
        }));
      }
      function downloadUuid(item, callback) {
        var result = PackDownloader.load(item, callback);
        if (void 0 === result) return this.extMap["json"](item, callback);
        if (!!result) return result;
      }
      var defaultMap = {
        js: downloadScript,
        png: downloadImage,
        jpg: downloadImage,
        bmp: downloadImage,
        jpeg: downloadImage,
        gif: downloadImage,
        ico: downloadImage,
        tiff: downloadImage,
        webp: downloadWebp,
        image: downloadImage,
        mp3: downloadAudio,
        ogg: downloadAudio,
        wav: downloadAudio,
        m4a: downloadAudio,
        txt: downloadText,
        xml: downloadText,
        vsh: downloadText,
        fsh: downloadText,
        atlas: downloadText,
        tmx: downloadText,
        tsx: downloadText,
        json: downloadText,
        ExportJson: downloadText,
        plist: downloadText,
        fnt: downloadText,
        font: downloadFont,
        eot: downloadFont,
        ttf: downloadFont,
        woff: downloadFont,
        svg: downloadFont,
        ttc: downloadFont,
        uuid: downloadUuid,
        default: downloadText
      };
      var ID = "Downloader";
      var Downloader = function(extMap) {
        this.id = ID;
        this.async = true;
        this.pipeline = null;
        this._curConcurrent = 0;
        this._loadQueue = [];
        this.extMap = JS.mixin(extMap, defaultMap);
      };
      Downloader.ID = ID;
      Downloader.PackDownloader = PackDownloader;
      Downloader.prototype.addHandlers = function(extMap) {
        JS.mixin(this.extMap, extMap);
      };
      Downloader.prototype._handleLoadQueue = function() {
        while (this._curConcurrent < cc.macro.DOWNLOAD_MAX_CONCURRENT) {
          var nextOne = this._loadQueue.shift();
          if (!nextOne) break;
          var syncRet = this.handle(nextOne.item, nextOne.callback);
          void 0 !== syncRet && (syncRet instanceof Error ? nextOne.callback(syncRet) : nextOne.callback(null, syncRet));
        }
      };
      Downloader.prototype.handle = function(item, callback) {
        var self = this;
        var downloadFunc = this.extMap[item.type] || this.extMap["default"];
        var syncRet = void 0;
        if (this._curConcurrent < cc.macro.DOWNLOAD_MAX_CONCURRENT) {
          this._curConcurrent++;
          syncRet = downloadFunc.call(this, item, (function(err, result) {
            self._curConcurrent = Math.max(0, self._curConcurrent - 1);
            self._handleLoadQueue();
            callback && callback(err, result);
          }));
          if (void 0 !== syncRet) {
            this._curConcurrent = Math.max(0, this._curConcurrent - 1);
            this._handleLoadQueue();
            return syncRet;
          }
        } else if (item.ignoreMaxConcurrency) {
          syncRet = downloadFunc.call(this, item, callback);
          if (void 0 !== syncRet) return syncRet;
        } else this._loadQueue.push({
          item: item,
          callback: callback
        });
      };
      Pipeline.Downloader = module.exports = Downloader;
    }), {
      "../platform/CCSys": 97,
      "../platform/js": 107,
      "../utils/CCPath": 112,
      "../utils/misc": 117,
      "./audio-downloader": 1,
      "./pack-downloader": 84,
      "./pipeline": 85,
      "./text-downloader": 87,
      "./utils": 88
    } ],
    79: [ (function(require, module, exports) {
      require("./downloader");
      require("./loader");
      require("./json-unpacker");
      require("./loading-items");
      require("./pipeline");
      require("./CCLoader");
    }), {
      "./CCLoader": 74,
      "./downloader": 78,
      "./json-unpacker": 80,
      "./loader": 81,
      "./loading-items": 82,
      "./pipeline": 85
    } ],
    80: [ (function(require, module, exports) {
      function JsonUnpacker() {
        this.jsons = {};
        this.state = -1;
      }
      JsonUnpacker.prototype.read = function(indices, data) {
        var jsons = "string" === (__typeofVal = typeof data, "object" === __typeofVal ? __realTypeOfObj(data) : __typeofVal) ? JSON.parse(data) : data;
        jsons.length !== indices.length && cc.errorID(4915);
        for (var i = 0; i < indices.length; i++) {
          var key = indices[i];
          var json = jsons[i];
          this.jsons[key] = json;
        }
      };
      JsonUnpacker.prototype.retrieve = function(key) {
        return this.jsons[key] || null;
      };
      false;
      module.exports = JsonUnpacker;
    }), {} ],
    81: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      var sys = require("../platform/CCSys");
      var Pipeline = require("./pipeline");
      var Texture2D = require("../textures/CCTexture2D");
      var loadUuid = require("./uuid-loader");
      var misc = require("../utils/misc");
      function loadNothing(item, callback) {
        return null;
      }
      function loadJSON(item, callback) {
        if ("string" !== (__typeofVal = typeof item.content, "object" === __typeofVal ? __realTypeOfObj(item.content) : __typeofVal)) return new Error("JSON Loader: Input item doesn't contain string content");
        try {
          var result = JSON.parse(item.content);
          return result;
        } catch (e) {
          return new Error("JSON Loader: Parse json [" + item.id + "] failed : " + e);
        }
      }
      function loadImage(item, callback) {
        if (sys.platform !== sys.WECHAT_GAME && sys.platform !== sys.QQ_PLAY && !(item.content instanceof Image)) return new Error("Image Loader: Input item doesn't contain Image content");
        var rawUrl = item.rawUrl;
        var tex = cc.textureCache.getTextureForKey(rawUrl) || new Texture2D();
        tex.url = rawUrl;
        tex.initWithElement(item.content);
        tex.handleLoadedTexture();
        cc.textureCache.cacheImage(rawUrl, tex);
        return tex;
      }
      function loadPlist(item, callback) {
        if ("string" !== (__typeofVal = typeof item.content, "object" === __typeofVal ? __realTypeOfObj(item.content) : __typeofVal)) return new Error("Plist Loader: Input item doesn't contain string content");
        var result = cc.plistParser.parse(item.content);
        return result || new Error("Plist Loader: Parse [" + item.id + "] failed");
      }
      var defaultMap = {
        png: loadImage,
        jpg: loadImage,
        bmp: loadImage,
        jpeg: loadImage,
        gif: loadImage,
        ico: loadImage,
        tiff: loadImage,
        webp: loadImage,
        image: loadImage,
        json: loadJSON,
        ExportJson: loadJSON,
        plist: loadPlist,
        uuid: loadUuid,
        prefab: loadUuid,
        fire: loadUuid,
        scene: loadUuid,
        default: loadNothing
      };
      var ID = "Loader";
      var Loader = function(extMap) {
        this.id = ID;
        this.async = true;
        this.pipeline = null;
        this.extMap = JS.mixin(extMap, defaultMap);
      };
      Loader.ID = ID;
      Loader.prototype.addHandlers = function(extMap) {
        this.extMap = JS.mixin(this.extMap, extMap);
      };
      Loader.prototype.handle = function(item, callback) {
        var loadFunc = this.extMap[item.type] || this.extMap["default"];
        return loadFunc.call(this, item, callback);
      };
      Pipeline.Loader = module.exports = Loader;
    }), {
      "../platform/CCSys": 97,
      "../platform/js": 107,
      "../textures/CCTexture2D": 1,
      "../utils/misc": 117,
      "./pipeline": 85,
      "./uuid-loader": 89
    } ],
    82: [ (function(require, module, exports) {
      var CallbacksInvoker = require("../platform/callbacks-invoker");
      var Path = require("../utils/CCPath");
      var JS = require("../platform/js");
      var _qid = 0 | 998 * Math.random();
      var _queues = {};
      var _pool = [];
      var _POOL_MAX_LENGTH = 10;
      var ItemState = {
        WORKING: 1,
        COMPLETE: 2,
        ERROR: 3
      };
      var _queueDeps = {};
      function isIdValid(id) {
        var realId = id.url || id;
        return "string" === (__typeofVal = typeof realId, "object" === __typeofVal ? __realTypeOfObj(realId) : __typeofVal);
      }
      function _parseUrlParam(url) {
        if (!url) return;
        var split = url.split("?");
        if (!split || !split[0] || !split[1]) return;
        var urlParam = {};
        var queries = split[1].split("&");
        queries.forEach((function(item) {
          var itemSplit = item.split("=");
          urlParam[itemSplit[0]] = itemSplit[1];
        }));
        return urlParam;
      }
      function createItem(id, queueId) {
        var url = "object" === (__typeofVal = typeof id, "object" === __typeofVal ? __realTypeOfObj(id) : __typeofVal) ? id.url : id;
        var result = {
          queueId: queueId,
          id: url,
          url: url,
          rawUrl: void 0,
          urlParam: _parseUrlParam(url),
          type: "",
          error: null,
          content: null,
          complete: false,
          states: {},
          deps: null
        };
        if ("object" === (__typeofVal = typeof id, "object" === __typeofVal ? __realTypeOfObj(id) : __typeofVal)) {
          JS.mixin(result, id);
          if (id.skips) for (var i = 0; i < id.skips.length; i++) {
            var skip = id.skips[i];
            result.states[skip] = ItemState.COMPLETE;
          }
        }
        result.rawUrl = result.url;
        url && !result.type && (result.type = Path.extname(url).toLowerCase().substr(1));
        return result;
      }
      var checkedIds = [];
      function checkCircleReference(owner, item, recursiveCall) {
        if (!owner || !item) return false;
        var result = false;
        checkedIds.push(item.id);
        if (item.deps) {
          var i, deps = item.deps, subDep;
          for (i = 0; i < deps.length; i++) {
            subDep = deps[i];
            if (subDep.id === owner.id) {
              result = true;
              break;
            }
            if (checkedIds.indexOf(subDep.id) >= 0) continue;
            if (subDep.deps && checkCircleReference(owner, subDep, true)) {
              result = true;
              break;
            }
          }
        }
        recursiveCall || (checkedIds.length = 0);
        return result;
      }
      var LoadingItems = function(pipeline, urlList, onProgress, onComplete) {
        CallbacksInvoker.call(this);
        this._id = ++_qid;
        _queues[this._id] = this;
        this._pipeline = pipeline;
        this._errorUrls = [];
        this._appending = false;
        this._ownerQueue = null;
        this.onProgress = onProgress;
        this.onComplete = onComplete;
        this.map = {};
        this.completed = {};
        this.totalCount = 0;
        this.completedCount = 0;
        this._pipeline ? this.active = true : this.active = false;
        urlList && (urlList.length > 0 ? this.append(urlList) : this.allComplete());
      };
      LoadingItems.ItemState = new cc.Enum(ItemState);
      LoadingItems.create = function(pipeline, urlList, onProgress, onComplete) {
        if (void 0 === onProgress) {
          if ("function" === (__typeofVal = typeof urlList, "object" === __typeofVal ? __realTypeOfObj(urlList) : __typeofVal)) {
            onComplete = urlList;
            urlList = onProgress = null;
          }
        } else if (void 0 === onComplete) if ("function" === (__typeofVal = typeof urlList, 
        "object" === __typeofVal ? __realTypeOfObj(urlList) : __typeofVal)) {
          onComplete = onProgress;
          onProgress = urlList;
          urlList = null;
        } else {
          onComplete = onProgress;
          onProgress = null;
        }
        var queue = _pool.pop();
        if (queue) {
          queue._pipeline = pipeline;
          queue.onProgress = onProgress;
          queue.onComplete = onComplete;
          _queues[queue._id] = queue;
          queue._pipeline && (queue.active = true);
          urlList && queue.append(urlList);
        } else queue = new LoadingItems(pipeline, urlList, onProgress, onComplete);
        return queue;
      };
      LoadingItems.getQueue = function(item) {
        return item.queueId ? _queues[item.queueId] : null;
      };
      LoadingItems.itemComplete = function(item) {
        var queue = _queues[item.queueId];
        queue && queue.itemComplete(item.id);
      };
      LoadingItems.initQueueDeps = function(queue) {
        var dep = _queueDeps[queue._id];
        if (dep) {
          dep.completed.length = 0;
          dep.deps.length = 0;
        } else dep = _queueDeps[queue._id] = {
          completed: [],
          deps: []
        };
      };
      LoadingItems.registerQueueDep = function(owner, depId) {
        var queueId = owner.queueId || owner;
        if (!queueId) return false;
        var queueDepList = _queueDeps[queueId];
        if (queueDepList) -1 === queueDepList.deps.indexOf(depId) && queueDepList.deps.push(depId); else if (owner.id) for (var id in _queueDeps) {
          var queue = _queueDeps[id];
          -1 !== queue.deps.indexOf(owner.id) && -1 === queue.deps.indexOf(depId) && queue.deps.push(depId);
        }
      };
      LoadingItems.finishDep = function(depId) {
        for (var id in _queueDeps) {
          var queue = _queueDeps[id];
          -1 !== queue.deps.indexOf(depId) && -1 === queue.completed.indexOf(depId) && queue.completed.push(depId);
        }
      };
      var proto = LoadingItems.prototype;
      JS.mixin(proto, CallbacksInvoker.prototype);
      proto.append = function(urlList, owner) {
        if (!this.active) return [];
        owner && !owner.deps && (owner.deps = []);
        this._appending = true;
        var accepted = [], i, url, item;
        for (i = 0; i < urlList.length; ++i) {
          url = urlList[i];
          if (url.queueId && !this.map[url.id]) {
            this.map[url.id] = url;
            owner && owner.deps.push(url);
            if (url.complete || checkCircleReference(owner, url)) {
              this.totalCount++;
              this.itemComplete(url.id);
              continue;
            }
            var self = this;
            var queue = _queues[url.queueId];
            if (queue) {
              this.totalCount++;
              LoadingItems.registerQueueDep(owner || this._id, url.id);
              queue.addListener(url.id, (function(item) {
                self.itemComplete(item.id);
              }));
            }
            continue;
          }
          if (isIdValid(url)) {
            item = createItem(url, this._id);
            var key = item.id;
            if (!this.map[key]) {
              this.map[key] = item;
              this.totalCount++;
              owner && owner.deps.push(item);
              LoadingItems.registerQueueDep(owner || this._id, key);
              accepted.push(item);
            }
          }
        }
        this._appending = false;
        this.completedCount === this.totalCount ? this.allComplete() : this._pipeline.flowIn(accepted);
        return accepted;
      };
      proto._childOnProgress = function(item) {
        if (this.onProgress) {
          var dep = _queueDeps[this._id];
          this.onProgress(dep ? dep.completed.length : this.completedCount, dep ? dep.deps.length : this.totalCount, item);
        }
      };
      proto.allComplete = function() {
        var errors = 0 === this._errorUrls.length ? null : this._errorUrls;
        this.onComplete && this.onComplete(errors, this);
      };
      proto.isCompleted = function() {
        return this.completedCount >= this.totalCount;
      };
      proto.isItemCompleted = function(id) {
        return !!this.completed[id];
      };
      proto.exists = function(id) {
        return !!this.map[id];
      };
      proto.getContent = function(id) {
        var item = this.map[id];
        var ret = null;
        item && (item.content ? ret = item.content : item.alias && (ret = item.alias.content));
        return ret;
      };
      proto.getError = function(id) {
        var item = this.map[id];
        var ret = null;
        item && (item.error ? ret = item.error : item.alias && (ret = item.alias.error));
        return ret;
      };
      proto.addListener = CallbacksInvoker.prototype.add;
      proto.hasListener = CallbacksInvoker.prototype.has;
      proto.removeListener = CallbacksInvoker.prototype.remove;
      proto.removeAllListeners = CallbacksInvoker.prototype.removeAll;
      proto.removeItem = function(url) {
        var item = this.map[url];
        if (!item) return;
        if (!this.completed[item.alias || url]) return;
        delete this.completed[url];
        delete this.map[url];
        if (item.alias) {
          delete this.completed[item.alias.id];
          delete this.map[item.alias.id];
        }
        this.completedCount--;
        this.totalCount--;
      };
      proto.itemComplete = function(id) {
        var item = this.map[id];
        if (!item) return;
        var errorListId = this._errorUrls.indexOf(id);
        item.error && -1 === errorListId ? this._errorUrls.push(id) : item.error || -1 === errorListId || this._errorUrls.splice(errorListId, 1);
        this.completed[id] = item;
        this.completedCount++;
        LoadingItems.finishDep(item.id);
        if (this.onProgress) {
          var dep = _queueDeps[this._id];
          this.onProgress(dep ? dep.completed.length : this.completedCount, dep ? dep.deps.length : this.totalCount, item);
        }
        this.invoke(id, item);
        this.removeAll(id);
        !this._appending && this.completedCount >= this.totalCount && this.allComplete();
      };
      proto.destroy = function() {
        this.active = false;
        this._appending = false;
        this._pipeline = null;
        this._ownerQueue = null;
        this._errorUrls.length = 0;
        this.onProgress = null;
        this.onComplete = null;
        this.map = {};
        this.completed = {};
        this.totalCount = 0;
        this.completedCount = 0;
        CallbacksInvoker.call(this);
        _queues[this._id] = null;
        if (_queueDeps[this._id]) {
          _queueDeps[this._id].completed.length = 0;
          _queueDeps[this._id].deps.length = 0;
        }
        -1 === _pool.indexOf(this) && _pool.length < _POOL_MAX_LENGTH && _pool.push(this);
      };
      cc.LoadingItems = module.exports = LoadingItems;
    }), {
      "../platform/callbacks-invoker": 100,
      "../platform/js": 107,
      "../utils/CCPath": 112
    } ],
    83: [ (function(require, module, exports) {
      var Pipeline = require("./pipeline");
      var ID = "MD5Pipe";
      var ExtnameRegex = /(\.[^.\n\\/]*)$/;
      var MD5Pipe = function(md5AssetsMap, libraryBase, rawAssetsBase) {
        this.id = ID;
        this.async = false;
        this.pipeline = null;
        this.md5AssetsMap = md5AssetsMap;
        this.libraryBase = libraryBase;
        this.rawAssetsBase = rawAssetsBase;
      };
      MD5Pipe.ID = ID;
      MD5Pipe.prototype.handle = function(item) {
        item.url = this.transformURL(item.url);
        return item;
      };
      MD5Pipe.prototype.transformURL = function(url) {
        var index = url.indexOf("?");
        var key = url;
        -1 !== index && (key = url.substr(0, index));
        if (key.startsWith(this.libraryBase)) key = key.slice(this.libraryBase.length); else {
          if (!key.startsWith(this.rawAssetsBase)) return url;
          key = key.slice(this.rawAssetsBase.length);
        }
        var hashValue = this.md5AssetsMap[key];
        if (hashValue) {
          var matched = false;
          url = url.replace(ExtnameRegex, (function(match, p1) {
            matched = true;
            return "." + hashValue + p1;
          }));
          matched || (url = url + "." + hashValue);
        }
        return url;
      };
      Pipeline.MD5Pipe = module.exports = MD5Pipe;
    }), {
      "./pipeline": 85
    } ],
    84: [ (function(require, module, exports) {
      var JsonUnpacker = require("./json-unpacker");
      var pushToMap = require("../utils/misc").pushToMap;
      var uuidToPack = {};
      var packIndices = {};
      var globalUnpackers = {};
      var PackState = {
        Invalid: 0,
        Removed: 1,
        Downloading: 2,
        Loaded: 3
      };
      function error(uuid, packUuid) {
        return new Error("Can not retrieve " + uuid + " from packer " + packUuid);
      }
      module.exports = {
        initPacks: function(packs) {
          packIndices = packs;
          for (var packUuid in packs) {
            var uuids = packs[packUuid];
            for (var i = 0; i < uuids.length; i++) {
              var uuid = uuids[i];
              var pushFront = 1 === uuids.length;
              pushToMap(uuidToPack, uuid, packUuid, pushFront);
            }
          }
        },
        _loadNewPack: function(uuid, packUuid, callback) {
          var self = this;
          var packUrl = cc.AssetLibrary.getLibUrlNoExt(packUuid) + ".json";
          cc.loader.load({
            url: packUrl,
            ignoreMaxConcurrency: true
          }, (function(err, packJson) {
            if (err) {
              cc.errorID(4916, uuid);
              return callback(err);
            }
            var res = self._doLoadNewPack(uuid, packUuid, packJson);
            res ? callback(null, res) : callback(error(uuid, packUuid));
          }));
        },
        _doPreload: function(packUuid, packJson) {
          var unpacker = globalUnpackers[packUuid];
          unpacker || (unpacker = globalUnpackers[packUuid] = new JsonUnpacker());
          if (unpacker.state !== PackState.Loaded) {
            unpacker.read(packIndices[packUuid], packJson);
            unpacker.state = PackState.Loaded;
          }
        },
        _doLoadNewPack: function(uuid, packUuid, packJson) {
          var unpacker = globalUnpackers[packUuid];
          if (unpacker.state !== PackState.Loaded) {
            unpacker.read(packIndices[packUuid], packJson);
            unpacker.state = PackState.Loaded;
          }
          return unpacker.retrieve(uuid);
        },
        _selectLoadedPack: function(packUuids) {
          var existsPackState = PackState.Invalid;
          var existsPackUuid = "";
          for (var i = 0; i < packUuids.length; i++) {
            var packUuid = packUuids[i];
            var unpacker = globalUnpackers[packUuid];
            if (unpacker) {
              var state = unpacker.state;
              if (state === PackState.Loaded) return packUuid;
              if (state > existsPackState) {
                existsPackState = state;
                existsPackUuid = packUuid;
              }
            }
          }
          return existsPackState !== PackState.Invalid ? existsPackUuid : packUuids[0];
        },
        load: function(item, callback) {
          var uuid = item.uuid;
          var packUuid = uuidToPack[uuid];
          if (!packUuid) return;
          Array.isArray(packUuid) && (packUuid = this._selectLoadedPack(packUuid));
          var unpacker = globalUnpackers[packUuid];
          if (unpacker && unpacker.state === PackState.Loaded) {
            var json = unpacker.retrieve(uuid);
            return json || error(uuid, packUuid);
          }
          if (!unpacker) {
            true;
            console.log("Create unpacker %s for %s", packUuid, uuid);
            unpacker = globalUnpackers[packUuid] = new JsonUnpacker();
            unpacker.state = PackState.Downloading;
          }
          this._loadNewPack(uuid, packUuid, callback);
          return null;
        }
      };
      false;
    }), {
      "../utils/misc": 117,
      "./json-unpacker": 80
    } ],
    85: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      var LoadingItems = require("./loading-items");
      var ItemState = LoadingItems.ItemState;
      function flow(pipe, item) {
        var pipeId = pipe.id;
        var itemState = item.states[pipeId];
        var next = pipe.next;
        var pipeline = pipe.pipeline;
        if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) return;
        if (itemState === ItemState.COMPLETE) next ? flow(next, item) : pipeline.flowOut(item); else {
          item.states[pipeId] = ItemState.WORKING;
          var result = pipe.handle(item, (function(err, result) {
            if (err) {
              item.error = err;
              item.states[pipeId] = ItemState.ERROR;
              pipeline.flowOut(item);
            } else {
              result && (item.content = result);
              item.states[pipeId] = ItemState.COMPLETE;
              next ? flow(next, item) : pipeline.flowOut(item);
            }
          }));
          if (result instanceof Error) {
            item.error = result;
            item.states[pipeId] = ItemState.ERROR;
            pipeline.flowOut(item);
          } else if (void 0 !== result) {
            null !== result && (item.content = result);
            item.states[pipeId] = ItemState.COMPLETE;
            next ? flow(next, item) : pipeline.flowOut(item);
          }
        }
      }
      var Pipeline = function(pipes) {
        this._pipes = pipes;
        this._cache = {};
        for (var i = 0; i < pipes.length; ++i) {
          var pipe = pipes[i];
          if (!pipe.handle || !pipe.id) continue;
          pipe.pipeline = this;
          pipe.next = i < pipes.length - 1 ? pipes[i + 1] : null;
        }
      };
      Pipeline.ItemState = ItemState;
      var proto = Pipeline.prototype;
      proto.insertPipe = function(pipe, index) {
        if (!pipe.handle || !pipe.id || index > this._pipes.length) {
          cc.warnID(4921);
          return;
        }
        if (this._pipes.indexOf(pipe) > 0) {
          cc.warnID(4922);
          return;
        }
        pipe.pipeline = this;
        var nextPipe = null;
        index < this._pipes.length && (nextPipe = this._pipes[index]);
        var previousPipe = null;
        index > 0 && (previousPipe = this._pipes[index - 1]);
        previousPipe && (previousPipe.next = pipe);
        pipe.next = nextPipe;
        this._pipes.splice(index, 0, pipe);
      };
      proto.insertPipeAfter = function(refPipe, newPipe) {
        var index = this._pipes.indexOf(refPipe);
        if (index < 0) return;
        this.insertPipe(newPipe, index + 1);
      };
      proto.appendPipe = function(pipe) {
        if (!pipe.handle || !pipe.id) return;
        pipe.pipeline = this;
        pipe.next = null;
        this._pipes.length > 0 && (this._pipes[this._pipes.length - 1].next = pipe);
        this._pipes.push(pipe);
      };
      proto.flowIn = function(items) {
        var i, pipe = this._pipes[0], item;
        if (pipe) {
          for (i = 0; i < items.length; i++) {
            item = items[i];
            this._cache[item.id] = item;
          }
          for (i = 0; i < items.length; i++) {
            item = items[i];
            flow(pipe, item);
          }
        } else for (i = 0; i < items.length; i++) this.flowOut(items[i]);
      };
      proto.flowInDeps = function(owner, urlList, callback) {
        var deps = LoadingItems.create(this, (function(errors, items) {
          callback(errors, items);
          items.destroy();
        }));
        return deps.append(urlList, owner);
      };
      proto.flowOut = function(item) {
        item.error ? delete this._cache[item.id] : this._cache[item.id] || (this._cache[item.id] = item);
        item.complete = true;
        LoadingItems.itemComplete(item);
      };
      proto.copyItemStates = function(srcItem, dstItems) {
        if (!(dstItems instanceof Array)) {
          dstItems.states = srcItem.states;
          return;
        }
        for (var i = 0; i < dstItems.length; ++i) dstItems[i].states = srcItem.states;
      };
      proto.isFlowing = function() {
        return true;
      };
      proto.getItems = function() {
        return null;
      };
      proto.getItem = function(id) {
        var item = this._cache[id];
        if (!item) return item;
        item.alias && (item = item.alias);
        return item;
      };
      proto.removeItem = function(id) {
        var removed = this._cache[id];
        removed && removed.complete && delete this._cache[id];
        return removed;
      };
      proto.clear = function() {
        for (var id in this._cache) {
          var item = this._cache[id];
          delete this._cache[id];
          if (!item.complete) {
            item.error = new Error("Canceled manually");
            this.flowOut(item);
          }
        }
      };
      cc.Pipeline = module.exports = Pipeline;
    }), {
      "../platform/js": 107,
      "./loading-items": 82
    } ],
    86: [ (function(require, module, exports) {
      true;
      var JS;
      var tmpInfo;
      (function() {
        JS = require("../platform/js");
        function ReleasedAssetChecker() {
          this._releasedKeys = JS.createMap(true);
          this._dirty = false;
        }
        ReleasedAssetChecker.prototype.setReleased = function(item, releasedKey) {
          this._releasedKeys[releasedKey] = true;
          this._dirty = true;
        };
        tmpInfo = null;
        function getItemDesc(item) {
          if (item.uuid) {
            tmpInfo || (tmpInfo = {
              path: "",
              type: null
            });
            if (cc.loader._resources._getInfo_DEBUG(item.uuid, tmpInfo)) {
              tmpInfo.path = "resources/" + tmpInfo.path;
              return '"' + tmpInfo.path + '" (type: ' + JS.getClassName(tmpInfo.type) + ", uuid: " + item.uuid + ")";
            }
            return '"' + item.rawUrl + '" (' + item.uuid + ")";
          }
          return '"' + item.rawUrl + '"';
        }
        function doCheckCouldRelease(releasedKey, refOwnerItem, caches) {
          var loadedAgain = caches[releasedKey];
          loadedAgain || cc.log('"' + releasedKey + '" was released but maybe still referenced by ' + getItemDesc(refOwnerItem));
        }
        ReleasedAssetChecker.prototype.checkCouldRelease = function(caches) {
          if (!this._dirty) return;
          this._dirty = false;
          var released = this._releasedKeys;
          for (var id in caches) {
            var item = caches[id];
            item.alias && (item = item.alias);
            var depends = item.dependKeys;
            if (depends) for (var i = 0; i < depends.length; ++i) {
              var depend = depends[i];
              if (released[depend]) {
                doCheckCouldRelease(depend, item, caches);
                delete released[depend];
              }
            }
          }
          JS.clear(released);
        };
        module.exports = ReleasedAssetChecker;
      })();
    }), {
      "../platform/js": 107
    } ],
    87: [ (function(require, module, exports) {
      var sys = require("../platform/CCSys");
      var urlAppendTimestamp;
      true;
      module.exports = function(item, callback) {
        var url = item.url;
        var result = jsb.fileUtils.getStringFromFile(url);
        return "string" === (__typeofVal = typeof result, "object" === __typeofVal ? __realTypeOfObj(result) : __typeofVal) && result ? result : new Error("Download text failed: " + url);
      };
    }), {
      "../platform/CCSys": 97,
      "./utils": 88
    } ],
    88: [ (function(require, module, exports) {
      var _noCacheRex = /\?/;
      module.exports = {
        urlAppendTimestamp: function(url) {
          cc.game.config["noCache"] && "string" === (__typeofVal = typeof url, "object" === __typeofVal ? __realTypeOfObj(url) : __typeofVal) && (_noCacheRex.test(url) ? url += "&_t=" + (new Date() - 0) : url += "?_t=" + (new Date() - 0));
          return url;
        }
      };
    }), {} ],
    89: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      require("../platform/deserialize");
      var LoadingItems = require("./loading-items");
      function isSceneObj(json) {
        var SCENE_ID = "cc.Scene";
        var PREFAB_ID = "cc.Prefab";
        return json && (json[0] && json[0].__type__ === SCENE_ID || json[1] && json[1].__type__ === SCENE_ID || json[0] && json[0].__type__ === PREFAB_ID);
      }
      function loadDepends(pipeline, item, asset, tdInfo, deferredLoadRawAssetsInRuntime, callback) {
        var uuidList = tdInfo.uuidList;
        var objList, propList, depends;
        var i, dependUuid;
        var dependKeys = item.dependKeys = [];
        if (deferredLoadRawAssetsInRuntime) {
          objList = [];
          propList = [];
          depends = [];
          for (i = 0; i < uuidList.length; i++) {
            dependUuid = uuidList[i];
            var obj = tdInfo.uuidObjList[i];
            var prop = tdInfo.uuidPropList[i];
            var info = cc.AssetLibrary._getAssetInfoInRuntime(dependUuid);
            if (info.raw) {
              var url = info.url;
              obj[prop] = url;
              dependKeys.push(url);
            } else {
              objList.push(obj);
              propList.push(prop);
              depends.push({
                type: "uuid",
                uuid: dependUuid,
                deferredLoadRaw: true
              });
            }
          }
        } else {
          objList = tdInfo.uuidObjList;
          propList = tdInfo.uuidPropList;
          depends = new Array(uuidList.length);
          for (i = 0; i < uuidList.length; i++) {
            dependUuid = uuidList[i];
            depends[i] = {
              type: "uuid",
              uuid: dependUuid
            };
          }
        }
        if (tdInfo.rawProp) {
          objList.push(asset);
          propList.push(tdInfo.rawProp);
          depends.push(item.url);
        }
        if (asset._preloadRawFiles) {
          var finalCallback = callback;
          callback = function() {
            asset._preloadRawFiles((function(err) {
              finalCallback(err || null, asset);
            }));
          };
        }
        if (0 === depends.length) {
          cc.deserialize.Details.pool.put(tdInfo);
          return callback(null, asset);
        }
        item.content = asset;
        pipeline.flowInDeps(item, depends, (function(errors, items) {
          var item, missingAssetReporter;
          for (var src in items.map) {
            item = items.map[src];
            item.uuid && item.content && (item.content._uuid = item.uuid);
          }
          for (var i = 0; i < depends.length; i++) {
            var dependSrc = depends[i].uuid;
            var dependUrl = depends[i].url;
            var dependObj = objList[i];
            var dependProp = propList[i];
            item = items.map[dependUrl];
            if (item) {
              var thisOfLoadCallback = {
                obj: dependObj,
                prop: dependProp
              };
              function loadCallback(item) {
                var value = item.isRawAsset ? item.rawUrl : item.content;
                this.obj[this.prop] = value;
                item.uuid !== asset._uuid && dependKeys.indexOf(item.id) < 0 && dependKeys.push(item.id);
              }
              if (item.complete || item.content) if (item.error) {
                var MissingObjectReporter;
                false;
                cc._throw(item.error);
              } else loadCallback.call(thisOfLoadCallback, item); else {
                var queue = LoadingItems.getQueue(item);
                var list = queue._callbackTable[dependSrc];
                list ? list.unshift(loadCallback, thisOfLoadCallback) : queue.addListener(dependSrc, loadCallback, thisOfLoadCallback);
              }
            }
          }
          false;
          cc.deserialize.Details.pool.put(tdInfo);
          callback(null, asset);
        }));
      }
      function canDeferredLoad(asset, item, isScene) {
        false, true;
        return false;
        var res;
      }
      var MissingClass;
      function loadUuid(item, callback) {
        false;
        var json;
        if ("string" === (__typeofVal = typeof item.content, "object" === __typeofVal ? __realTypeOfObj(item.content) : __typeofVal)) try {
          json = JSON.parse(item.content);
        } catch (e) {
          return new Error("Uuid Loader: Parse asset [" + item.id + "] failed : " + e.stack);
        } else {
          if ("object" !== (__typeofVal = typeof item.content, "object" === __typeofVal ? __realTypeOfObj(item.content) : __typeofVal)) return new Error("JSON Loader: Input item doesn't contain string content");
          json = item.content;
        }
        var classFinder;
        var isScene = isSceneObj(json);
        if (isScene) {
          false;
          classFinder = cc._MissingScript.safeFindClass;
        } else classFinder = function(id) {
          var cls = JS._getClassById(id);
          if (cls) return cls;
          cc.warnID(4903, id);
          return Object;
        };
        var tdInfo = cc.deserialize.Details.pool.get();
        var asset;
        try {
          asset = cc.deserialize(json, tdInfo, {
            classFinder: classFinder,
            target: item.existingAsset,
            customEnv: item
          });
        } catch (e) {
          cc.deserialize.Details.pool.put(tdInfo);
          var err = e + "\n" + e.stack;
          return new Error("Uuid Loader: Deserialize asset [" + item.id + "] failed : " + err);
        }
        asset._uuid = item.uuid;
        false;
        var deferredLoad = canDeferredLoad(asset, item, isScene);
        loadDepends(this.pipeline, item, asset, tdInfo, deferredLoad, callback);
      }
      module.exports = loadUuid;
      loadUuid.isSceneObj = isSceneObj;
    }), {
      "../platform/deserialize": 102,
      "../platform/js": 107,
      "./loading-items": 82
    } ],
    90: [ (function(require, module, exports) {
      var CompScheduler = require("./component-scheduler");
      var Flags = require("./platform/CCObject").Flags;
      var JS = require("./platform/js");
      var callerFunctor = false;
      var MAX_POOL_SIZE = 4;
      var IsPreloadStarted = Flags.IsPreloadStarted;
      var IsOnLoadStarted = Flags.IsOnLoadStarted;
      var IsOnLoadCalled = Flags.IsOnLoadCalled;
      var Deactivating = Flags.Deactivating;
      var callPreloadInTryCatch = false;
      var callOnLoadInTryCatch = false;
      var callOnDestroyInTryCatch = false;
      var callResetInTryCatch = false;
      var callOnFocusInTryCatch = false;
      var callOnLostFocusInTryCatch = false;
      var callPreload = "c.__preload();";
      var callOnLoad = "c.onLoad();c._objFlags|=" + IsOnLoadCalled;
      var UnsortedInvoker = cc.Class({
        extends: CompScheduler.LifeCycleInvoker,
        add: function(comp) {
          this._zero.array.push(comp);
        },
        remove: function(comp) {
          this._zero.fastRemove(comp);
        },
        cancelInactive: function(flagToClear) {
          CompScheduler.LifeCycleInvoker.stableRemoveInactive(this._zero, flagToClear);
        },
        invoke: function() {
          this._invoke(this._zero);
          this._zero.array.length = 0;
        }
      });
      var invokePreload = CompScheduler.createInvokeImpl(callPreload);
      var invokeOnLoad = CompScheduler.createInvokeImpl(callOnLoad);
      var activateTasksPool = new JS.Pool(MAX_POOL_SIZE);
      activateTasksPool.get = function getActivateTask() {
        var task = this._get() || {
          preload: new UnsortedInvoker(invokePreload),
          onLoad: new CompScheduler.OneOffInvoker(invokeOnLoad),
          onEnable: new CompScheduler.OneOffInvoker(CompScheduler.invokeOnEnable)
        };
        task.preload._zero.i = -1;
        var invoker = task.onLoad;
        invoker._zero.i = -1;
        invoker._neg.i = -1;
        invoker._pos.i = -1;
        invoker = task.onEnable;
        invoker._zero.i = -1;
        invoker._neg.i = -1;
        invoker._pos.i = -1;
        return task;
      };
      function _componentCorrupted(node, comp, index) {
        false;
        comp ? node._removeComponent(comp) : JS.array.removeAt(node._components, index);
      }
      function _onLoadInEditor(comp) {
        if (comp.onLoad && !cc.engine._isPlaying) {
          var focused = Editor.Selection.curActivate("node") === comp.node.uuid;
          focused && comp.onFocusInEditor ? callOnFocusInTryCatch(comp) : comp.onLostFocusInEditor && callOnLostFocusInTryCatch(comp);
        }
        true;
        _Scene.AssetsWatcher.start(comp);
      }
      function ctor() {
        this._activatingStack = [];
      }
      var NodeActivator = cc.Class({
        ctor: ctor,
        reset: ctor,
        _activateNodeRecursively: function(node, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (node._objFlags & Deactivating) {
            cc.errorID(3816, node.name);
            return;
          }
          node._activeInHierarchy = true;
          var originCount = node._components.length;
          for (var i = 0; i < originCount; ++i) {
            var component = node._components[i];
            if (component instanceof cc.Component) this.activateComp(component, preloadInvoker, onLoadInvoker, onEnableInvoker); else {
              _componentCorrupted(node, component, i);
              --i;
              --originCount;
            }
          }
          for (var _i = 0, len = node._children.length; _i < len; ++_i) {
            var child = node._children[_i];
            child._active && this._activateNodeRecursively(child, preloadInvoker, onLoadInvoker, onEnableInvoker);
          }
          node._onPostActivated(true);
        },
        _deactivateNodeRecursively: function(node) {
          false;
          node._objFlags |= Deactivating;
          node._activeInHierarchy = false;
          var originCount = node._components.length;
          for (var c = 0; c < originCount; ++c) {
            var component = node._components[c];
            if (component._enabled) {
              cc.director._compScheduler.disableComp(component);
              if (node._activeInHierarchy) {
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }
          for (var i = 0, len = node._children.length; i < len; ++i) {
            var child = node._children[i];
            if (child._activeInHierarchy) {
              this._deactivateNodeRecursively(child);
              if (node._activeInHierarchy) {
                node._objFlags &= ~Deactivating;
                return;
              }
            }
          }
          node._onPostActivated(false);
          node._objFlags &= ~Deactivating;
        },
        activateNode: function(node, active) {
          if (active) {
            var task = activateTasksPool.get();
            this._activatingStack.push(task);
            this._activateNodeRecursively(node, task.preload, task.onLoad, task.onEnable);
            task.preload.invoke();
            task.onLoad.invoke();
            task.onEnable.invoke();
            this._activatingStack.pop();
            activateTasksPool.put(task);
          } else {
            this._deactivateNodeRecursively(node);
            var stack = this._activatingStack;
            for (var i = 0; i < stack.length; i++) {
              var lastTask = stack[i];
              lastTask.preload.cancelInactive(IsPreloadStarted);
              lastTask.onLoad.cancelInactive(IsOnLoadStarted);
              lastTask.onEnable.cancelInactive();
            }
          }
          node.emit("active-in-hierarchy-changed", node);
        },
        activateComp: function(comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
          if (!(comp._objFlags & IsPreloadStarted)) {
            comp._objFlags |= IsPreloadStarted;
            "function" === (__typeofVal = typeof comp.__preload, "object" === __typeofVal ? __realTypeOfObj(comp.__preload) : __typeofVal) && (preloadInvoker ? preloadInvoker.add(comp) : comp.__preload());
          }
          if (!(comp._objFlags & IsOnLoadStarted)) {
            comp._objFlags |= IsOnLoadStarted;
            if (comp.onLoad) if (onLoadInvoker) onLoadInvoker.add(comp); else {
              comp.onLoad();
              comp._objFlags |= IsOnLoadCalled;
            } else comp._objFlags |= IsOnLoadCalled;
          }
          if (comp._enabled) {
            var deactivatedOnLoading = !comp.node._activeInHierarchy;
            if (deactivatedOnLoading) return;
            cc.director._compScheduler.enableComp(comp, onEnableInvoker);
          }
        },
        destroyComp: function(comp) {
          cc.director._compScheduler.disableComp(comp);
          comp.onDestroy && comp._objFlags & IsOnLoadCalled && comp.onDestroy();
        },
        resetComp: false
      });
      module.exports = NodeActivator;
    }), {
      "./component-scheduler": 33,
      "./platform/CCObject": 96,
      "./platform/js": 107,
      "./utils/misc": 117
    } ],
    91: [ (function(require, module, exports) {
      var Asset = require("../assets/CCAsset");
      var callInNextTick = require("./utils").callInNextTick;
      var Loader = require("../load-pipeline/CCLoader");
      var PackDownloader = require("../load-pipeline/pack-downloader");
      var AutoReleaseUtils = require("../load-pipeline/auto-release-utils");
      var decodeUuid = require("../utils/decode-uuid");
      var MD5Pipe = require("../load-pipeline/md5-pipe");
      var _libraryBase = "";
      var _rawAssetsBase = "";
      var _uuidToRawAsset = {};
      function isScene(asset) {
        return asset && (asset.constructor === cc.SceneAsset || asset instanceof cc.Scene);
      }
      function RawAssetEntry(url, type) {
        this.url = url;
        this.type = type;
      }
      var AssetLibrary = {
        loadAsset: function(uuid, callback, options) {
          if ("string" !== (__typeofVal = typeof uuid, "object" === __typeofVal ? __realTypeOfObj(uuid) : __typeofVal)) return callInNextTick(callback, new Error("[AssetLibrary] uuid must be string"), null);
          var item = {
            uuid: uuid,
            type: "uuid"
          };
          options && options.existingAsset && (item.existingAsset = options.existingAsset);
          Loader.load(item, (function(error, asset) {
            if (error || !asset) error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + (error ? error.message : "Unknown error")); else {
              if (asset.constructor === cc.SceneAsset) {
                false;
                var key = cc.loader._getReferenceKey(uuid);
                asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(key);
              }
              if (false, isScene(asset)) {
                var id = cc.loader._getReferenceKey(uuid);
                Loader.removeItem(id);
              }
            }
            callback && callback(error, asset);
          }));
        },
        getLibUrlNoExt: function(uuid) {
          true;
          uuid = decodeUuid(uuid);
          return _libraryBase + uuid.slice(0, 2) + "/" + uuid;
        },
        _queryAssetInfoInEditor: function(uuid, callback) {
          false;
        },
        _getAssetInfoInRuntime: function(uuid, result) {
          result = result || {
            url: null,
            raw: false
          };
          var info = _uuidToRawAsset[uuid];
          if (info && !cc.isChildClassOf(info.type, cc.Asset)) {
            result.url = _rawAssetsBase + info.url;
            result.raw = true;
          } else {
            result.url = this.getLibUrlNoExt(uuid) + ".json";
            result.raw = false;
          }
          return result;
        },
        _getAssetUrl: function(uuid) {
          var info = _uuidToRawAsset[uuid];
          if (info) return _rawAssetsBase + info.url;
          return null;
        },
        queryAssetInfo: function(uuid, callback) {
          false;
          var info = this._getAssetInfoInRuntime(uuid);
          callback(null, info.url, info.raw);
        },
        parseUuidInEditor: function(url) {
          var uuid;
          var isImported;
          var dir;
          var dirBasename;
          var isAssetUrl;
          var index;
          false;
        },
        loadJson: function(json, callback) {
          var randomUuid = "" + (new Date().getTime() + Math.random());
          var item = {
            uuid: randomUuid,
            type: "uuid",
            content: json,
            skips: [ Loader.assetLoader.id, Loader.downloader.id ]
          };
          Loader.load(item, (function(error, asset) {
            if (error) error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + error.message); else {
              if (asset.constructor === cc.SceneAsset) {
                var key = cc.loader._getReferenceKey(randomUuid);
                asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(key);
              }
              if (false, isScene(asset)) {
                var id = cc.loader._getReferenceKey(randomUuid);
                Loader.removeItem(id);
              }
            }
            asset._uuid = "";
            callback && callback(error, asset);
          }));
        },
        getAssetByUuid: function(uuid) {
          return AssetLibrary._uuidToAsset[uuid] || null;
        },
        init: function(options) {
          false;
          var libraryPath = options.libraryPath;
          libraryPath = libraryPath.replace(/\\/g, "/");
          _libraryBase = cc.path.stripSep(libraryPath) + "/";
          _rawAssetsBase = options.rawAssetsBase;
          var md5AssetsMap = options.md5AssetsMap;
          if (md5AssetsMap) {
            var md5Pipe = new MD5Pipe(md5AssetsMap, _libraryBase, _rawAssetsBase);
            cc.loader.insertPipeAfter(cc.loader.assetLoader, md5Pipe);
            cc.loader.md5Pipe = md5Pipe;
          }
          var resources = Loader._resources;
          resources.reset();
          var rawAssets = options.rawAssets;
          if (rawAssets) {
            var RES_DIR = "resources/";
            for (var mountPoint in rawAssets) {
              var assets = rawAssets[mountPoint];
              for (var uuid in assets) {
                var info = assets[uuid];
                var url = info[0];
                var typeId = info[1];
                var type = cc.js._getClassById(typeId);
                if (!type) {
                  cc.error("Cannot get", typeId);
                  continue;
                }
                _uuidToRawAsset[uuid] = new RawAssetEntry(mountPoint + "/" + url, type);
                if ("assets" === mountPoint && url.startsWith(RES_DIR)) {
                  if (cc.isChildClassOf(type, Asset)) {
                    var ext = cc.path.extname(url);
                    url = ext ? url.slice(RES_DIR.length, -ext.length) : url.slice(RES_DIR.length);
                  } else url = url.slice(RES_DIR.length);
                  var isSubAsset = 1 === info[2];
                  resources.add(url, uuid, type, !isSubAsset);
                }
              }
            }
          }
          options.packedAssets && PackDownloader.initPacks(options.packedAssets);
          var mountPaths = options.mountPaths;
          mountPaths || (mountPaths = {
            assets: _rawAssetsBase + "assets",
            internal: _rawAssetsBase + "internal"
          });
          cc.url._init(mountPaths);
        }
      };
      AssetLibrary._uuidToAsset = {};
      module.exports = cc.AssetLibrary = AssetLibrary;
    }), {
      "../assets/CCAsset": 18,
      "../load-pipeline/CCLoader": 74,
      "../load-pipeline/auto-release-utils": 77,
      "../load-pipeline/md5-pipe": 83,
      "../load-pipeline/pack-downloader": 84,
      "../utils/decode-uuid": 115,
      "./utils": 111
    } ],
    92: [ (function(require, module, exports) {
      var JS = require("./js");
      var Enum = require("./CCEnum");
      var Utils = require("./utils");
      var _isPlainEmptyObj_DEV = Utils.isPlainEmptyObj_DEV;
      var _cloneable_DEV = Utils.cloneable_DEV;
      var Attr = require("./attribute");
      var DELIMETER = Attr.DELIMETER;
      var getTypeChecker = Attr.getTypeChecker;
      var preprocess = require("./preprocess-class");
      require("./requiring-frame");
      var BUILTIN_ENTRIES = [ "name", "extends", "mixins", "ctor", "__ctor__", "properties", "statics", "editor", "__ES6__" ];
      var INVALID_STATICS_DEV = false;
      function pushUnique(array, item) {
        array.indexOf(item) < 0 && array.push(item);
      }
      var deferredInitializer = {
        datas: null,
        push: function(data) {
          if (this.datas) this.datas.push(data); else {
            this.datas = [ data ];
            var self = this;
            setTimeout((function() {
              self.init();
            }), 0);
          }
        },
        init: function() {
          var datas = this.datas;
          if (datas) {
            for (var i = 0; i < datas.length; ++i) {
              var data = datas[i];
              var cls = data.cls;
              var properties = data.props;
              "function" === (__typeofVal = typeof properties, "object" === __typeofVal ? __realTypeOfObj(properties) : __typeofVal) && (properties = properties());
              var name = JS.getClassName(cls);
              properties ? declareProperties(cls, name, properties, cls.$super, data.mixins) : cc.errorID(3633, name);
            }
            this.datas = null;
          }
        }
      };
      function appendProp(cls, name) {
        false;
        pushUnique(cls.__props__, name);
      }
      var tmpArray = [];
      function defineProp(cls, className, propName, val, es6) {
        var defaultValue = val.default;
        false;
        Attr.setClassAttr(cls, propName, "default", defaultValue);
        appendProp(cls, propName);
        var attrs = parseAttributes(cls, val, className, propName, false);
        if (attrs) {
          var onAfterProp = tmpArray;
          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];
            Attr.attr(cls, propName, attr);
            attr._onAfterProp && onAfterProp.push(attr._onAfterProp);
          }
          for (var c = 0; c < onAfterProp.length; c++) onAfterProp[c](cls, propName);
          tmpArray.length = 0;
          attrs.length = 0;
        }
      }
      function defineGetSet(cls, name, propName, val, es6) {
        var getter = val.get;
        var setter = val.set;
        var proto = cls.prototype;
        var d = Object.getOwnPropertyDescriptor(proto, propName);
        var setterUndefined = !d;
        if (getter) {
          false;
          var attrs = parseAttributes(cls, val, name, propName, true);
          for (var i = 0; i < attrs.length; i++) Attr.attr(cls, propName, attrs[i]);
          attrs.length = 0;
          var ForceSerializable = false;
          ForceSerializable || Attr.setClassAttr(cls, propName, "serializable", false);
          !!ForceSerializable && appendProp(cls, propName);
          es6 || JS.get(proto, propName, getter, setterUndefined, setterUndefined);
          false, false;
        }
        if (setter) {
          if (!es6) {
            false;
            JS.set(proto, propName, setter, setterUndefined, setterUndefined);
          }
          false, false;
        }
      }
      function getDefault(defaultVal) {
        if ("function" === (__typeofVal = typeof defaultVal, "object" === __typeofVal ? __realTypeOfObj(defaultVal) : __typeofVal)) {
          false;
          return defaultVal();
        }
        return defaultVal;
      }
      function mixinWithInherited(dest, src, filter) {
        for (var prop in src) dest.hasOwnProperty(prop) || filter && !filter(prop) || Object.defineProperty(dest, prop, JS.getPropertyDescriptor(src, prop));
      }
      function doDefine(className, baseClass, mixins, options) {
        var shouldAddProtoCtor;
        var __ctor__ = options.__ctor__;
        var ctor = options.ctor;
        var __es6__ = options.__ES6__;
        var ctorToUse;
        false;
        var ctors;
        var fireClass;
        if (__es6__) {
          ctors = [ ctor ];
          fireClass = ctor;
        } else {
          ctors = __ctor__ ? [ __ctor__ ] : _getAllCtors(baseClass, mixins, options);
          fireClass = _createCtor(ctors, baseClass, className, options);
          JS.value(fireClass, "extend", (function(options) {
            options.extends = this;
            return CCClass(options);
          }), true);
        }
        JS.value(fireClass, "__ctors__", ctors.length > 0 ? ctors : null, true);
        var prototype = fireClass.prototype;
        if (baseClass) {
          if (!__es6__) {
            JS.extend(fireClass, baseClass);
            prototype = fireClass.prototype;
          }
          JS.value(fireClass, "$super", baseClass);
          false;
        }
        if (mixins) {
          for (var m = mixins.length - 1; m >= 0; m--) {
            var mixin = mixins[m];
            mixinWithInherited(prototype, mixin.prototype);
            mixinWithInherited(fireClass, mixin, (function(prop) {
              return mixin.hasOwnProperty(prop) && true;
            }));
            CCClass._isCCClass(mixin) && mixinWithInherited(Attr.getClassAttrs(fireClass).constructor.prototype, Attr.getClassAttrs(mixin).constructor.prototype);
          }
          prototype.constructor = fireClass;
        }
        __es6__ || (prototype.__initProps__ = compileProps);
        JS.setClassName(className, fireClass);
        return fireClass;
      }
      function define(className, baseClass, mixins, options) {
        var Component = cc.Component;
        var frame = cc._RF.peek();
        if (frame && cc.isChildClassOf(baseClass, Component)) {
          if (cc.isChildClassOf(frame.cls, Component)) {
            cc.errorID(3615);
            return null;
          }
          false;
          className = className || frame.script;
        }
        var cls = doDefine(className, baseClass, mixins, options);
        if (frame) if (cc.isChildClassOf(baseClass, Component)) {
          var uuid = frame.uuid;
          if (uuid) {
            JS._setClassId(uuid, cls);
            false;
          }
          frame.cls = cls;
        } else cc.isChildClassOf(frame.cls, Component) || (frame.cls = cls);
        return cls;
      }
      function normalizeClassName_DEV(className) {
        var DefaultName = "CCClass";
        if (className) {
          className = className.replace(/^[^$A-Za-z_]/, "_").replace(/[^0-9A-Za-z_$]/g, "_");
          try {
            Function("function " + className + "(){}")();
            return className;
          } catch (e) {}
        }
        return DefaultName;
      }
      function getNewValueTypeCode(value) {
        var clsName = JS.getClassName(value);
        var type = value.constructor;
        var res = "new " + clsName + "(";
        for (var i = 0; i < type.__props__.length; i++) {
          var prop = type.__props__[i];
          var propVal = value[prop];
          if ("object" === (__typeofVal = typeof propVal, "object" === __typeofVal ? __realTypeOfObj(propVal) : __typeofVal)) {
            cc.errorID(3641, clsName);
            return "new " + clsName + "()";
          }
          res += propVal;
          i < type.__props__.length - 1 && (res += ",");
        }
        return res + ")";
      }
      function getNewValueType(value) {
        var clsName = JS.getClassName(value);
        var type = value.constructor;
        var res = new type();
        for (var i = 0; i < type.__props__.length; i++) {
          var prop = type.__props__[i];
          var propVal = value[prop];
          if ("object" === (__typeofVal = typeof propVal, "object" === __typeofVal ? __realTypeOfObj(propVal) : __typeofVal)) {
            cc.errorID(3641, clsName);
            return res;
          }
          res[prop] = propVal;
        }
        return res;
      }
      function escapeForJS(s) {
        return JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      function getInitPropsJit(attrs, propList) {
        var F = [];
        var func = "";
        for (var i = 0; i < propList.length; i++) {
          var prop = propList[i];
          var attrKey = prop + DELIMETER + "default";
          if (attrKey in attrs) {
            var statement;
            statement = IDENTIFIER_RE.test(prop) ? "this." + prop + "=" : "this[" + escapeForJS(prop) + "]=";
            var expression;
            var def = attrs[attrKey];
            if ("object" === (__typeofVal = typeof def, "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal) && def) expression = def instanceof cc.ValueType ? getNewValueTypeCode(def) : Array.isArray(def) ? "[]" : "{}"; else if ("function" === (__typeofVal = typeof def, 
            "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal)) {
              var index = F.length;
              F.push(def);
              expression = "F[" + index + "]()";
              false;
            } else expression = "string" === (__typeofVal = typeof def, "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal) ? escapeForJS(def) : def;
            statement = statement + expression + ";\n";
            func += statement;
          }
        }
        var initProps;
        initProps = 0 === F.length ? Function(func) : Function("F", "return (function(){\n" + func + "})")(F);
        return initProps;
      }
      function getInitProps(attrs, propList) {
        function func() {
          var F = [];
          for (var i = 0; i < propList.length; i++) {
            var prop = propList[i];
            var attrKey = prop + DELIMETER + "default";
            if (attrKey in attrs) {
              var expression;
              var def = attrs[attrKey];
              if ("object" === (__typeofVal = typeof def, "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal) && def) expression = def instanceof cc.ValueType ? getNewValueType(def) : Array.isArray(def) ? [] : {}; else if ("function" === (__typeofVal = typeof def, 
              "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal)) {
                var index = F.length;
                F.push(def);
                expression = F[index]();
                false;
              } else expression = def;
              this[prop] = expression;
            }
          }
        }
        return func;
      }
      var IDENTIFIER_RE = /^[$A-Za-z_][0-9A-Za-z_$]*$/;
      function compileProps(actualClass) {
        var attrs = Attr.getClassAttrs(actualClass);
        var propList = actualClass.__props__;
        if (null === propList) {
          deferredInitializer.init();
          propList = actualClass.__props__;
        }
        var initProps = getInitPropsJit(attrs, propList);
        actualClass.prototype.__initProps__ = initProps;
        initProps.call(this);
      }
      var _createCtor = function(ctors, baseClass, className, options) {
        var superCallBounded = baseClass && boundSuperCalls(baseClass, options, className);
        var ctorName = "CCClass";
        var body = "return function " + ctorName + "(){\n";
        superCallBounded && (body += "this._super=null;\n");
        body += "this.__initProps__(" + ctorName + ");\n";
        var ctorLen = ctors.length;
        if (ctorLen > 0) {
          var useTryCatch = !(className && className.startsWith("cc."));
          useTryCatch && (body += "try{\n");
          var SNIPPET = "].apply(this,arguments);\n";
          if (1 === ctorLen) body += ctorName + ".__ctors__[0" + SNIPPET; else {
            body += "var cs=" + ctorName + ".__ctors__;\n";
            for (var i = 0; i < ctorLen; i++) body += "cs[" + i + SNIPPET;
          }
          useTryCatch && (body += "}catch(e){\ncc._throw(e);\n}\n");
        }
        body += "}";
        return Function(body)();
      };
      function _validateCtor_DEV(ctor, baseClass, className, options) {
        var originCtor;
        false;
        !(ctor.length > 0) || className && className.startsWith("cc.") || cc.warnID(3617, className);
        return ctor;
      }
      function _getAllCtors(baseClass, mixins, options) {
        function getCtors(cls) {
          return CCClass._isCCClass(cls) ? cls.__ctors__ || [] : [ cls ];
        }
        var ctors = [];
        var baseOrMixins = [ baseClass ].concat(mixins);
        for (var b = 0; b < baseOrMixins.length; b++) {
          var baseOrMixin = baseOrMixins[b];
          if (baseOrMixin) {
            var baseCtors = getCtors(baseOrMixin);
            for (var c = 0; c < baseCtors.length; c++) pushUnique(ctors, baseCtors[c]);
          }
        }
        var ctor = options.ctor;
        ctor && ctors.push(ctor);
        return ctors;
      }
      var SuperCallReg = /xyz/.test((function() {
        xyz;
      })) ? /\b\._super\b/ : /.*/;
      var SuperCallRegStrict = /xyz/.test((function() {
        xyz;
      })) ? /this\._super\s*\(/ : /(NONE){99}/;
      function boundSuperCalls(baseClass, options, className) {
        var hasSuperCall = false;
        for (var funcName in options) {
          if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) continue;
          var func = options[funcName];
          if ("function" !== (__typeofVal = typeof func, "object" === __typeofVal ? __realTypeOfObj(func) : __typeofVal)) continue;
          var pd = JS.getPropertyDescriptor(baseClass.prototype, funcName);
          if (pd) {
            var superFunc = pd.value;
            if ("function" === (__typeofVal = typeof superFunc, "object" === __typeofVal ? __realTypeOfObj(superFunc) : __typeofVal)) {
              if (SuperCallReg.test(func)) {
                hasSuperCall = true;
                options[funcName] = (function(superFunc, func) {
                  return function() {
                    var tmp = this._super;
                    this._super = superFunc;
                    var ret = func.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                  };
                })(superFunc, func);
              }
              continue;
            }
          }
          false;
        }
        return hasSuperCall;
      }
      function declareProperties(cls, className, properties, baseClass, mixins, es6) {
        cls.__props__ = [];
        baseClass && baseClass.__props__ && (cls.__props__ = baseClass.__props__.slice());
        if (mixins) for (var m = 0; m < mixins.length; ++m) {
          var mixin = mixins[m];
          mixin.__props__ && (cls.__props__ = cls.__props__.concat(mixin.__props__.filter((function(x) {
            return cls.__props__.indexOf(x) < 0;
          }))));
        }
        if (properties) {
          preprocess.preprocessAttrs(properties, className, cls, es6);
          for (var propName in properties) {
            var val = properties[propName];
            "default" in val ? defineProp(cls, className, propName, val, es6) : defineGetSet(cls, className, propName, val, es6);
          }
        }
      }
      function CCClass(options) {
        options = options || {};
        var name = options.name;
        var base = options.extends;
        var mixins = options.mixins;
        var cls = define(name, base, mixins, options);
        name || (name = cc.js.getClassName(cls));
        cls._sealed = true;
        base && (base._sealed = false);
        var properties = options.properties;
        if ("function" === (__typeofVal = typeof properties, "object" === __typeofVal ? __realTypeOfObj(properties) : __typeofVal) || base && null === base.__props__ || mixins && mixins.some((function(x) {
          return null === x.__props__;
        }))) {
          false;
          deferredInitializer.push({
            cls: cls,
            props: properties,
            mixins: mixins
          });
          cls.__props__ = null;
        } else declareProperties(cls, name, properties, base, options.mixins, options.__ES6__);
        var statics = options.statics;
        if (statics) {
          var staticPropName;
          false;
          for (staticPropName in statics) cls[staticPropName] = statics[staticPropName];
        }
        for (var funcName in options) {
          if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) continue;
          var func = options[funcName];
          if (!preprocess.validateMethodWithProps(func, funcName, name, cls, base)) continue;
          JS.value(cls.prototype, funcName, func, true, true);
        }
        var editor = options.editor;
        editor && !!cc.isChildClassOf(base, cc.Component) && cc.Component._registerEditorProps(cls, editor);
        return cls;
      }
      CCClass._isCCClass = function(constructor) {
        return constructor && constructor.hasOwnProperty("__ctors__");
      };
      CCClass._fastDefine = function(className, constructor, serializableFields) {
        JS.setClassName(className, constructor);
        var props = constructor.__props__ = Object.keys(serializableFields);
        var attrProtos = Attr.getClassAttrsProto(constructor);
        for (var i = 0; i < props.length; i++) {
          var key = props[i];
          attrProtos[key + DELIMETER + "visible"] = false;
          attrProtos[key + DELIMETER + "default"] = serializableFields[key];
        }
      };
      CCClass.Attr = Attr;
      CCClass.attr = Attr.attr;
      cc.isChildClassOf = function(subclass, superclass) {
        if (subclass && superclass) {
          if ("function" !== (__typeofVal = typeof subclass, "object" === __typeofVal ? __realTypeOfObj(subclass) : __typeofVal)) return false;
          if ("function" !== (__typeofVal = typeof superclass, "object" === __typeofVal ? __realTypeOfObj(superclass) : __typeofVal)) {
            false;
            return false;
          }
          if (subclass === superclass) return true;
          for (;;) {
            subclass = JS.getSuper(subclass);
            if (!subclass) return false;
            if (subclass === superclass) return true;
          }
        }
        return false;
      };
      CCClass.getInheritanceChain = function(klass) {
        var chain = [];
        for (;;) {
          klass = JS.getSuper(klass);
          if (!klass) break;
          klass !== Object && chain.push(klass);
        }
        return chain;
      };
      var PrimitiveTypes = {
        Integer: "Number",
        Float: "Number",
        Boolean: "Boolean",
        String: "String"
      };
      var tmpAttrs = [];
      function parseAttributes(cls, attrs, className, propName, usedInGetter) {
        var ERR_Type = "";
        var attrsProto = null;
        var attrsProtoKey = "";
        function getAttrsProto() {
          attrsProtoKey = propName + DELIMETER;
          return attrsProto = Attr.getClassAttrsProto(cls);
        }
        tmpAttrs.length = 0;
        var result = tmpAttrs;
        var type = attrs.type;
        if (type) {
          var primitiveType = PrimitiveTypes[type];
          if (primitiveType) result.push({
            type: type,
            _onAfterProp: getTypeChecker(primitiveType, "cc." + type)
          }); else if ("Object" === type) false; else if (type === Attr.ScriptUuid) {
            var attr = Attr.ObjectType(cc.ScriptAsset);
            attr.type = "Script";
            result.push(attr);
          } else "object" === (__typeofVal = typeof type, "object" === __typeofVal ? __realTypeOfObj(type) : __typeofVal) ? !!Enum.isEnum(type) && result.push({
            type: "Enum",
            enumList: Enum.getList(type)
          }) : "function" === (__typeofVal = typeof type, "object" === __typeofVal ? __realTypeOfObj(type) : __typeofVal) && (attrs.url ? result.push({
            type: "Object",
            ctor: type,
            _onAfterProp: getTypeChecker("String", "cc.String")
          }) : result.push(attrs._short ? {
            type: "Object",
            ctor: type
          } : Attr.ObjectType(type)));
        }
        function parseSimpleAttr(attrName, expectType) {
          if (attrName in attrs) {
            var val = attrs[attrName];
            (__typeofVal = typeof val, "object" === __typeofVal ? __realTypeOfObj(val) : __typeofVal) === expectType && ((attrsProto || getAttrsProto())[attrsProtoKey + attrName] = val);
          }
        }
        if (attrs.editorOnly) {
          false;
          (attrsProto || getAttrsProto())[attrsProtoKey + "editorOnly"] = true;
        }
        false;
        attrs.url && ((attrsProto || getAttrsProto())[attrsProtoKey + "saveUrlAsAsset"] = true);
        if (false === attrs.serializable) {
          false;
          (attrsProto || getAttrsProto())[attrsProtoKey + "serializable"] = false;
        }
        parseSimpleAttr("formerlySerializedAs", "string");
        false;
        var visible;
        var startsWithUS;
        false;
        var range = attrs.range;
        if (range) if (Array.isArray(range)) if (range.length >= 2) {
          (attrsProto || getAttrsProto())[attrsProtoKey + "min"] = range[0];
          attrsProto[attrsProtoKey + "max"] = range[1];
          range.length > 2 && (attrsProto[attrsProtoKey + "step"] = range[2]);
        } else false; else false;
        parseSimpleAttr("min", "number");
        parseSimpleAttr("max", "number");
        parseSimpleAttr("step", "number");
        return result;
      }
      cc.Class = CCClass;
      module.exports = {
        isArray: function(defaultVal) {
          defaultVal = getDefault(defaultVal);
          return Array.isArray(defaultVal);
        },
        fastDefine: CCClass._fastDefine,
        getNewValueTypeCode: getNewValueTypeCode,
        IDENTIFIER_RE: IDENTIFIER_RE,
        escapeForJS: escapeForJS,
        getDefault: getDefault
      };
      false;
    }), {
      "./CCEnum": 94,
      "./attribute": 99,
      "./js": 107,
      "./preprocess-class": 108,
      "./requiring-frame": 109,
      "./utils": 111
    } ],
    93: [ (function(require, module, exports) {
      require("./CCClass");
      var Preprocess = require("./preprocess-class");
      var JS = require("./js");
      var isPlainEmptyObj_DEV = false;
      var CACHE_KEY = "__ccclassCache__";
      function fNOP(ctor) {
        return ctor;
      }
      function getSubDict(obj, key) {
        return obj[key] || (obj[key] = {});
      }
      function checkCtorArgument(decorate) {
        return function(target) {
          if ("function" === (__typeofVal = typeof target, "object" === __typeofVal ? __realTypeOfObj(target) : __typeofVal)) return decorate(target);
          return function(ctor) {
            return decorate(ctor, target);
          };
        };
      }
      function _checkNormalArgument(validator_DEV, decorate, decoratorName) {
        return function(target) {
          false;
          return function(ctor) {
            return decorate(ctor, target);
          };
        };
      }
      var checkCompArgument = _checkNormalArgument.bind(null, false);
      function _argumentChecker(type) {
        return _checkNormalArgument.bind(null, false);
      }
      var checkStringArgument = _argumentChecker("string");
      var checkNumberArgument = _argumentChecker("number");
      function getClassCache(ctor, decoratorName) {
        false;
        return getSubDict(ctor, CACHE_KEY);
      }
      function getDefaultFromInitializer(initializer) {
        var value;
        try {
          value = initializer();
        } catch (e) {
          return initializer;
        }
        return "object" !== (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) || null === value ? value : initializer;
      }
      function extractActualDefaultValues(ctor) {
        var dummyObj;
        try {
          dummyObj = new ctor();
        } catch (e) {
          false;
          return {};
        }
        return dummyObj;
      }
      function genProperty(ctor, properties, propName, options, desc, cache) {
        var fullOptions = options && (Preprocess.getFullFormOfProperty(options) || options);
        var existsProperty = properties[propName];
        var prop = JS.mixin(existsProperty || {}, fullOptions || {});
        var isGetset = desc && (desc.get || desc.set);
        if (isGetset) {
          var errorProps;
          false;
          desc.get && (prop.get = desc.get);
          desc.set && (prop.set = desc.set);
        } else {
          false;
          var defaultValue = void 0;
          var isDefaultValueSpecified = false;
          if (desc) {
            if (desc.initializer) {
              defaultValue = getDefaultFromInitializer(desc.initializer);
              isDefaultValueSpecified = true;
            }
          } else {
            var actualDefaultValues = cache.default || (cache.default = extractActualDefaultValues(ctor));
            if (actualDefaultValues.hasOwnProperty(propName)) {
              defaultValue = actualDefaultValues[propName];
              isDefaultValueSpecified = true;
            }
          }
          false;
          prop.default = defaultValue;
        }
        properties[propName] = prop;
      }
      var ccclass = checkCtorArgument((function(ctor, name) {
        var base = JS.getSuper(ctor);
        base === Object && (base = null);
        var proto = {
          name: name,
          extends: base,
          ctor: ctor,
          __ES6__: true
        };
        var cache = ctor[CACHE_KEY];
        if (cache) {
          var decoratedProto = cache.proto;
          decoratedProto && JS.mixin(proto, decoratedProto);
          ctor[CACHE_KEY] = void 0;
        }
        var res = cc.Class(proto);
        var propNames;
        var i;
        var prop;
        var desc;
        var func;
        false;
        return res;
      }));
      function property(ctorProtoOrOptions, propName, desc) {
        var options = null;
        function normalized(ctorProto, propName, desc) {
          var cache = getClassCache(ctorProto.constructor);
          if (cache) {
            var ccclassProto = getSubDict(cache, "proto");
            var properties = getSubDict(ccclassProto, "properties");
            genProperty(ctorProto.constructor, properties, propName, options, desc, cache);
          }
        }
        if ("undefined" === (__typeofVal = typeof propName, "object" === __typeofVal ? __realTypeOfObj(propName) : __typeofVal)) {
          options = ctorProtoOrOptions;
          return normalized;
        }
        normalized(ctorProtoOrOptions, propName, desc);
      }
      function createEditorDecorator(argCheckFunc, editorPropName, staticValue) {
        return argCheckFunc((function(ctor, decoratedValue) {
          var cache = getClassCache(ctor, editorPropName);
          if (cache) {
            var value = void 0 !== staticValue ? staticValue : decoratedValue;
            var proto = getSubDict(cache, "proto");
            getSubDict(proto, "editor")[editorPropName] = value;
          }
        }), editorPropName);
      }
      function createDummyDecorator(argCheckFunc) {
        return argCheckFunc(fNOP);
      }
      var executeInEditMode = createDummyDecorator(checkCtorArgument, "executeInEditMode", true);
      var requireComponent = createEditorDecorator(checkCompArgument, "requireComponent");
      var menu = createDummyDecorator(checkStringArgument, "menu");
      var executionOrder = createEditorDecorator(checkNumberArgument, "executionOrder");
      var disallowMultiple = createDummyDecorator(checkCtorArgument, "disallowMultiple");
      var playOnFocus = createDummyDecorator(checkCtorArgument, "playOnFocus");
      var inspector = createDummyDecorator(checkStringArgument, "inspector");
      var icon = createDummyDecorator(checkStringArgument, "icon");
      var help = createDummyDecorator(checkStringArgument, "help");
      function mixins() {
        var mixins = [];
        for (var i = 0; i < arguments.length; i++) mixins[i] = arguments[i];
        return function(ctor) {
          var cache = getClassCache(ctor, "mixins");
          cache && (getSubDict(cache, "proto").mixins = mixins);
        };
      }
      cc._decorator = module.exports = {
        ccclass: ccclass,
        property: property,
        executeInEditMode: executeInEditMode,
        requireComponent: requireComponent,
        menu: menu,
        executionOrder: executionOrder,
        disallowMultiple: disallowMultiple,
        playOnFocus: playOnFocus,
        inspector: inspector,
        icon: icon,
        help: help,
        mixins: mixins
      };
    }), {
      "./CCClass": 92,
      "./js": 107,
      "./preprocess-class": 108,
      "./utils": 111
    } ],
    94: [ (function(require, module, exports) {
      var JS = require("./js");
      function Enum(obj) {
        if ("__enums__" in obj) return obj;
        JS.value(obj, "__enums__", null, true);
        var lastIndex = -1;
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = obj[key];
          if (-1 === val) {
            val = ++lastIndex;
            obj[key] = val;
          } else if ("number" === (__typeofVal = typeof val, "object" === __typeofVal ? __realTypeOfObj(val) : __typeofVal)) lastIndex = val; else if ("string" === (__typeofVal = typeof val, 
          "object" === __typeofVal ? __realTypeOfObj(val) : __typeofVal) && Number.isInteger(parseFloat(key))) continue;
          var reverseKey = "" + val;
          if (key !== reverseKey) {
            if ((false, false) && reverseKey in obj && obj[reverseKey] !== key) {
              cc.errorID(7100, reverseKey);
              continue;
            }
            JS.value(obj, reverseKey, key);
          }
        }
        return obj;
      }
      Enum.isEnum = function(enumType) {
        return enumType && enumType.hasOwnProperty("__enums__");
      };
      Enum.getList = function(enumDef) {
        if (enumDef.__enums__) return enumDef.__enums__;
        var enums = enumDef.__enums__ = [];
        for (var name in enumDef) {
          var value = enumDef[name];
          Number.isInteger(value) && enums.push({
            name: name,
            value: value
          });
        }
        enums.sort((function(a, b) {
          return a.value - b.value;
        }));
        return enums;
      };
      var _TestEnum;
      false;
      module.exports = cc.Enum = Enum;
    }), {
      "./js": 107
    } ],
    95: [ (function(require, module, exports) {
      require("./_CCClass");
      cc.KEY = {
        none: 0,
        back: 6,
        menu: 18,
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        pause: 19,
        capslock: 20,
        escape: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        select: 41,
        insert: 45,
        Delete: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        num0: 96,
        num1: 97,
        num2: 98,
        num3: 99,
        num4: 100,
        num5: 101,
        num6: 102,
        num7: 103,
        num8: 104,
        num9: 105,
        "*": 106,
        "+": 107,
        "-": 109,
        numdel: 110,
        "/": 111,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        numlock: 144,
        scrolllock: 145,
        ";": 186,
        semicolon: 186,
        equal: 187,
        "=": 187,
        ",": 188,
        comma: 188,
        dash: 189,
        ".": 190,
        period: 190,
        forwardslash: 191,
        grave: 192,
        "[": 219,
        openbracket: 219,
        backslash: 220,
        "]": 221,
        closebracket: 221,
        quote: 222,
        dpadLeft: 1e3,
        dpadRight: 1001,
        dpadUp: 1003,
        dpadDown: 1004,
        dpadCenter: 1005
      };
      cc.ImageFormat = cc.Enum({
        JPG: 0,
        PNG: 1,
        TIFF: 2,
        WEBP: 3,
        PVR: 4,
        ETC: 5,
        S3TC: 6,
        ATITC: 7,
        TGA: 8,
        RAWDATA: 9,
        UNKNOWN: 10
      });
      cc.getImageFormatByData = function(imgData) {
        if (imgData.length > 8 && 137 === imgData[0] && 80 === imgData[1] && 78 === imgData[2] && 71 === imgData[3] && 13 === imgData[4] && 10 === imgData[5] && 26 === imgData[6] && 10 === imgData[7]) return cc.ImageFormat.PNG;
        if (imgData.length > 2 && (73 === imgData[0] && 73 === imgData[1] || 77 === imgData[0] && 77 === imgData[1] || 255 === imgData[0] && 216 === imgData[1])) return cc.ImageFormat.TIFF;
        return cc.ImageFormat.UNKNOWN;
      };
      cc.macro = {
        INVALID_INDEX: -1,
        NODE_TAG_INVALID: -1,
        PI: Math.PI,
        PI2: 2 * Math.PI,
        FLT_MAX: parseFloat("3.402823466e+38F"),
        FLT_MIN: parseFloat("1.175494351e-38F"),
        RAD: Math.PI / 180,
        DEG: 180 / Math.PI,
        UINT_MAX: 4294967295,
        REPEAT_FOREVER: 4294967295,
        FLT_EPSILON: 1.192092896e-7,
        ONE: 1,
        ZERO: 0,
        SRC_ALPHA: 770,
        SRC_ALPHA_SATURATE: 776,
        SRC_COLOR: 768,
        DST_ALPHA: 772,
        DST_COLOR: 774,
        ONE_MINUS_SRC_ALPHA: 771,
        ONE_MINUS_SRC_COLOR: 769,
        ONE_MINUS_DST_ALPHA: 773,
        ONE_MINUS_DST_COLOR: 775,
        ONE_MINUS_CONSTANT_ALPHA: 32772,
        ONE_MINUS_CONSTANT_COLOR: 32770,
        LINEAR: 9729,
        BLEND_DST: 771,
        WEB_ORIENTATION_PORTRAIT: 0,
        WEB_ORIENTATION_LANDSCAPE_LEFT: -90,
        WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN: 180,
        WEB_ORIENTATION_LANDSCAPE_RIGHT: 90,
        ORIENTATION_PORTRAIT: 1,
        ORIENTATION_LANDSCAPE: 2,
        ORIENTATION_AUTO: 3,
        DENSITYDPI_DEVICE: "device-dpi",
        DENSITYDPI_HIGH: "high-dpi",
        DENSITYDPI_MEDIUM: "medium-dpi",
        DENSITYDPI_LOW: "low-dpi",
        VERTEX_ATTRIB_FLAG_NONE: 0,
        VERTEX_ATTRIB_FLAG_POSITION: 1,
        VERTEX_ATTRIB_FLAG_COLOR: 2,
        VERTEX_ATTRIB_FLAG_TEX_COORDS: 4,
        VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: 7,
        GL_ALL: 0,
        VERTEX_ATTRIB_POSITION: 0,
        VERTEX_ATTRIB_COLOR: 1,
        VERTEX_ATTRIB_TEX_COORDS: 2,
        VERTEX_ATTRIB_MAX: 3,
        UNIFORM_PMATRIX: 0,
        UNIFORM_MVMATRIX: 1,
        UNIFORM_MVPMATRIX: 2,
        UNIFORM_TIME: 3,
        UNIFORM_SINTIME: 4,
        UNIFORM_COSTIME: 5,
        UNIFORM_RANDOM01: 6,
        UNIFORM_SAMPLER: 7,
        UNIFORM_MAX: 8,
        SHADER_POSITION_TEXTURECOLOR: "ShaderPositionTextureColor",
        SHADER_SPRITE_POSITION_TEXTURECOLOR: "ShaderSpritePositionTextureColor",
        SHADER_POSITION_TEXTURECOLORALPHATEST: "ShaderPositionTextureColorAlphaTest",
        SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST: "ShaderSpritePositionTextureColorAlphaTest",
        SHADER_POSITION_COLOR: "ShaderPositionColor",
        SHADER_SPRITE_POSITION_COLOR: "ShaderSpritePositionColor",
        SHADER_POSITION_TEXTURE: "ShaderPositionTexture",
        SHADER_POSITION_TEXTURE_UCOLOR: "ShaderPositionTexture_uColor",
        SHADER_POSITION_TEXTUREA8COLOR: "ShaderPositionTextureA8Color",
        SHADER_POSITION_UCOLOR: "ShaderPosition_uColor",
        SHADER_POSITION_LENGTHTEXTURECOLOR: "ShaderPositionLengthTextureColor",
        UNIFORM_PMATRIX_S: "CC_PMatrix",
        UNIFORM_MVMATRIX_S: "CC_MVMatrix",
        UNIFORM_MVPMATRIX_S: "CC_MVPMatrix",
        UNIFORM_TIME_S: "CC_Time",
        UNIFORM_SINTIME_S: "CC_SinTime",
        UNIFORM_COSTIME_S: "CC_CosTime",
        UNIFORM_RANDOM01_S: "CC_Random01",
        UNIFORM_SAMPLER_S: "CC_Texture0",
        UNIFORM_ALPHA_TEST_VALUE_S: "CC_alpha_value",
        ATTRIBUTE_NAME_COLOR: "a_color",
        ATTRIBUTE_NAME_POSITION: "a_position",
        ATTRIBUTE_NAME_TEX_COORD: "a_texCoord",
        ITEM_SIZE: 32,
        CURRENT_ITEM: 3233828865,
        ZOOM_ACTION_TAG: 3233828866,
        NORMAL_TAG: 8801,
        SELECTED_TAG: 8802,
        DISABLE_TAG: 8803,
        FIX_ARTIFACTS_BY_STRECHING_TEXEL: 0,
        FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX: 1,
        DIRECTOR_STATS_POSITION: cc.p(0, 0),
        DIRECTOR_FPS_INTERVAL: .5,
        COCOSNODE_RENDER_SUBPIXEL: 1,
        SPRITEBATCHNODE_RENDER_SUBPIXEL: 1,
        AUTO_PREMULTIPLIED_ALPHA_FOR_PNG: 0,
        OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA: 0,
        TEXTURE_NPOT_SUPPORT: 0,
        USE_LA88_LABELS: 1,
        SPRITE_DEBUG_DRAW: 0,
        LABELBMFONT_DEBUG_DRAW: 0,
        LABELATLAS_DEBUG_DRAW: 0,
        ENABLE_STACKABLE_ACTIONS: 1,
        ENABLE_GL_STATE_CACHE: 1,
        TOUCH_TIMEOUT: 5e3,
        BATCH_VERTEX_COUNT: 2e4,
        ENABLE_GC_FOR_NATIVE_OBJECTS: true,
        ENABLE_TILEDMAP_CULLING: true,
        DOWNLOAD_MAX_CONCURRENT: 64,
        ENABLE_TRANSPARENT_CANVAS: false,
        ENABLE_WEBGL_ANTIALIAS: false
      };
      var ENABLE_CULLING = true;
      cc.defineGetterSetter(cc.macro, "ENABLE_CULLING", (function() {
        return ENABLE_CULLING;
      }), (function(val) {
        ENABLE_CULLING = val;
        var scene = cc.director.getScene();
        if (!scene) return;
        true;
        scene._sgNode.markCullingDirty();
        cc.director.setCullingEnabled(val);
      }));
      cc.defineGetterSetter(cc.macro, "BLEND_SRC", (function() {
        return cc._renderType === cc.game.RENDER_TYPE_WEBGL && cc.macro.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? cc.macro.ONE : cc.macro.SRC_ALPHA;
      }));
      cc.lerp = function(a, b, r) {
        return a + (b - a) * r;
      };
      cc.rand = function() {
        return 16777215 * Math.random();
      };
      cc.randomMinus1To1 = function() {
        return 2 * (Math.random() - .5);
      };
      cc.random0To1 = Math.random;
      cc.degreesToRadians = function(angle) {
        return angle * cc.macro.RAD;
      };
      cc.radiansToDegrees = function(angle) {
        return angle * cc.macro.DEG;
      };
      cc.nodeDrawSetup = function(node) {
        if (node._shaderProgram) {
          node._shaderProgram.use();
          node._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4();
        }
      };
      cc.incrementGLDraws = function(addNumber) {
        cc.g_NumberOfDraws += addNumber;
      };
      cc.checkGLErrorDebug = function() {
        if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
          var _error = cc._renderContext.getError();
          _error && cc.logID(2400, _error);
        }
      };
      module.exports = cc.macro;
    }), {
      "./_CCClass": 98
    } ],
    96: [ (function(require, module, exports) {
      var JS = require("./js");
      var CCClass = require("./CCClass");
      var Destroyed = 1;
      var RealDestroyed = 2;
      var ToDestroy = 4;
      var DontSave = 8;
      var EditorOnly = 16;
      var Dirty = 32;
      var DontDestroy = 64;
      var Destroying = 128;
      var Deactivating = 256;
      var IsOnEnableCalled = 2048;
      var IsEditorOnEnableCalled = 4096;
      var IsPreloadStarted = 8192;
      var IsOnLoadCalled = 16384;
      var IsOnLoadStarted = 32768;
      var IsStartCalled = 65536;
      var IsRotationLocked = 1 << 17;
      var IsScaleLocked = 1 << 18;
      var IsAnchorLocked = 1 << 19;
      var IsSizeLocked = 1 << 20;
      var IsPositionLocked = 1 << 21;
      var PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked);
      function CCObject() {
        this._name = "";
        this._objFlags = 0;
      }
      CCClass.fastDefine("cc.Object", CCObject, {
        _name: "",
        _objFlags: 0
      });
      JS.value(CCObject, "Flags", {
        Destroyed: Destroyed,
        DontSave: DontSave,
        EditorOnly: EditorOnly,
        Dirty: Dirty,
        DontDestroy: DontDestroy,
        PersistentMask: PersistentMask,
        Destroying: Destroying,
        Deactivating: Deactivating,
        IsPreloadStarted: IsPreloadStarted,
        IsOnLoadStarted: IsOnLoadStarted,
        IsOnLoadCalled: IsOnLoadCalled,
        IsOnEnableCalled: IsOnEnableCalled,
        IsStartCalled: IsStartCalled,
        IsEditorOnEnableCalled: IsEditorOnEnableCalled,
        IsPositionLocked: IsPositionLocked,
        IsRotationLocked: IsRotationLocked,
        IsScaleLocked: IsScaleLocked,
        IsAnchorLocked: IsAnchorLocked,
        IsSizeLocked: IsSizeLocked
      });
      var objectsToDestroy = [];
      function deferredDestroy() {
        var deleteCount = objectsToDestroy.length;
        for (var i = 0; i < deleteCount; ++i) {
          var obj = objectsToDestroy[i];
          obj._objFlags & Destroyed || obj._destroyImmediate();
        }
        deleteCount === objectsToDestroy.length ? objectsToDestroy.length = 0 : objectsToDestroy.splice(0, deleteCount);
        false;
      }
      JS.value(CCObject, "_deferredDestroy", deferredDestroy);
      false;
      var prototype = CCObject.prototype;
      JS.getset(prototype, "name", (function() {
        return this._name;
      }), (function(value) {
        this._name = value;
      }));
      JS.get(prototype, "isValid", (function() {
        return !(this._objFlags & Destroyed);
      }));
      false, false;
      var deferredDestroyTimer = null;
      prototype.destroy = function() {
        if (this._objFlags & Destroyed) {
          cc.warnID(5e3);
          return false;
        }
        if (this._objFlags & ToDestroy) return false;
        this._objFlags |= ToDestroy;
        objectsToDestroy.push(this);
        false;
        return true;
      };
      false, false;
      function compileDestruct(obj, ctor) {
        var key, propsToReset = {};
        for (key in obj) if (obj.hasOwnProperty(key)) switch (__typeofVal = typeof obj[key], 
        "object" === __typeofVal ? __realTypeOfObj(obj[key]) : __typeofVal) {
         case "string":
          propsToReset[key] = "";
          break;

         case "object":
         case "function":
          propsToReset[key] = null;
        }
        if (cc.Class._isCCClass(ctor)) {
          var attrs = cc.Class.Attr.getClassAttrs(ctor);
          var propList = ctor.__props__;
          for (var i = 0; i < propList.length; i++) {
            key = propList[i];
            var attrKey = key + cc.Class.Attr.DELIMETER + "default";
            if (attrKey in attrs) switch (__typeofVal = typeof attrs[attrKey], "object" === __typeofVal ? __realTypeOfObj(attrs[attrKey]) : __typeofVal) {
             case "string":
              propsToReset[key] = "";
              break;

             case "object":
             case "function":
              propsToReset[key] = null;
              break;

             case "undefined":
              propsToReset[key] = void 0;
            }
          }
        }
        var skipId = obj instanceof cc._BaseNode || obj instanceof cc.Component;
        true;
        var func = "";
        for (key in propsToReset) {
          if (skipId && "_id" === key) continue;
          var statement;
          statement = CCClass.IDENTIFIER_RE.test(key) ? "o." + key + "=" : "o[" + CCClass.escapeForJS(key) + "]=";
          var val = propsToReset[key];
          "" === val && (val = '""');
          func += statement + val + ";\n";
        }
        return Function("o", func);
      }
      prototype._destruct = function() {
        var ctor = this.constructor;
        var destruct = ctor.__destruct__;
        if (!destruct) {
          destruct = compileDestruct(this, ctor);
          JS.value(ctor, "__destruct__", destruct, true);
        }
        destruct(this);
      };
      prototype._onPreDestroy = null;
      prototype._destroyImmediate = function() {
        if (this._objFlags & Destroyed) {
          cc.errorID(5e3);
          return;
        }
        this._onPreDestroy && this._onPreDestroy();
        true;
        this._destruct();
        this._objFlags |= Destroyed;
      };
      false;
      prototype._deserialize = null;
      cc.isValid = function(value, strictMode) {
        return "object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) ? !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed)) : "undefined" !== (__typeofVal = typeof value, 
        "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal);
      };
      false, false;
      cc.Object = module.exports = CCObject;
    }), {
      "./CCClass": 92,
      "./js": 107
    } ],
    97: [ (function(require, module, exports) {
      if (cc.sys) return;
      cc.sys = {};
      var sys = cc.sys;
      sys.LANGUAGE_ENGLISH = "en";
      sys.LANGUAGE_CHINESE = "zh";
      sys.LANGUAGE_FRENCH = "fr";
      sys.LANGUAGE_ITALIAN = "it";
      sys.LANGUAGE_GERMAN = "de";
      sys.LANGUAGE_SPANISH = "es";
      sys.LANGUAGE_DUTCH = "du";
      sys.LANGUAGE_RUSSIAN = "ru";
      sys.LANGUAGE_KOREAN = "ko";
      sys.LANGUAGE_JAPANESE = "ja";
      sys.LANGUAGE_HUNGARIAN = "hu";
      sys.LANGUAGE_PORTUGUESE = "pt";
      sys.LANGUAGE_ARABIC = "ar";
      sys.LANGUAGE_NORWEGIAN = "no";
      sys.LANGUAGE_POLISH = "pl";
      sys.LANGUAGE_TURKISH = "tr";
      sys.LANGUAGE_UKRAINIAN = "uk";
      sys.LANGUAGE_ROMANIAN = "ro";
      sys.LANGUAGE_BULGARIAN = "bg";
      sys.LANGUAGE_UNKNOWN = "unknown";
      sys.OS_IOS = "iOS";
      sys.OS_ANDROID = "Android";
      sys.OS_WINDOWS = "Windows";
      sys.OS_MARMALADE = "Marmalade";
      sys.OS_LINUX = "Linux";
      sys.OS_BADA = "Bada";
      sys.OS_BLACKBERRY = "Blackberry";
      sys.OS_OSX = "OS X";
      sys.OS_WP8 = "WP8";
      sys.OS_WINRT = "WINRT";
      sys.OS_UNKNOWN = "Unknown";
      sys.UNKNOWN = -1;
      sys.WIN32 = 0;
      sys.LINUX = 1;
      sys.MACOS = 2;
      sys.ANDROID = 3;
      sys.IPHONE = 4;
      sys.IPAD = 5;
      sys.BLACKBERRY = 6;
      sys.NACL = 7;
      sys.EMSCRIPTEN = 8;
      sys.TIZEN = 9;
      sys.WINRT = 10;
      sys.WP8 = 11;
      sys.MOBILE_BROWSER = 100;
      sys.DESKTOP_BROWSER = 101;
      sys.EDITOR_PAGE = 102;
      sys.EDITOR_CORE = 103;
      sys.WECHAT_GAME = 104;
      sys.QQ_PLAY = 105;
      sys.BROWSER_TYPE_WECHAT = "wechat";
      sys.BROWSER_TYPE_WECHAT_GAME = "wechatgame";
      sys.BROWSER_TYPE_WECHAT_GAME_SUB = "wechatgamesub";
      sys.BROWSER_TYPE_QQ_PLAY = "qqplay";
      sys.BROWSER_TYPE_ANDROID = "androidbrowser";
      sys.BROWSER_TYPE_IE = "ie";
      sys.BROWSER_TYPE_QQ = "qqbrowser";
      sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
      sys.BROWSER_TYPE_UC = "ucbrowser";
      sys.BROWSER_TYPE_360 = "360browser";
      sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
      sys.BROWSER_TYPE_BAIDU = "baidubrowser";
      sys.BROWSER_TYPE_MAXTHON = "maxthon";
      sys.BROWSER_TYPE_OPERA = "opera";
      sys.BROWSER_TYPE_OUPENG = "oupeng";
      sys.BROWSER_TYPE_MIUI = "miuibrowser";
      sys.BROWSER_TYPE_FIREFOX = "firefox";
      sys.BROWSER_TYPE_SAFARI = "safari";
      sys.BROWSER_TYPE_CHROME = "chrome";
      sys.BROWSER_TYPE_LIEBAO = "liebao";
      sys.BROWSER_TYPE_QZONE = "qzone";
      sys.BROWSER_TYPE_SOUGOU = "sogou";
      sys.BROWSER_TYPE_UNKNOWN = "unknown";
      sys.isNative = false;
      sys.isBrowser = "object" === (__typeofVal = typeof window, "object" === __typeofVal ? __realTypeOfObj(window) : __typeofVal) && "object" === (__typeofVal = typeof document, 
      "object" === __typeofVal ? __realTypeOfObj(document) : __typeofVal) && true;
      cc.create3DContext = function(canvas, opt_attribs, opt_contextType) {
        if (!opt_contextType) return cc.create3DContext(canvas, opt_attribs, "webgl") || cc.create3DContext(canvas, opt_attribs, "experimental-webgl") || cc.create3DContext(canvas, opt_attribs, "webkit-3d") || cc.create3DContext(canvas, opt_attribs, "moz-webgl") || null;
        try {
          return canvas.getContext(opt_contextType, opt_attribs);
        } catch (e) {
          return null;
        }
      };
      false;
      var env;
      var version;
      var w;
      var h;
      var ratio;
      false;
      var w;
      var h;
      var ratio;
      false;
      {
        var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
        var ua = nav.userAgent.toLowerCase();
        false;
        sys.isMobile = /mobile|android|iphone|ipad/.test(ua);
        sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
        var currLanguage = nav.language;
        currLanguage = currLanguage || nav.browserLanguage;
        currLanguage = currLanguage ? currLanguage.split("-")[0] : sys.LANGUAGE_ENGLISH;
        sys.language = currLanguage;
        var isAndroid = false, iOS = false, osVersion = "", osMainVersion = 0;
        var uaResult = /android (\d+(?:\.\d+)+)/i.exec(ua) || /android (\d+(?:\.\d+)+)/i.exec(nav.platform);
        if (uaResult) {
          isAndroid = true;
          osVersion = uaResult[1] || "";
          osMainVersion = parseInt(osVersion) || 0;
        }
        uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);
        if (uaResult) {
          iOS = true;
          osVersion = uaResult[2] || "";
          osMainVersion = parseInt(osVersion) || 0;
        } else if (/(iPhone|iPad|iPod)/.exec(nav.platform)) {
          iOS = true;
          osVersion = "";
          osMainVersion = 0;
        }
        var osName = sys.OS_UNKNOWN;
        -1 !== nav.appVersion.indexOf("Win") ? osName = sys.OS_WINDOWS : iOS ? osName = sys.OS_IOS : -1 !== nav.appVersion.indexOf("Mac") ? osName = sys.OS_OSX : -1 !== nav.appVersion.indexOf("X11") && -1 === nav.appVersion.indexOf("Linux") ? osName = sys.OS_UNIX : isAndroid ? osName = sys.OS_ANDROID : -1 === nav.appVersion.indexOf("Linux") && -1 === ua.indexOf("ubuntu") || (osName = sys.OS_LINUX);
        sys.os = osName;
        sys.osVersion = osVersion;
        sys.osMainVersion = osMainVersion;
        sys.browserType = sys.BROWSER_TYPE_UNKNOWN;
        (function() {
          var typeReg1 = /mqqbrowser|micromessenger|qq|sogou|qzone|liebao|maxthon|ucbrowser|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
          var typeReg2 = /qqbrowser|chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
          var browserTypes = typeReg1.exec(ua);
          browserTypes || (browserTypes = typeReg2.exec(ua));
          var browserType = browserTypes ? browserTypes[0].toLowerCase() : sys.BROWSER_TYPE_UNKNOWN;
          false;
          false;
          "micromessenger" === browserType ? browserType = sys.BROWSER_TYPE_WECHAT : "safari" === browserType && isAndroid ? browserType = sys.BROWSER_TYPE_ANDROID : "qq" === browserType && ua.match(/android.*applewebkit/i) ? browserType = sys.BROWSER_TYPE_ANDROID : "trident" === browserType ? browserType = sys.BROWSER_TYPE_IE : "360 aphone" === browserType ? browserType = sys.BROWSER_TYPE_360 : "mxbrowser" === browserType ? browserType = sys.BROWSER_TYPE_MAXTHON : "opr/" === browserType && (browserType = sys.BROWSER_TYPE_OPERA);
          sys.browserType = browserType;
        })();
        sys.browserVersion = "";
        (function() {
          var versionReg1 = /(mqqbrowser|micromessenger|qq|sogou|qzone|liebao|maxthon|uc|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui)(mobile)?(browser)?\/?([\d.]+)/i;
          var versionReg2 = /(qqbrowser|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
          var tmp = ua.match(versionReg1);
          tmp || (tmp = ua.match(versionReg2));
          sys.browserVersion = tmp ? tmp[4] : "";
        })();
        var w = window.innerWidth || document.documentElement.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight;
        var ratio = window.devicePixelRatio || 1;
        sys.windowPixelResolution = {
          width: ratio * w,
          height: ratio * h
        };
        sys._checkWebGLRenderMode = function() {
          if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL) throw new Error("This feature supports WebGL render mode only.");
        };
        var _tmpCanvas1 = document.createElement("canvas"), _tmpCanvas2 = document.createElement("canvas");
        sys._supportCanvasNewBlendModes = (function() {
          var canvas = _tmpCanvas1;
          canvas.width = 1;
          canvas.height = 1;
          var context = canvas.getContext("2d");
          context.fillStyle = "#000";
          context.fillRect(0, 0, 1, 1);
          context.globalCompositeOperation = "multiply";
          var canvas2 = _tmpCanvas2;
          canvas2.width = 1;
          canvas2.height = 1;
          var context2 = canvas2.getContext("2d");
          context2.fillStyle = "#fff";
          context2.fillRect(0, 0, 1, 1);
          context.drawImage(canvas2, 0, 0, 1, 1);
          return 0 === context.getImageData(0, 0, 1, 1).data[0];
        })();
        if (cc.sys.isMobile) {
          var fontStyle = document.createElement("style");
          fontStyle.type = "text/css";
          document.body.appendChild(fontStyle);
          fontStyle.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}";
        }
        try {
          var localStorage = sys.localStorage = win.localStorage;
          localStorage.setItem("storage", "");
          localStorage.removeItem("storage");
          localStorage = null;
        } catch (e) {
          var warn = function() {
            cc.warnID(5200);
          };
          sys.localStorage = {
            getItem: warn,
            setItem: warn,
            removeItem: warn,
            clear: warn
          };
        }
        var _supportWebp = _tmpCanvas1.toDataURL("image/webp").startsWith("data:image/webp");
        var _supportCanvas = !!_tmpCanvas1.getContext("2d");
        var _supportWebGL = false;
        if (win.WebGLRenderingContext) {
          cc.create3DContext(document.createElement("CANVAS")) && (_supportWebGL = true);
          if (_supportWebGL && sys.os === sys.OS_ANDROID) {
            var browserVer = parseFloat(sys.browserVersion);
            switch (sys.browserType) {
             case sys.BROWSER_TYPE_MOBILE_QQ:
             case sys.BROWSER_TYPE_BAIDU:
             case sys.BROWSER_TYPE_BAIDU_APP:
              _supportWebGL = browserVer >= 6.2;
              break;

             case sys.BROWSER_TYPE_ANDROID:
              sys.osMainVersion && sys.osMainVersion >= 5 && (_supportWebGL = true);
              break;

             case sys.BROWSER_TYPE_CHROME:
              _supportWebGL = browserVer >= 30;
              break;

             case sys.BROWSER_TYPE_UC:
              _supportWebGL = browserVer > 11;

             case sys.BROWSER_TYPE_360:
              _supportWebGL = false;
            }
          }
        }
        var capabilities = sys.capabilities = {
          canvas: _supportCanvas,
          opengl: _supportWebGL,
          webp: _supportWebp
        };
        (void 0 !== docEle["ontouchstart"] || void 0 !== doc["ontouchstart"] || nav.msPointerEnabled) && (capabilities["touches"] = true);
        void 0 !== docEle["onmouseup"] && (capabilities["mouse"] = true);
        void 0 !== docEle["onkeyup"] && (capabilities["keyboard"] = true);
        (win.DeviceMotionEvent || win.DeviceOrientationEvent) && (capabilities["accelerometer"] = true);
        var __audioSupport;
        (function() {
          var DEBUG = false;
          var version = sys.browserVersion;
          var supportWebAudio = !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
          __audioSupport = {
            ONLY_ONE: false,
            WEB_AUDIO: supportWebAudio,
            DELAY_CREATE_CTX: false
          };
          sys.os === sys.OS_IOS && (__audioSupport.USE_LOADER_EVENT = "loadedmetadata");
          if (sys.browserType === sys.BROWSER_TYPE_FIREFOX) {
            __audioSupport.DELAY_CREATE_CTX = true;
            __audioSupport.USE_LOADER_EVENT = "canplay";
          }
          sys.os === sys.OS_ANDROID && sys.browserType === sys.BROWSER_TYPE_UC && (__audioSupport.ONE_SOURCE = true);
          DEBUG && setTimeout((function() {
            cc.log("browse type: " + sys.browserType);
            cc.log("browse version: " + version);
            cc.log("MULTI_CHANNEL: " + __audioSupport.MULTI_CHANNEL);
            cc.log("WEB_AUDIO: " + __audioSupport.WEB_AUDIO);
            cc.log("AUTOPLAY: " + __audioSupport.AUTOPLAY);
          }), 0);
        })();
        try {
          if (__audioSupport.WEB_AUDIO) {
            __audioSupport.context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
            __audioSupport.DELAY_CREATE_CTX && setTimeout((function() {
              __audioSupport.context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
            }), 0);
          }
        } catch (error) {
          __audioSupport.WEB_AUDIO = false;
          cc.logID(5201);
        }
        function detectAudioFormat() {
          var formatSupport = [];
          var audio = document.createElement("audio");
          if (audio.canPlayType) {
            var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');
            ogg && formatSupport.push(".ogg");
            var mp3 = audio.canPlayType("audio/mpeg");
            mp3 && formatSupport.push(".mp3");
            var wav = audio.canPlayType('audio/wav; codecs="1"');
            wav && formatSupport.push(".wav");
            var mp4 = audio.canPlayType("audio/mp4");
            mp4 && formatSupport.push(".mp4");
            var m4a = audio.canPlayType("audio/x-m4a");
            m4a && formatSupport.push(".m4a");
          }
          return formatSupport;
        }
        __audioSupport.format = detectAudioFormat();
        sys.__audioSupport = __audioSupport;
      }
      sys.garbageCollect = function() {};
      sys.dumpRoot = function() {};
      sys.restartVM = function() {};
      sys.cleanScript = function(jsfile) {};
      sys.isObjectValid = function(obj) {
        return !!obj;
      };
      sys.dump = function() {
        var self = this;
        var str = "";
        str += "isMobile : " + self.isMobile + "\r\n";
        str += "language : " + self.language + "\r\n";
        str += "browserType : " + self.browserType + "\r\n";
        str += "browserVersion : " + self.browserVersion + "\r\n";
        str += "capabilities : " + JSON.stringify(self.capabilities) + "\r\n";
        str += "os : " + self.os + "\r\n";
        str += "osVersion : " + self.osVersion + "\r\n";
        str += "platform : " + self.platform + "\r\n";
        str += "Using " + (cc._renderType === cc.game.RENDER_TYPE_WEBGL ? "WEBGL" : "CANVAS") + " renderer.\r\n";
        cc.log(str);
      };
      sys.openURL = function(url) {
        window.open(url);
      };
      sys.now = function() {
        return Date.now ? Date.now() : +new Date();
      };
      module.exports = sys;
    }), {} ],
    98: [ (function(require, module, exports) {
      var ClassManager = cc.ClassManager = {
        instanceId: 0 | 998 * Math.random(),
        getNewInstanceId: function() {
          return this.instanceId++;
        }
      };
      var fnTest = /\b_super\b/;
      var Class = function() {};
      Class.extend = function(props) {
        var _super = this.prototype;
        var proto = Object.create(_super);
        var desc = {
          writable: true,
          enumerable: false,
          configurable: true
        };
        var TheClass;
        if ((true, cc.game) && cc.game.config && cc.game.config[cc.game.CONFIG_KEY.exposeClassName]) {
          var ctor = "return (function " + (props._className || "Class") + "(arg0,arg1,arg2,arg3,arg4) {\nthis.__instanceId = cc.ClassManager.getNewInstanceId();\nif (this.ctor) {\nswitch (arguments.length) {\ncase 0: this.ctor(); break;\ncase 1: this.ctor(arg0); break;\ncase 2: this.ctor(arg0,arg1); break;\ncase 3: this.ctor(arg0,arg1,arg2); break;\ncase 4: this.ctor(arg0,arg1,arg2,arg3); break;\ncase 5: this.ctor(arg0,arg1,arg2,arg3,arg4); break;\ndefault: this.ctor.apply(this, arguments);\n}\n}\n});";
          TheClass = Function(ctor)();
        } else TheClass = function(arg0, arg1, arg2, arg3, arg4) {
          this.__instanceId = ClassManager.getNewInstanceId();
          if (this.ctor) switch (arguments.length) {
           case 0:
            this.ctor();
            break;

           case 1:
            this.ctor(arg0);
            break;

           case 2:
            this.ctor(arg0, arg1);
            break;

           case 3:
            this.ctor(arg0, arg1, arg2);
            break;

           case 4:
            this.ctor(arg0, arg1, arg2, arg3);
            break;

           case 5:
            this.ctor(arg0, arg1, arg2, arg3, arg4);
            break;

           default:
            this.ctor.apply(this, arguments);
          }
        };
        TheClass.prototype = proto;
        desc.value = TheClass;
        Object.defineProperty(proto, "constructor", desc);
        for (var name in props) {
          var isFunc = "function" === (__typeofVal = typeof props[name], "object" === __typeofVal ? __realTypeOfObj(props[name]) : __typeofVal);
          var override = isFunc && "function" === (__typeofVal = typeof _super[name], "object" === __typeofVal ? __realTypeOfObj(_super[name]) : __typeofVal);
          var hasSuperCall = override && fnTest.test(props[name]);
          if (hasSuperCall) {
            desc.value = (function(name, fn) {
              return function() {
                var tmp = this._super;
                this._super = _super[name];
                var ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
              };
            })(name, props[name]);
            Object.defineProperty(proto, name, desc);
          } else if (isFunc) {
            desc.value = props[name];
            Object.defineProperty(proto, name, desc);
          } else proto[name] = props[name];
        }
        TheClass.extend = Class.extend;
        TheClass.implement = function(prop) {
          for (var name in prop) proto[name] = prop[name];
        };
        return TheClass;
      };
      cc.defineGetterSetter = function(proto, prop, getter, setter, getterName, setterName) {
        if (proto.__defineGetter__) {
          getter && proto.__defineGetter__(prop, getter);
          setter && proto.__defineSetter__(prop, setter);
        } else {
          if (!Object.defineProperty) throw new Error("browser does not support getters");
          var desc = {
            configurable: true
          };
          getter && (desc.get = getter);
          setter && (desc.set = setter);
          Object.defineProperty(proto, prop, desc);
        }
      };
      cc.clone = function(obj) {
        var newObj = obj.constructor ? new obj.constructor() : {};
        for (var key in obj) {
          var copy = obj[key];
          "object" !== (__typeofVal = typeof copy, "object" === __typeofVal ? __realTypeOfObj(copy) : __typeofVal) || !copy || copy instanceof _ccsg.Node || false ? newObj[key] = copy : newObj[key] = cc.clone(copy);
        }
        return newObj;
      };
      cc._Class = module.exports = Class;
    }), {} ],
    99: [ (function(require, module, exports) {
      var JS = require("./js");
      var isPlainEmptyObj = require("./utils").isPlainEmptyObj_DEV;
      var DELIMETER = "$_$";
      function createAttrsSingle(owner, ownerCtor, superAttrs) {
        var AttrsCtor;
        var ctorName;
        false;
        AttrsCtor = function() {};
        superAttrs && JS.extend(AttrsCtor, superAttrs.constructor);
        var attrs = new AttrsCtor();
        JS.value(owner, "__attrs__", attrs);
        return attrs;
      }
      function createAttrs(subclass) {
        var superClass;
        var chains = cc.Class.getInheritanceChain(subclass);
        for (var i = chains.length - 1; i >= 0; i--) {
          var cls = chains[i];
          var attrs = cls.hasOwnProperty("__attrs__") && cls.__attrs__;
          if (!attrs) {
            superClass = chains[i + 1];
            createAttrsSingle(cls, cls, superClass && superClass.__attrs__);
          }
        }
        superClass = chains[0];
        createAttrsSingle(subclass, subclass, superClass && superClass.__attrs__);
        return subclass.__attrs__;
      }
      function attr(ctor, propName, newAttrs) {
        var attrs, setter, key;
        if ("function" === (__typeofVal = typeof ctor, "object" === __typeofVal ? __realTypeOfObj(ctor) : __typeofVal)) {
          attrs = getClassAttrs(ctor);
          setter = attrs.constructor.prototype;
        } else {
          var instance = ctor;
          attrs = instance.__attrs__;
          if (!attrs) {
            ctor = instance.constructor;
            var clsAttrs = getClassAttrs(ctor);
            attrs = createAttrsSingle(instance, ctor, clsAttrs);
          }
          setter = attrs;
        }
        if ("undefined" === (__typeofVal = typeof newAttrs, "object" === __typeofVal ? __realTypeOfObj(newAttrs) : __typeofVal)) {
          var prefix = propName + DELIMETER;
          var ret = {};
          for (key in attrs) key.startsWith(prefix) && (ret[key.slice(prefix.length)] = attrs[key]);
          return ret;
        }
        if ("object" === (__typeofVal = typeof newAttrs, "object" === __typeofVal ? __realTypeOfObj(newAttrs) : __typeofVal)) for (key in newAttrs) 95 !== key.charCodeAt(0) && (setter[propName + DELIMETER + key] = newAttrs[key]); else false;
      }
      function getClassAttrs(ctor) {
        return ctor.hasOwnProperty("__attrs__") && ctor.__attrs__ || createAttrs(ctor);
      }
      function getClassAttrsProto(ctor) {
        return getClassAttrs(ctor).constructor.prototype;
      }
      function setClassAttr(ctor, propName, key, value) {
        var proto = getClassAttrsProto(ctor);
        proto[propName + DELIMETER + key] = value;
      }
      cc.Integer = "Integer";
      cc.Float = "Float";
      false;
      cc.Boolean = "Boolean";
      cc.String = "String";
      function getTypeChecker(type, attrName) {
        false;
      }
      function ObjectType(typeCtor) {
        return {
          type: "Object",
          ctor: typeCtor,
          _onAfterProp: false
        };
      }
      module.exports = {
        attr: attr,
        getClassAttrs: getClassAttrs,
        getClassAttrsProto: getClassAttrsProto,
        setClassAttr: setClassAttr,
        DELIMETER: DELIMETER,
        getTypeChecker: getTypeChecker,
        ObjectType: ObjectType,
        ScriptUuid: {}
      };
    }), {
      "./CCClass": 92,
      "./js": 107,
      "./utils": 111
    } ],
    100: [ (function(require, module, exports) {
      var JS = require("./js");
      var fastRemoveAt = JS.array.fastRemoveAt;
      function CallbackList() {
        this.callbacks = [];
        this.targets = [];
        this.isInvoking = false;
        this.containCanceled = false;
      }
      var proto = CallbackList.prototype;
      proto.removeBy = function(array, value) {
        var callbacks = this.callbacks;
        var targets = this.targets;
        for (var i = 0; i < array.length; ++i) if (array[i] === value) {
          fastRemoveAt(callbacks, i);
          fastRemoveAt(targets, i);
          --i;
        }
      };
      proto.cancel = function(index) {
        this.callbacks[index] = this.targets[index] = null;
        this.containCanceled = true;
      };
      proto.cancelAll = function() {
        var callbacks = this.callbacks;
        var targets = this.targets;
        for (var i = 0; i < callbacks.length; i++) callbacks[i] = targets[i] = null;
        this.containCanceled = true;
      };
      proto.purgeCanceled = function() {
        this.removeBy(this.callbacks, null);
        this.containCanceled = false;
      };
      var MAX_SIZE = 16;
      var callbackListPool = new JS.Pool(function(list) {
        list.callbacks.length = 0;
        list.targets.length = 0;
        list.isInvoking = false;
        list.containCanceled = false;
      }, MAX_SIZE);
      callbackListPool.get = function() {
        return this._get() || new CallbackList();
      };
      function CallbacksHandler() {
        this._callbackTable = JS.createMap(true);
      }
      proto = CallbacksHandler.prototype;
      proto.add = function(key, callback, target) {
        var list = this._callbackTable[key];
        list || (list = this._callbackTable[key] = callbackListPool.get());
        list.callbacks.push(callback);
        list.targets.push(target || null);
      };
      proto.has = function(key, callback, target) {
        var list = this._callbackTable[key];
        if (!list) return false;
        var callbacks = list.callbacks;
        if (!callback) {
          for (var i = 0; i < callbacks.length; i++) if (callbacks[i]) return true;
          return false;
        }
        target = target || null;
        var targets = list.targets;
        for (var _i = 0; _i < callbacks.length; ++_i) if (callbacks[_i] === callback && targets[_i] === target) return true;
        return false;
      };
      proto.removeAll = function(keyOrTarget) {
        if ("string" === (__typeofVal = typeof keyOrTarget, "object" === __typeofVal ? __realTypeOfObj(keyOrTarget) : __typeofVal)) {
          var list = this._callbackTable[keyOrTarget];
          if (list) if (list.isInvoking) list.cancelAll(); else {
            callbackListPool.put(list);
            delete this._callbackTable[keyOrTarget];
          }
        } else if (keyOrTarget) for (var key in this._callbackTable) {
          var _list = this._callbackTable[key];
          if (_list.isInvoking) {
            var targets = _list.targets;
            for (var i = 0; i < targets.length; ++i) targets[i] === keyOrTarget && _list.cancel(i);
          } else _list.removeBy(_list.targets, keyOrTarget);
        }
      };
      proto.remove = function(key, callback, target) {
        var list = this._callbackTable[key];
        if (list) {
          target = target || null;
          var callbacks = list.callbacks;
          var targets = list.targets;
          for (var i = 0; i < callbacks.length; ++i) if (callbacks[i] === callback && targets[i] === target) {
            if (list.isInvoking) list.cancel(i); else {
              fastRemoveAt(callbacks, i);
              fastRemoveAt(targets, i);
            }
            break;
          }
        }
      };
      var CallbacksInvoker = function() {
        CallbacksHandler.call(this);
      };
      JS.extend(CallbacksInvoker, CallbacksHandler);
      false;
      CallbacksInvoker.prototype.invoke = function(key, p1, p2, p3, p4, p5) {
        var list = this._callbackTable[key];
        if (list) {
          var rootInvoker = !list.isInvoking;
          list.isInvoking = true;
          var callbacks = list.callbacks;
          var targets = list.targets;
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            var callback = callbacks[i];
            if (callback) {
              var target = targets[i];
              target ? callback.call(target, p1, p2, p3, p4, p5) : callback(p1, p2, p3, p4, p5);
            }
          }
          if (rootInvoker) {
            list.isInvoking = false;
            list.containCanceled && list.purgeCanceled();
          }
        }
      };
      CallbacksInvoker.CallbacksHandler = CallbacksHandler;
      module.exports = CallbacksInvoker;
    }), {
      "./js": 107
    } ],
    101: [ (function(require, module, exports) {
      function deepFlatten(strList, array) {
        for (var i = 0; i < array.length; i++) {
          var item = array[i];
          Array.isArray(item) ? deepFlatten(strList, item) : strList.push(item);
        }
      }
      function flattenCodeArray(array) {
        var separator = "";
        var strList = [];
        deepFlatten(strList, array);
        return strList.join(separator);
      }
      module.exports = {
        flattenCodeArray: flattenCodeArray
      };
    }), {} ],
    102: [ (function(require, module, exports) {
      var JS = require("./js");
      var CCObject = require("./CCObject");
      var Attr = require("./attribute");
      var CCClass = require("./CCClass");
      var Misc = require("../utils/misc");
      var Details = function() {
        this.uuidList = [];
        this.uuidObjList = [];
        this.uuidPropList = [];
        this.rawProp = "";
      };
      Details.prototype.reset = function() {
        this.uuidList.length = 0;
        this.uuidObjList.length = 0;
        this.uuidPropList.length = 0;
        this.rawProp = "";
      };
      false;
      Details.prototype.getUuidOf = function(obj, propName) {
        for (var i = 0; i < this.uuidObjList.length; i++) if (this.uuidObjList[i] === obj && this.uuidPropList[i] === propName) return this.uuidList[i];
        return "";
      };
      Details.prototype.push = function(obj, propName, uuid) {
        this.uuidList.push(uuid);
        this.uuidObjList.push(obj);
        this.uuidPropList.push(propName);
      };
      Details.pool = new JS.Pool(function(obj) {
        obj.reset();
      }, 10);
      Details.pool.get = function() {
        return this._get() || new Details();
      };
      var _Deserializer = (function() {
        function _Deserializer(result, target, classFinder, customEnv, ignoreEditorOnly) {
          this.result = result;
          this.customEnv = customEnv;
          this.deserializedList = [];
          this.deserializedData = null;
          this._classFinder = classFinder;
          false;
          this._idList = [];
          this._idObjList = [];
          this._idPropList = [];
        }
        function _dereference(self) {
          var deserializedList = self.deserializedList;
          var idPropList = self._idPropList;
          var idList = self._idList;
          var idObjList = self._idObjList;
          var onDereferenced = self._classFinder && self._classFinder.onDereferenced;
          var i, propName, id;
          false;
          for (i = 0; i < idList.length; i++) {
            propName = idPropList[i];
            id = idList[i];
            idObjList[i][propName] = deserializedList[id];
          }
        }
        var prototype = _Deserializer.prototype;
        prototype.deserialize = function(jsonObj) {
          if (Array.isArray(jsonObj)) {
            var jsonArray = jsonObj;
            var refCount = jsonArray.length;
            this.deserializedList.length = refCount;
            for (var i = 0; i < refCount; i++) if (jsonArray[i]) {
              var mainTarget;
              false, false;
              this.deserializedList[i] = this._deserializeObject(jsonArray[i]);
            }
            this.deserializedData = refCount > 0 ? this.deserializedList[0] : [];
          } else {
            this.deserializedList.length = 1;
            false, false;
            this.deserializedData = jsonObj ? this._deserializeObject(jsonObj) : null;
            this.deserializedList[0] = this.deserializedData;
          }
          _dereference(this);
          return this.deserializedData;
        };
        prototype._deserializeObject = function(serialized, target, owner, propName) {
          var prop;
          var obj = null;
          var klass = null;
          var type = serialized.__type__;
          if (type) {
            klass = this._classFinder(type, serialized, owner, propName);
            if (!klass) {
              var notReported = this._classFinder === JS._getClassById;
              notReported && cc.deserialize.reportMissingClass(type);
              return null;
            }
            if ((false, false) && target) {
              target instanceof klass || cc.warnID(5300, JS.getClassName(target), klass);
              obj = target;
            } else obj = new klass();
            if (obj._deserialize) {
              obj._deserialize(serialized.content, this);
              return obj;
            }
            cc.Class._isCCClass(klass) ? _deserializeFireClass(this, obj, serialized, klass, target) : this._deserializeTypedObject(obj, serialized, klass);
          } else if (Array.isArray(serialized)) {
            if ((false, false) && target) {
              target.length = serialized.length;
              obj = target;
            } else obj = new Array(serialized.length);
            for (var i = 0; i < serialized.length; i++) {
              prop = serialized[i];
              if ("object" === (__typeofVal = typeof prop, "object" === __typeofVal ? __realTypeOfObj(prop) : __typeofVal) && prop) {
                false, false;
                this._deserializeObjField(obj, prop, "" + i);
              } else obj[i] = prop;
            }
          } else {
            obj = (false, false) && target || {};
            this._deserializePrimitiveObject(obj, serialized);
          }
          return obj;
        };
        prototype._deserializeObjField = function(obj, jsonObj, propName, target) {
          var id = jsonObj.__id__;
          if ("undefined" === (__typeofVal = typeof id, "object" === __typeofVal ? __realTypeOfObj(id) : __typeofVal)) {
            var uuid = jsonObj.__uuid__;
            if (uuid) {
              this.result.uuidList.push(uuid);
              this.result.uuidObjList.push(obj);
              this.result.uuidPropList.push(propName);
            } else {
              false, false;
              obj[propName] = this._deserializeObject(jsonObj);
            }
          } else {
            var dObj = this.deserializedList[id];
            if (dObj) obj[propName] = dObj; else {
              this._idList.push(id);
              this._idObjList.push(obj);
              this._idPropList.push(propName);
            }
          }
        };
        prototype._deserializePrimitiveObject = function(instance, serialized) {
          var self = this;
          for (var propName in serialized) if (serialized.hasOwnProperty(propName)) {
            var prop = serialized[propName];
            if ("object" !== (__typeofVal = typeof prop, "object" === __typeofVal ? __realTypeOfObj(prop) : __typeofVal)) "__type__" !== propName && (instance[propName] = prop); else if (prop) {
              false, false;
              self._deserializeObjField(instance, prop, propName);
            } else instance[propName] = null;
          }
        };
        prototype._deserializeTypedObject = function(instance, serialized, klass) {
          if (klass === cc.Vec2) {
            instance.x = serialized.x || 0;
            instance.y = serialized.y || 0;
            return;
          }
          if (klass === cc.Color) {
            instance.r = serialized.r || 0;
            instance.g = serialized.g || 0;
            instance.b = serialized.b || 0;
            var a = serialized.a;
            instance.a = void 0 === a ? 255 : a;
            return;
          }
          if (klass === cc.Size) {
            instance.width = serialized.width || 0;
            instance.height = serialized.height || 0;
            return;
          }
          var fastDefinedProps = klass.__props__;
          fastDefinedProps || (fastDefinedProps = Object.keys(instance));
          for (var i = 0; i < fastDefinedProps.length; i++) {
            var propName = fastDefinedProps[i];
            var prop = serialized[propName];
            if ("undefined" !== (__typeofVal = typeof prop, "object" === __typeofVal ? __realTypeOfObj(prop) : __typeofVal) && serialized.hasOwnProperty(propName)) if ("object" !== (__typeofVal = typeof prop, 
            "object" === __typeofVal ? __realTypeOfObj(prop) : __typeofVal)) instance[propName] = prop; else if (prop) {
              false, false;
              this._deserializeObjField(instance, prop, propName);
            } else instance[propName] = null;
          }
        };
        var compileObjectType = function(sources, defaultValue, accessorToSet, propNameLiteralToSet, assumeHavePropIfIsValue) {
          if (defaultValue instanceof cc.ValueType) {
            assumeHavePropIfIsValue || sources.push("if(prop){");
            var ctorCode = JS.getClassName(defaultValue);
            sources.push("s._deserializeTypedObject(o" + accessorToSet + ",prop," + ctorCode + ");");
            assumeHavePropIfIsValue || sources.push("}else o" + accessorToSet + "=null;");
          } else {
            sources.push("if(prop){");
            false, false;
            sources.push("s._deserializeObjField(o,prop," + propNameLiteralToSet + ");");
            sources.push("}else o" + accessorToSet + "=null;");
          }
        };
        var compileDeserialize = function(self, klass) {
          var TYPE = Attr.DELIMETER + "type";
          var RAW_TYPE = Attr.DELIMETER + "rawType";
          var EDITOR_ONLY = Attr.DELIMETER + "editorOnly";
          var SERIALIZABLE = Attr.DELIMETER + "serializable";
          var DEFAULT = Attr.DELIMETER + "default";
          var SAVE_URL_AS_ASSET = Attr.DELIMETER + "saveUrlAsAsset";
          var FORMERLY_SERIALIZED_AS = Attr.DELIMETER + "formerlySerializedAs";
          var attrs = Attr.getClassAttrs(klass);
          var props = klass.__props__;
          var sources = [ "var prop;" ];
          var fastMode = Misc.BUILTIN_CLASSID_RE.test(JS._getClassId(klass));
          for (var p = 0; p < props.length; p++) {
            var propName = props[p];
            var propNameLiteralToSet;
            var rawType = attrs[propName + RAW_TYPE];
            if (rawType) {
              propNameLiteralToSet = CCClass.IDENTIFIER_RE.test(propName) ? '"' + propName + '"' : CCClass.escapeForJS(propName);
              sources.push('if(s.result.rawProp)\ncc.error("not support multi raw object in a file");');
              sources.push("s.result.rawProp=" + propNameLiteralToSet + ";");
            } else {
              if ((false, false) && attrs[propName + EDITOR_ONLY]) {
                var mayUsedInPersistRoot = "_id" === propName && cc.isChildClassOf(klass, cc.Node);
                if (!mayUsedInPersistRoot) continue;
              }
              if (false === attrs[propName + SERIALIZABLE]) continue;
              var accessorToSet;
              if (CCClass.IDENTIFIER_RE.test(propName)) {
                propNameLiteralToSet = '"' + propName + '"';
                accessorToSet = "." + propName;
              } else {
                propNameLiteralToSet = CCClass.escapeForJS(propName);
                accessorToSet = "[" + propNameLiteralToSet + "]";
              }
              var accessorToGet = accessorToSet;
              if (attrs[propName + FORMERLY_SERIALIZED_AS]) {
                var propNameToRead = attrs[propName + FORMERLY_SERIALIZED_AS];
                accessorToGet = CCClass.IDENTIFIER_RE.test(propNameToRead) ? "." + propNameToRead : "[" + CCClass.escapeForJS(propNameToRead) + "]";
              }
              sources.push("prop=d" + accessorToGet + ";");
              sources.push('if(typeof (prop)!=="undefined"){');
              var defaultValue = CCClass.getDefault(attrs[propName + DEFAULT]);
              if (fastMode) {
                var isPrimitiveType;
                var userType = attrs[propName + TYPE];
                if (void 0 === defaultValue && userType) isPrimitiveType = userType === cc.String || userType === cc.Integer || userType === cc.Float || userType === cc.Boolean; else {
                  var defaultType = (__typeofVal = typeof defaultValue, "object" === __typeofVal ? __realTypeOfObj(defaultValue) : __typeofVal);
                  isPrimitiveType = "string" === defaultType && !attrs[propName + SAVE_URL_AS_ASSET] || "number" === defaultType || "boolean" === defaultType;
                }
                isPrimitiveType ? sources.push("o" + accessorToSet + "=prop;") : compileObjectType(sources, defaultValue, accessorToSet, propNameLiteralToSet, true);
              } else {
                sources.push('if(typeof (prop)!=="object"){o' + accessorToSet + "=prop;}else{");
                compileObjectType(sources, defaultValue, accessorToSet, propNameLiteralToSet, false);
                sources.push("}");
              }
              sources.push("}");
            }
          }
          if ("_$erialized" === props[props.length - 1]) {
            sources.push("o._$erialized=JSON.parse(JSON.stringify(d));");
            sources.push("s._deserializePrimitiveObject(o._$erialized,d);");
          }
          return Function("s", "o", "d", "k", "t", sources.join(""));
        };
        function unlinkUnusedPrefab(self, serialized, obj) {
          var uuid = serialized["asset"] && serialized["asset"].__uuid__;
          if (uuid) {
            var last = self.result.uuidList.length - 1;
            if (self.result.uuidList[last] === uuid && self.result.uuidObjList[last] === obj && "asset" === self.result.uuidPropList[last]) {
              self.result.uuidList.pop();
              self.result.uuidObjList.pop();
              self.result.uuidPropList.pop();
            } else {
              var debugEnvOnlyInfo = "Failed to skip prefab asset while deserializing PrefabInfo";
              cc.warn(debugEnvOnlyInfo);
            }
          }
        }
        function _deserializeFireClass(self, obj, serialized, klass, target) {
          var deserialize;
          if (klass.hasOwnProperty("__deserialize__")) deserialize = klass.__deserialize__; else {
            deserialize = compileDeserialize(self, klass);
            JS.value(klass, "__deserialize__", deserialize, true);
          }
          deserialize(self, obj, serialized, klass, target);
          false, false;
        }
        _Deserializer.pool = new JS.Pool(function(obj) {
          obj.result = null;
          obj.customEnv = null;
          obj.deserializedList.length = 0;
          obj.deserializedData = null;
          obj._classFinder = null;
          false;
          obj._idList.length = 0;
          obj._idObjList.length = 0;
          obj._idPropList.length = 0;
        }, 1);
        _Deserializer.pool.get = function(result, target, classFinder, customEnv, ignoreEditorOnly) {
          var cache = this._get();
          if (cache) {
            cache.result = result;
            cache.customEnv = customEnv;
            cache._classFinder = classFinder;
            false;
            return cache;
          }
          return new _Deserializer(result, target, classFinder, customEnv, ignoreEditorOnly);
        };
        return _Deserializer;
      })();
      cc.deserialize = function(data, details, options) {
        options = options || {};
        var classFinder = options.classFinder || JS._getClassById;
        var createAssetRefs = options.createAssetRefs || cc.sys.platform === cc.sys.EDITOR_CORE;
        var target = (false, false) && options.target;
        var customEnv = options.customEnv;
        var ignoreEditorOnly = options.ignoreEditorOnly;
        false;
        "string" === (__typeofVal = typeof data, "object" === __typeofVal ? __realTypeOfObj(data) : __typeofVal) && (data = JSON.parse(data));
        var tempDetails = !details;
        details = details || Details.pool.get();
        var deserializer = _Deserializer.pool.get(details, target, classFinder, customEnv, ignoreEditorOnly);
        cc.game._isCloning = true;
        var res = deserializer.deserialize(data);
        cc.game._isCloning = false;
        _Deserializer.pool.put(deserializer);
        createAssetRefs && details.assignAssetsBy(Editor.serialize.asAsset);
        tempDetails && Details.pool.put(details);
        return res;
      };
      cc.deserialize.Details = Details;
      cc.deserialize.reportMissingClass = function(id) {
        false;
        cc.warnID(5302, id);
      };
    }), {
      "../utils/misc": 117,
      "./CCClass": 92,
      "./CCObject": 96,
      "./attribute": 99,
      "./js": 107
    } ],
    103: [ (function(require, module, exports) {
      var NonUuidMark = ".";
      function IdGenerater(category) {
        this.id = 0 | 998 * Math.random();
        this.prefix = category ? category + NonUuidMark : "";
      }
      IdGenerater.prototype.getNewId = function() {
        return this.prefix + ++this.id;
      };
      IdGenerater.global = new IdGenerater("global");
      module.exports = IdGenerater;
    }), {} ],
    104: [ (function(require, module, exports) {
      require("./js");
      require("./CCClass");
      require("./CCClassDecorator");
      require("./CCEnum");
      require("./CCObject");
      require("./callbacks-invoker");
      require("./url");
      require("./deserialize");
      require("./instantiate");
      require("./instantiate-jit");
      require("./requiring-frame");
      require("./CCSys");
      require("./CCMacro");
      true;
      require("./CCAssetLibrary");
      false;
    }), {
      "./CCAssetLibrary": 91,
      "./CCClass": 92,
      "./CCClassDecorator": 93,
      "./CCEnum": 94,
      "./CCMacro": 95,
      "./CCObject": 96,
      "./CCSys": 97,
      "./CCVisibleRect": 1,
      "./callbacks-invoker": 100,
      "./deserialize": 102,
      "./instantiate": 106,
      "./instantiate-jit": 105,
      "./js": 107,
      "./requiring-frame": 109,
      "./url": 110
    } ],
    105: [ (function(require, module, exports) {
      var CCObject = require("./CCObject");
      var Destroyed = CCObject.Flags.Destroyed;
      var PersistentMask = CCObject.Flags.PersistentMask;
      var Attr = require("./attribute");
      var JS = require("./js");
      var CCClass = require("./CCClass");
      var Compiler = require("./compiler");
      var SERIALIZABLE = Attr.DELIMETER + "serializable";
      var DEFAULT = Attr.DELIMETER + "default";
      var IDENTIFIER_RE = CCClass.IDENTIFIER_RE;
      var escapeForJS = CCClass.escapeForJS;
      var VAR = "var ";
      var LOCAL_OBJ = "o";
      var LOCAL_TEMP_OBJ = "t";
      var LOCAL_ARRAY = "a";
      var LINE_INDEX_OF_NEW_OBJ = 0;
      var DEFAULT_MODULE_CACHE = {
        "cc.Node": "cc.Node",
        "cc.Sprite": "cc.Sprite",
        "cc.Label": "cc.Label",
        "cc.Button": "cc.Button",
        "cc.Widget": "cc.Widget",
        "cc.Animation": "cc.Animation",
        "cc.ClickEvent": false,
        "cc.PrefabInfo": false
      };
      function Declaration(varName, expression) {
        this.varName = varName;
        this.expression = expression;
      }
      Declaration.prototype.toString = function() {
        return VAR + this.varName + "=" + this.expression + ";";
      };
      function mergeDeclaration(statement, expression) {
        return expression instanceof Declaration ? new Declaration(expression.varName, statement + expression.expression) : statement + expression;
      }
      function writeAssignment(codeArray, statement, expression) {
        if (Array.isArray(expression)) {
          expression[0] = mergeDeclaration(statement, expression[0]);
          codeArray.push(expression);
        } else codeArray.push(mergeDeclaration(statement, expression) + ";");
      }
      function Assignments(targetExpression) {
        this._exps = [];
        this._targetExp = targetExpression;
      }
      Assignments.prototype.append = function(key, expression) {
        this._exps.push([ key, expression ]);
      };
      Assignments.prototype.writeCode = function(codeArray) {
        var targetVar;
        if (this._exps.length > 1) {
          codeArray.push(LOCAL_TEMP_OBJ + "=" + this._targetExp + ";");
          targetVar = LOCAL_TEMP_OBJ;
        } else {
          if (1 !== this._exps.length) return;
          targetVar = this._targetExp;
        }
        for (var i = 0; i < this._exps.length; i++) {
          var pair = this._exps[i];
          writeAssignment(codeArray, targetVar + getPropAccessor(pair[0]) + "=", pair[1]);
        }
      };
      Assignments.pool = new JS.Pool(function(obj) {
        obj._exps.length = 0;
        obj._targetExp = null;
      }, 1);
      Assignments.pool.get = function(targetExpression) {
        var cache = this._get() || new Assignments();
        cache._targetExp = targetExpression;
        return cache;
      };
      function equalsToDefault(def, value) {
        if ("function" === (__typeofVal = typeof def, "object" === __typeofVal ? __realTypeOfObj(def) : __typeofVal)) try {
          def = def();
        } catch (e) {
          return false;
        }
        if (def === value) return true;
        if (def && value) {
          if (def instanceof cc.ValueType && def.equals(value)) return true;
          if (Array.isArray(def) && Array.isArray(value) || def.constructor === Object && value.constructor === Object) try {
            return JSON.stringify(def) === JSON.stringify(value);
          } catch (e) {}
        }
        return false;
      }
      function getPropAccessor(key) {
        return IDENTIFIER_RE.test(key) ? "." + key : "[" + escapeForJS(key) + "]";
      }
      function Parser(obj, parent) {
        this.parent = parent;
        this.objsToClear_iN$t = [];
        this.codeArray = [];
        this.objs = [];
        this.funcs = [];
        this.funcModuleCache = JS.createMap();
        JS.mixin(this.funcModuleCache, DEFAULT_MODULE_CACHE);
        this.globalVariables = [];
        this.globalVariableId = 0;
        this.localVariableId = 0;
        this.codeArray.push(VAR + LOCAL_OBJ + "," + LOCAL_TEMP_OBJ + ";", "if(R){", LOCAL_OBJ + "=R;", "}else{", LOCAL_OBJ + "=R=new " + this.getFuncModule(obj.constructor, true) + "();", "}");
        obj._iN$t = {
          globalVar: "R"
        };
        this.objsToClear_iN$t.push(obj);
        this.enumerateObject(this.codeArray, obj);
        var globalVariablesDeclaration;
        this.globalVariables.length > 0 && (globalVariablesDeclaration = VAR + this.globalVariables.join(",") + ";");
        var code = Compiler.flattenCodeArray([ "return (function(R){", globalVariablesDeclaration || [], this.codeArray, "return o;", "})" ]);
        this.result = Function("O", "F", code)(this.objs, this.funcs);
        for (var i = 0, len = this.objsToClear_iN$t.length; i < len; ++i) this.objsToClear_iN$t[i]._iN$t = null;
        this.objsToClear_iN$t.length = 0;
      }
      var proto = Parser.prototype;
      proto.getFuncModule = function(func, usedInNew) {
        var clsName = JS.getClassName(func);
        if (clsName) {
          var cache = this.funcModuleCache[clsName];
          if (cache) return cache;
          if (void 0 === cache) {
            var clsNameIsModule = -1 !== clsName.indexOf(".");
            if (clsNameIsModule) try {
              clsNameIsModule = func === Function("return " + clsName)();
              if (clsNameIsModule) {
                this.funcModuleCache[clsName] = clsName;
                return clsName;
              }
            } catch (e) {}
          }
        }
        var index = this.funcs.indexOf(func);
        if (index < 0) {
          index = this.funcs.length;
          this.funcs.push(func);
        }
        var res = "F[" + index + "]";
        usedInNew && (res = "(" + res + ")");
        this.funcModuleCache[clsName] = res;
        return res;
      };
      proto.getObjRef = function(obj) {
        var index = this.objs.indexOf(obj);
        if (index < 0) {
          index = this.objs.length;
          this.objs.push(obj);
        }
        return "O[" + index + "]";
      };
      proto.setValueType = function(codeArray, defaultValue, srcValue, targetExpression) {
        var assignments = Assignments.pool.get(targetExpression);
        var fastDefinedProps = defaultValue.constructor.__props__;
        fastDefinedProps || (fastDefinedProps = Object.keys(defaultValue));
        for (var i = 0; i < fastDefinedProps.length; i++) {
          var propName = fastDefinedProps[i];
          var prop = srcValue[propName];
          if (defaultValue[propName] === prop) continue;
          var expression = this.enumerateField(srcValue, propName, prop);
          assignments.append(propName, expression);
        }
        assignments.writeCode(codeArray);
        Assignments.pool.put(assignments);
      };
      proto.enumerateCCClass = function(codeArray, obj, klass) {
        var props = klass.__props__;
        var attrs = Attr.getClassAttrs(klass);
        for (var p = 0; p < props.length; p++) {
          var key = props[p];
          if ((false, false) && "_id" === key && (obj instanceof cc._BaseNode || obj instanceof cc.Component)) continue;
          if (false !== attrs[key + SERIALIZABLE]) {
            var val = obj[key];
            var defaultValue = attrs[key + DEFAULT];
            if (equalsToDefault(defaultValue, val)) continue;
            if ("object" === (__typeofVal = typeof val, "object" === __typeofVal ? __realTypeOfObj(val) : __typeofVal) && val instanceof cc.ValueType) {
              var defaultValue = CCClass.getDefault(defaultValue);
              if ((defaultValue && defaultValue.constructor) === val.constructor) {
                var targetExpression = LOCAL_OBJ + getPropAccessor(key);
                this.setValueType(codeArray, defaultValue, val, targetExpression);
                continue;
              }
            }
            this.setObjProp(codeArray, obj, key, val);
          }
        }
      };
      proto.instantiateArray = function(value) {
        if (0 === value.length) return "[]";
        var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
        var declaration = new Declaration(arrayVar, "new Array(" + value.length + ")");
        var codeArray = [ declaration ];
        value._iN$t = {
          globalVar: "",
          source: codeArray
        };
        this.objsToClear_iN$t.push(value);
        for (var i = 0; i < value.length; ++i) {
          var statement = arrayVar + "[" + i + "]=";
          var expression = this.enumerateField(value, i, value[i]);
          writeAssignment(codeArray, statement, expression);
        }
        return codeArray;
      };
      proto.enumerateField = function(obj, key, value) {
        if ("object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value) {
          var _iN$t = value._iN$t;
          if (_iN$t) {
            var globalVar = _iN$t.globalVar;
            if (!globalVar) {
              globalVar = _iN$t.globalVar = "v" + ++this.globalVariableId;
              this.globalVariables.push(globalVar);
              var line = _iN$t.source[LINE_INDEX_OF_NEW_OBJ];
              _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = mergeDeclaration(globalVar + "=", line);
            }
            return globalVar;
          }
          return Array.isArray(value) ? this.instantiateArray(value) : this.instantiateObj(value);
        }
        if ("function" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal)) return this.getFuncModule(value);
        if ("string" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal)) return escapeForJS(value);
        "_objFlags" === key && obj instanceof CCObject && (value &= PersistentMask);
        return value;
      };
      proto.setObjProp = function(codeArray, obj, key, value) {
        var statement = LOCAL_OBJ + getPropAccessor(key) + "=";
        var expression = this.enumerateField(obj, key, value);
        writeAssignment(codeArray, statement, expression);
      };
      proto.enumerateObject = function(codeArray, obj) {
        var klass = obj.constructor;
        if (cc.Class._isCCClass(klass)) this.enumerateCCClass(codeArray, obj, klass); else for (var key in obj) {
          if (!obj.hasOwnProperty(key) || 95 === key.charCodeAt(0) && 95 === key.charCodeAt(1) && "__type__" !== key) continue;
          var value = obj[key];
          if ("object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value && value === obj._iN$t) continue;
          this.setObjProp(codeArray, obj, key, value);
        }
      };
      proto.instantiateObj = function(obj) {
        if (obj instanceof cc.ValueType) return CCClass.getNewValueTypeCode(obj);
        if (obj instanceof cc.Asset) return this.getObjRef(obj);
        if (obj._objFlags & Destroyed) return null;
        var createCode;
        var ctor = obj.constructor;
        if (cc.Class._isCCClass(ctor)) {
          if (this.parent) if (this.parent instanceof cc.Component) {
            if (obj instanceof cc._BaseNode || obj instanceof cc.Component) return this.getObjRef(obj);
          } else if (this.parent instanceof cc._BaseNode) if (obj instanceof cc._BaseNode) {
            if (!obj.isChildOf(this.parent)) return this.getObjRef(obj);
          } else if (obj instanceof cc.Component && !obj.node.isChildOf(this.parent)) return this.getObjRef(obj);
          createCode = new Declaration(LOCAL_OBJ, "new " + this.getFuncModule(ctor, true) + "()");
        } else if (ctor === Object) createCode = new Declaration(LOCAL_OBJ, "{}"); else {
          if (ctor) return this.getObjRef(obj);
          createCode = new Declaration(LOCAL_OBJ, "Object.create(null)");
        }
        var codeArray = [ createCode ];
        obj._iN$t = {
          globalVar: "",
          source: codeArray
        };
        this.objsToClear_iN$t.push(obj);
        this.enumerateObject(codeArray, obj);
        return [ "(function(){", codeArray, "return o;})();" ];
      };
      function compile(node) {
        var root = node instanceof cc._BaseNode && node;
        var parser = new Parser(node, root);
        return parser.result;
      }
      module.exports = {
        compile: compile,
        equalsToDefault: equalsToDefault
      };
      false;
    }), {
      "./CCClass": 92,
      "./CCObject": 96,
      "./attribute": 99,
      "./compiler": 101,
      "./js": 107
    } ],
    106: [ (function(require, module, exports) {
      var CCObject = require("./CCObject");
      var Destroyed = CCObject.Flags.Destroyed;
      var PersistentMask = CCObject.Flags.PersistentMask;
      var Attr = require("./attribute");
      var _isDomNode = require("./utils").isDomNode;
      function instantiate(original, internal_force) {
        if (!internal_force) {
          if ("object" !== (__typeofVal = typeof original, "object" === __typeofVal ? __realTypeOfObj(original) : __typeofVal) || Array.isArray(original)) {
            false;
            return null;
          }
          if (!original) {
            false;
            return null;
          }
          if (!cc.isValid(original)) {
            false;
            return null;
          }
          false;
        }
        var clone;
        if (original instanceof CCObject) {
          if (original._instantiate) {
            cc.game._isCloning = true;
            clone = original._instantiate();
            cc.game._isCloning = false;
            return clone;
          }
          if (original instanceof cc.Asset) {
            false;
            return null;
          }
        }
        cc.game._isCloning = true;
        clone = doInstantiate(original);
        cc.game._isCloning = false;
        return clone;
      }
      var objsToClearTmpVar = [];
      function doInstantiate(obj, parent) {
        if (Array.isArray(obj)) {
          false;
          return null;
        }
        false;
        var clone;
        if (obj._iN$t) clone = obj._iN$t; else if (obj.constructor) {
          var klass = obj.constructor;
          clone = new klass();
        } else clone = Object.create(null);
        enumerateObject(obj, clone, parent);
        for (var i = 0, len = objsToClearTmpVar.length; i < len; ++i) objsToClearTmpVar[i]._iN$t = null;
        objsToClearTmpVar.length = 0;
        return clone;
      }
      var SERIALIZABLE = Attr.DELIMETER + "serializable";
      function enumerateCCClass(klass, obj, clone, parent) {
        var props = klass.__props__;
        var attrs = Attr.getClassAttrs(klass);
        for (var p = 0; p < props.length; p++) {
          var key = props[p];
          if (false !== attrs[key + SERIALIZABLE]) {
            var value = obj[key];
            "object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value ? clone[key] = value._iN$t || instantiateObj(value, parent) : clone[key] = value;
          }
        }
        (false, false) && (obj instanceof cc._BaseNode || obj instanceof cc.Component) && (clone._id = "");
      }
      function enumerateObject(obj, clone, parent) {
        obj._iN$t = clone;
        objsToClearTmpVar.push(obj);
        var klass = obj.constructor;
        if (cc.Class._isCCClass(klass)) enumerateCCClass(klass, obj, clone, parent); else for (var key in obj) {
          if (!obj.hasOwnProperty(key) || 95 === key.charCodeAt(0) && 95 === key.charCodeAt(1) && "__type__" !== key) continue;
          var value = obj[key];
          if ("object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value) {
            if (value === clone) continue;
            clone[key] = value._iN$t || instantiateObj(value, parent);
          } else clone[key] = value;
        }
        obj instanceof CCObject && (clone._objFlags &= PersistentMask);
      }
      function instantiateObj(obj, parent) {
        if (obj instanceof cc.ValueType) return obj.clone();
        if (obj instanceof cc.Asset) return obj;
        var clone;
        if (Array.isArray(obj)) {
          var len = obj.length;
          clone = new Array(len);
          obj._iN$t = clone;
          for (var i = 0; i < len; ++i) {
            var value = obj[i];
            "object" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && value ? clone[i] = value._iN$t || instantiateObj(value, parent) : clone[i] = value;
          }
          objsToClearTmpVar.push(obj);
          return clone;
        }
        if (obj._objFlags & Destroyed) return null;
        var ctor = obj.constructor;
        if (cc.Class._isCCClass(ctor)) {
          if (parent) if (parent instanceof cc.Component) {
            if (obj instanceof cc._BaseNode || obj instanceof cc.Component) return obj;
          } else if (parent instanceof cc._BaseNode) if (obj instanceof cc._BaseNode) {
            if (!obj.isChildOf(parent)) return obj;
          } else if (obj instanceof cc.Component && !obj.node.isChildOf(parent)) return obj;
          clone = new ctor();
        } else if (ctor === Object) clone = {}; else {
          if (ctor) return obj;
          clone = Object.create(null);
        }
        enumerateObject(obj, clone, parent);
        return clone;
      }
      instantiate._clone = doInstantiate;
      cc.instantiate = instantiate;
      module.exports = instantiate;
    }), {
      "./CCObject": 96,
      "./attribute": 99,
      "./utils": 111
    } ],
    107: [ (function(require, module, exports) {
      var tempCIDGenerater = new (require("./id-generater"))("TmpCId.");
      function _getPropertyDescriptor(obj, name) {
        while (obj) {
          var pd = Object.getOwnPropertyDescriptor(obj, name);
          if (pd) return pd;
          obj = Object.getPrototypeOf(obj);
        }
        return null;
      }
      function _copyprop(name, source, target) {
        var pd = _getPropertyDescriptor(source, name);
        Object.defineProperty(target, name, pd);
      }
      var js = {
        isNumber: function(obj) {
          return "number" === (__typeofVal = typeof obj, "object" === __typeofVal ? __realTypeOfObj(obj) : __typeofVal) || obj instanceof Number;
        },
        isString: function(obj) {
          return "string" === (__typeofVal = typeof obj, "object" === __typeofVal ? __realTypeOfObj(obj) : __typeofVal) || obj instanceof String;
        },
        addon: function(obj) {
          "use strict";
          obj = obj || {};
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            if (source) {
              if ("object" !== (__typeofVal = typeof source, "object" === __typeofVal ? __realTypeOfObj(source) : __typeofVal)) {
                cc.errorID(5402, source);
                continue;
              }
              for (var name in source) name in obj || _copyprop(name, source, obj);
            }
          }
          return obj;
        },
        mixin: function(obj) {
          "use strict";
          obj = obj || {};
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            if (source) {
              if ("object" !== (__typeofVal = typeof source, "object" === __typeofVal ? __realTypeOfObj(source) : __typeofVal)) {
                cc.errorID(5403, source);
                continue;
              }
              for (var name in source) _copyprop(name, source, obj);
            }
          }
          return obj;
        },
        extend: function(cls, base) {
          false;
          for (var p in base) base.hasOwnProperty(p) && (cls[p] = base[p]);
          cls.prototype = Object.create(base.prototype, {
            constructor: {
              value: cls,
              writable: true,
              configurable: true
            }
          });
          return cls;
        },
        getSuper: function(ctor) {
          if (true, ctor.hasOwnProperty("$super")) return ctor.$super;
          var proto = ctor.prototype;
          var dunderProto = proto && Object.getPrototypeOf(proto);
          return dunderProto && dunderProto.constructor;
        },
        clear: function(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) delete obj[keys[i]];
        },
        getPropertyDescriptor: _getPropertyDescriptor
      };
      var tmpValueDesc = {
        value: void 0,
        enumerable: false,
        writable: false,
        configurable: true
      };
      js.value = function(obj, prop, value, writable, enumerable) {
        tmpValueDesc.value = value;
        tmpValueDesc.writable = writable;
        tmpValueDesc.enumerable = enumerable;
        Object.defineProperty(obj, prop, tmpValueDesc);
        tmpValueDesc.value = void 0;
      };
      var tmpGetSetDesc = {
        get: null,
        set: null,
        enumerable: false
      };
      js.getset = function(obj, prop, getter, setter, enumerable) {
        if ("function" !== (__typeofVal = typeof setter, "object" === __typeofVal ? __realTypeOfObj(setter) : __typeofVal)) {
          enumerable = setter;
          setter = void 0;
        }
        tmpGetSetDesc.get = getter;
        tmpGetSetDesc.set = setter;
        tmpGetSetDesc.enumerable = enumerable;
        Object.defineProperty(obj, prop, tmpGetSetDesc);
        tmpGetSetDesc.get = null;
        tmpGetSetDesc.set = null;
      };
      var tmpGetDesc = {
        get: null,
        enumerable: false,
        configurable: false
      };
      js.get = function(obj, prop, getter, enumerable, configurable) {
        tmpGetDesc.get = getter;
        tmpGetDesc.enumerable = enumerable;
        tmpGetDesc.configurable = configurable;
        Object.defineProperty(obj, prop, tmpGetDesc);
        tmpGetDesc.get = null;
      };
      var tmpSetDesc = {
        set: null,
        enumerable: false,
        configurable: false
      };
      js.set = function(obj, prop, setter, enumerable, configurable) {
        tmpSetDesc.set = setter;
        tmpSetDesc.enumerable = enumerable;
        tmpSetDesc.configurable = configurable;
        Object.defineProperty(obj, prop, tmpSetDesc);
        tmpSetDesc.set = null;
      };
      js.getClassName = function(objOrCtor) {
        if ("function" === (__typeofVal = typeof objOrCtor, "object" === __typeofVal ? __realTypeOfObj(objOrCtor) : __typeofVal)) {
          var prototype = objOrCtor.prototype;
          if (prototype && prototype.hasOwnProperty("__classname__") && prototype.__classname__) return prototype.__classname__;
          var retval = "";
          objOrCtor.name && (retval = objOrCtor.name);
          if (objOrCtor.toString) {
            var arr, str = objOrCtor.toString();
            arr = "[" === str.charAt(0) ? str.match(/\[\w+\s*(\w+)\]/) : str.match(/function\s*(\w+)/);
            arr && 2 === arr.length && (retval = arr[1]);
          }
          return "Object" !== retval ? retval : "";
        }
        if (objOrCtor && objOrCtor.constructor) return js.getClassName(objOrCtor.constructor);
        return "";
      };
      function isTempClassId(id) {
        return "string" !== (__typeofVal = typeof id, "object" === __typeofVal ? __realTypeOfObj(id) : __typeofVal) || id.startsWith(tempCIDGenerater.prefix);
      }
      (function() {
        var _idToClass = {};
        var _nameToClass = {};
        function getRegister(key, table) {
          return function(id, constructor) {
            constructor.prototype.hasOwnProperty(key) && delete table[constructor.prototype[key]];
            js.value(constructor.prototype, key, id);
            if (id) {
              var registered = table[id];
              if (registered && registered !== constructor) {
                var error = "A Class already exists with the same " + key + ' : "' + id + '".';
                false;
                cc.error(error);
              } else table[id] = constructor;
            }
          };
        }
        js._setClassId = getRegister("__cid__", _idToClass);
        var doSetClassName = getRegister("__classname__", _nameToClass);
        js.setClassName = function(className, constructor) {
          doSetClassName(className, constructor);
          if (!constructor.prototype.hasOwnProperty("__cid__")) {
            var id = className || tempCIDGenerater.getNewId();
            id && js._setClassId(id, constructor);
          }
        };
        js.unregisterClass = function() {
          for (var i = 0; i < arguments.length; i++) {
            var p = arguments[i].prototype;
            var classId = p.__cid__;
            classId && delete _idToClass[classId];
            var classname = p.__classname__;
            classname && delete _nameToClass[classname];
          }
        };
        js._getClassById = function(classId) {
          return _idToClass[classId];
        };
        js.getClassByName = function(classname) {
          return _nameToClass[classname];
        };
        js._getClassId = function(obj, allowTempId) {
          allowTempId = "undefined" === (__typeofVal = typeof allowTempId, "object" === __typeofVal ? __realTypeOfObj(allowTempId) : __typeofVal) || allowTempId;
          var res;
          if ("function" === (__typeofVal = typeof obj, "object" === __typeofVal ? __realTypeOfObj(obj) : __typeofVal) && obj.prototype.hasOwnProperty("__cid__")) {
            res = obj.prototype.__cid__;
            if (!allowTempId && (false, false) && isTempClassId(res)) return "";
            return res;
          }
          if (obj && obj.constructor) {
            var prototype = obj.constructor.prototype;
            if (prototype && prototype.hasOwnProperty("__cid__")) {
              res = obj.__cid__;
              if (!allowTempId && (false, false) && isTempClassId(res)) return "";
              return res;
            }
          }
          return "";
        };
        false;
      })();
      js.obsolete = function(obj, obsoleted, newPropName, writable) {
        var oldName = /([^.]+)$/.exec(obsoleted)[0];
        function get() {
          false;
          return this[newPropName];
        }
        writable ? js.getset(obj, oldName, get, (function(value) {
          false;
          this[newPropName] = value;
        })) : js.get(obj, oldName, get);
      };
      js.obsoletes = function(obj, objName, props, writable) {
        for (var obsoleted in props) {
          var newName = props[obsoleted];
          js.obsolete(obj, objName + "." + obsoleted, newName, writable);
        }
      };
      var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
      var REGEXP_STR = /%s/;
      js.formatStr = function() {
        var argLen = arguments.length;
        if (0 === argLen) return "";
        var msg = arguments[0];
        if (1 === argLen) return "" + msg;
        var hasSubstitution = "string" === (__typeofVal = typeof msg, "object" === __typeofVal ? __realTypeOfObj(msg) : __typeofVal) && REGEXP_NUM_OR_STR.test(msg);
        if (hasSubstitution) for (var i = 1; i < argLen; ++i) {
          var arg = arguments[i];
          var regExpToTest = "number" === (__typeofVal = typeof arg, "object" === __typeofVal ? __realTypeOfObj(arg) : __typeofVal) ? REGEXP_NUM_OR_STR : REGEXP_STR;
          regExpToTest.test(msg) ? msg = msg.replace(regExpToTest, arg) : msg += " " + arg;
        } else for (var _i = 1; _i < argLen; ++_i) msg += " " + arguments[_i];
        return msg;
      };
      js.shiftArguments = function() {
        var len = arguments.length - 1;
        var args = new Array(len);
        for (var i = 0; i < len; ++i) args[i] = arguments[i + 1];
        return args;
      };
      js.createMap = function(forceDictMode) {
        var map = Object.create(null);
        if (forceDictMode) {
          var INVALID_IDENTIFIER_1 = ".";
          var INVALID_IDENTIFIER_2 = "/";
          map[INVALID_IDENTIFIER_1] = true;
          map[INVALID_IDENTIFIER_2] = true;
          delete map[INVALID_IDENTIFIER_1];
          delete map[INVALID_IDENTIFIER_2];
        }
        return map;
      };
      function removeAt(array, index) {
        array.splice(index, 1);
      }
      function fastRemoveAt(array, index) {
        var length = array.length;
        if (index < 0 || index >= length) return;
        array[index] = array[length - 1];
        array.length = length - 1;
      }
      function remove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
          removeAt(array, index);
          return true;
        }
        return false;
      }
      function fastRemove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
          array[index] = array[array.length - 1];
          --array.length;
        }
      }
      function verifyType(array, type) {
        if (array && array.length > 0) for (var i = 0; i < array.length; i++) if (!(array[i] instanceof type)) {
          cc.logID(1300);
          return false;
        }
        return true;
      }
      function removeArray(array, minusArr) {
        for (var i = 0, l = minusArr.length; i < l; i++) remove(array, minusArr[i]);
      }
      function appendObjectsAt(array, addObjs, index) {
        array.splice.apply(array, [ index, 0 ].concat(addObjs));
        return array;
      }
      var indexOf = Array.prototype.indexOf;
      function contains(array, value) {
        return array.indexOf(value) >= 0;
      }
      function copy(array) {
        var i, len = array.length, arr_clone = new Array(len);
        for (i = 0; i < len; i += 1) arr_clone[i] = array[i];
        return arr_clone;
      }
      js.array = {
        remove: remove,
        fastRemove: fastRemove,
        removeAt: removeAt,
        fastRemoveAt: fastRemoveAt,
        contains: contains,
        verifyType: verifyType,
        removeArray: removeArray,
        appendObjectsAt: appendObjectsAt,
        copy: copy,
        indexOf: indexOf,
        MutableForwardIterator: require("../utils/mutable-forward-iterator")
      };
      function Pool(cleanupFunc, size) {
        if ("number" === (__typeofVal = typeof cleanupFunc, "object" === __typeofVal ? __realTypeOfObj(cleanupFunc) : __typeofVal)) {
          size = cleanupFunc;
          cleanupFunc = null;
        }
        this.get = null;
        this.count = 0;
        this._pool = new Array(size);
        this._cleanup = cleanupFunc;
      }
      Pool.prototype._get = function() {
        if (this.count > 0) {
          --this.count;
          var cache = this._pool[this.count];
          this._pool[this.count] = null;
          return cache;
        }
        return null;
      };
      Pool.prototype.put = function(obj) {
        var pool = this._pool;
        if (this.count < pool.length) {
          if (this._cleanup && false === this._cleanup(obj)) return;
          pool[this.count] = obj;
          ++this.count;
        }
      };
      Pool.prototype.resize = function(length) {
        if (length >= 0) {
          this._pool.length = length;
          this.count > length && (this.count = length);
        }
      };
      js.Pool = Pool;
      cc.js = js;
      module.exports = js;
    }), {
      "../utils/mutable-forward-iterator": 118,
      "./id-generater": 103
    } ],
    108: [ (function(require, module, exports) {
      var SerializableAttrs = {
        url: {
          canUsedInGet: true
        },
        default: {},
        serializable: {},
        editorOnly: {},
        rawType: {},
        formerlySerializedAs: {}
      };
      var TYPO_TO_CORRECT_DEV = false;
      function parseNotify(val, propName, notify, properties) {
        if (val.get || val.set) {
          false;
          return;
        }
        if (val.hasOwnProperty("default")) {
          var newKey = "_N$" + propName;
          val.get = function() {
            return this[newKey];
          };
          val.set = function(value) {
            var oldValue = this[newKey];
            this[newKey] = value;
            notify.call(this, oldValue);
          };
          var newValue = {};
          properties[newKey] = newValue;
          for (var attr in SerializableAttrs) {
            var v = SerializableAttrs[attr];
            if (val.hasOwnProperty(attr)) {
              newValue[attr] = val[attr];
              v.canUsedInGet || delete val[attr];
            }
          }
        } else false;
      }
      function checkUrl(val, className, propName, url) {
        Array.isArray(url) && url.length > 0 && (url = url[0]);
        false;
        val.type = url;
      }
      function parseType(val, type, className, propName) {
        if (Array.isArray(type)) {
          var isArray;
          false;
          if (!(type.length > 0)) return cc.errorID(5508, className, propName);
          if (cc.RawAsset.isRawAssetType(type[0])) {
            val.url = type[0];
            delete val.type;
            return;
          }
          val.type = type = type[0];
        }
        false;
      }
      function postCheckType(val, type, className, propName) {
        false;
      }
      function getBaseClassWherePropertyDefined_DEV(propName, cls) {
        var res;
        false;
      }
      exports.getFullFormOfProperty = function(options) {
        var isLiteral = options && options.constructor === Object;
        if (!isLiteral) {
          if (Array.isArray(options) && options.length > 0) return {
            default: [],
            type: options,
            _short: true
          };
          if ("function" === (__typeofVal = typeof options, "object" === __typeofVal ? __realTypeOfObj(options) : __typeofVal)) {
            var type = options;
            return cc.RawAsset.isRawAssetType(type) ? {
              default: "",
              url: type,
              _short: true
            } : {
              default: cc.isChildClassOf(type, cc.ValueType) ? new type() : null,
              type: type,
              _short: true
            };
          }
          return {
            default: options,
            _short: true
          };
        }
        return null;
      };
      exports.preprocessAttrs = function(properties, className, cls, es6) {
        for (var propName in properties) {
          var val = properties[propName];
          var fullForm = exports.getFullFormOfProperty(val);
          fullForm && (val = properties[propName] = fullForm);
          if (val) {
            var maybeTypeScript;
            false;
            var baseClass;
            false;
            var notify = val.notify;
            if (notify) {
              false;
              parseNotify(val, propName, notify, properties);
            }
            "type" in val && parseType(val, val.type, className, propName);
            "url" in val && checkUrl(val, className, propName, val.url);
            "type" in val && postCheckType(val, val.type, className, propName);
          }
        }
      };
      false;
      exports.validateMethodWithProps = function(func, funcName, className, cls, base) {
        false;
        if ("function" !== (__typeofVal = typeof func, "object" === __typeofVal ? __realTypeOfObj(func) : __typeofVal) && null !== func) {
          var overrided;
          var baseFuc;
          var subFuc;
          var correct;
          false;
          return false;
        }
        false;
        return true;
      };
    }), {
      "./CCClass": 92
    } ],
    109: [ (function(require, module, exports) {
      var requiringFrames = [];
      cc._RF = {
        push: function(module, uuid, script) {
          if (void 0 === script) {
            script = uuid;
            uuid = "";
          }
          requiringFrames.push({
            uuid: uuid,
            script: script,
            module: module,
            exports: module.exports,
            beh: null
          });
        },
        pop: function() {
          var frameInfo = requiringFrames.pop();
          var module = frameInfo.module;
          var exports = module.exports;
          if (exports === frameInfo.exports) {
            for (var anyKey in exports) return;
            module.exports = exports = frameInfo.cls;
          }
        },
        peek: function() {
          return requiringFrames[requiringFrames.length - 1];
        }
      };
      false;
    }), {} ],
    110: [ (function(require, module, exports) {
      var _mounts = {};
      cc.url = {
        _rawAssets: "",
        _builtinRawAssets: "",
        normalize: function(url) {
          46 === url.charCodeAt(0) && 47 === url.charCodeAt(1) ? url = url.slice(2) : 47 === url.charCodeAt(0) && (url = url.slice(1));
          return url;
        },
        raw: function(url) {
          false;
          url = this.normalize(url);
          if (!url.startsWith("resources/")) {
            false;
            cc.errorID(7002, url);
          }
          return this._rawAssets + url;
        },
        builtinRaw: false,
        _init: function(mountPaths) {
          for (var dir in mountPaths) {
            var path = mountPaths[dir];
            path = cc.path.stripSep(path) + "/";
            _mounts[dir] = path;
          }
          this._rawAssets = _mounts.assets;
          this._builtinRawAssets = _mounts.internal;
        }
      };
      module.exports = cc.url;
    }), {} ],
    111: [ (function(require, module, exports) {
      module.exports = {
        contains: function(refNode, otherNode) {
          if ("function" == (__typeofVal = typeof refNode.contains, "object" === __typeofVal ? __realTypeOfObj(refNode.contains) : __typeofVal)) return refNode.contains(otherNode);
          if ("function" == (__typeofVal = typeof refNode.compareDocumentPosition, "object" === __typeofVal ? __realTypeOfObj(refNode.compareDocumentPosition) : __typeofVal)) return !!(16 & refNode.compareDocumentPosition(otherNode));
          var node = otherNode.parentNode;
          if (node) do {
            if (node === refNode) return true;
            node = node.parentNode;
          } while (null !== node);
          return false;
        },
        isDomNode: "object" === (__typeofVal = typeof window, "object" === __typeofVal ? __realTypeOfObj(window) : __typeofVal) && ("function" === (__typeofVal = typeof Node, 
        "object" === __typeofVal ? __realTypeOfObj(Node) : __typeofVal) ? function(obj) {
          return obj instanceof Node;
        } : function(obj) {
          return obj && "object" === (__typeofVal = typeof obj, "object" === __typeofVal ? __realTypeOfObj(obj) : __typeofVal) && "number" === (__typeofVal = typeof obj.nodeType, 
          "object" === __typeofVal ? __realTypeOfObj(obj.nodeType) : __typeofVal) && "string" === (__typeofVal = typeof obj.nodeName, 
          "object" === __typeofVal ? __realTypeOfObj(obj.nodeName) : __typeofVal);
        }),
        callInNextTick: function(callback, p1, p2) {
          callback && cc.director.once(cc.Director._EVENT_NEXT_TICK, (function() {
            callback(p1, p2);
          }));
        }
      };
      false;
      false;
    }), {} ],
    112: [ (function(require, module, exports) {
      require("../platform/CCSys");
      var EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
      var DIRNAME_RE = /((.*)(\/|\\|\\\\))?(.*?\..*$)?/;
      var NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
      cc.path = {
        join: function() {
          var l = arguments.length;
          var result = "";
          for (var i = 0; i < l; i++) result = (result + ("" === result ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
          return result;
        },
        extname: function(pathStr) {
          var temp = EXTNAME_RE.exec(pathStr);
          return temp ? temp[1] : "";
        },
        mainFileName: function(fileName) {
          if (fileName) {
            var idx = fileName.lastIndexOf(".");
            if (-1 !== idx) return fileName.substring(0, idx);
          }
          return fileName;
        },
        basename: function(pathStr, extname) {
          var index = pathStr.indexOf("?");
          index > 0 && (pathStr = pathStr.substring(0, index));
          var reg = /(\/|\\\\)([^(\/|\\\\)]+)$/g;
          var result = reg.exec(pathStr.replace(/(\/|\\\\)$/, ""));
          if (!result) return null;
          var baseName = result[2];
          if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() === extname.toLowerCase()) return baseName.substring(0, baseName.length - extname.length);
          return baseName;
        },
        dirname: function(pathStr) {
          var temp = DIRNAME_RE.exec(pathStr);
          return temp ? temp[2] : "";
        },
        changeExtname: function(pathStr, extname) {
          extname = extname || "";
          var index = pathStr.indexOf("?");
          var tempStr = "";
          if (index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
          }
          index = pathStr.lastIndexOf(".");
          if (index < 0) return pathStr + extname + tempStr;
          return pathStr.substring(0, index) + extname + tempStr;
        },
        changeBasename: function(pathStr, basename, isSameExt) {
          if (0 === basename.indexOf(".")) return this.changeExtname(pathStr, basename);
          var index = pathStr.indexOf("?");
          var tempStr = "";
          var ext = isSameExt ? this.extname(pathStr) : "";
          if (index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
          }
          index = pathStr.lastIndexOf("/");
          index = index <= 0 ? 0 : index + 1;
          return pathStr.substring(0, index) + basename + ext + tempStr;
        },
        _normalize: function(url) {
          var oldUrl = url = String(url);
          do {
            oldUrl = url;
            url = url.replace(NORMALIZE_RE, "");
          } while (oldUrl.length !== url.length);
          return url;
        },
        sep: cc.sys.os === cc.sys.OS_WINDOWS ? "\\" : "/",
        stripSep: function(path) {
          return path.replace(/[\/\\]$/, "");
        }
      };
      module.exports = cc.path;
    }), {
      "../platform/CCSys": 97
    } ],
    113: [ (function(require, module, exports) {
      var Flags = require("../platform/CCObject").Flags;
      var Misc = require("./misc");
      var IdGenerater = require("../platform/id-generater");
      var eventManager = require("../event-manager");
      var JS = cc.js;
      var Destroying = Flags.Destroying;
      var DontDestroy = Flags.DontDestroy;
      var CHILD_ADDED = "child-added";
      var CHILD_REMOVED = "child-removed";
      var idGenerater = new IdGenerater("Node");
      function getConstructor(typeOrClassName) {
        if (!typeOrClassName) {
          cc.errorID(3804);
          return null;
        }
        if ("string" === (__typeofVal = typeof typeOrClassName, "object" === __typeofVal ? __realTypeOfObj(typeOrClassName) : __typeofVal)) return JS.getClassByName(typeOrClassName);
        return typeOrClassName;
      }
      function findComponent(node, constructor) {
        if (constructor._sealed) for (var i = 0; i < node._components.length; ++i) {
          var comp = node._components[i];
          if (comp.constructor === constructor) return comp;
        } else for (var _i = 0; _i < node._components.length; ++_i) {
          var _comp = node._components[_i];
          if (_comp instanceof constructor) return _comp;
        }
        return null;
      }
      function findComponents(node, constructor, components) {
        if (constructor._sealed) for (var i = 0; i < node._components.length; ++i) {
          var comp = node._components[i];
          comp.constructor === constructor && components.push(comp);
        } else for (var _i2 = 0; _i2 < node._components.length; ++_i2) {
          var _comp2 = node._components[_i2];
          _comp2 instanceof constructor && components.push(_comp2);
        }
      }
      function findChildComponent(children, constructor) {
        for (var i = 0; i < children.length; ++i) {
          var node = children[i];
          var comp = findComponent(node, constructor);
          if (comp) return comp;
          if (node._children.length > 0) {
            comp = findChildComponent(node._children, constructor);
            if (comp) return comp;
          }
        }
        return null;
      }
      function findChildComponents(children, constructor, components) {
        for (var i = 0; i < children.length; ++i) {
          var node = children[i];
          findComponents(node, constructor, components);
          node._children.length > 0 && findChildComponents(node._children, constructor, components);
        }
      }
      var BaseNode = cc.Class({
        name: "cc._BaseNode",
        extends: cc.Object,
        mixins: [ cc.EventTarget ],
        properties: {
          _parent: null,
          _children: [],
          _tag: cc.macro.NODE_TAG_INVALID,
          _active: true,
          _components: [],
          _prefab: null,
          _persistNode: {
            get: function() {
              return (this._objFlags & DontDestroy) > 0;
            },
            set: function(value) {
              value ? this._objFlags |= DontDestroy : this._objFlags &= ~DontDestroy;
            }
          },
          name: {
            get: function() {
              return this._name;
            },
            set: function(value) {
              false;
              this._name = value;
            }
          },
          _id: {
            default: "",
            editorOnly: true
          },
          uuid: {
            get: function() {
              var id = this._id;
              id || (id = this._id = idGenerater.getNewId());
              return id;
            }
          },
          children: {
            get: function() {
              return this._children;
            }
          },
          childrenCount: {
            get: function() {
              return this._children.length;
            }
          },
          active: {
            get: function() {
              return this._active;
            },
            set: function(value) {
              value = !!value;
              if (this._active !== value) {
                this._active = value;
                var parent = this._parent;
                if (parent) {
                  var couldActiveInScene = parent._activeInHierarchy;
                  couldActiveInScene && cc.director._nodeActivator.activateNode(this, value);
                }
              }
            }
          },
          activeInHierarchy: {
            get: function() {
              return this._activeInHierarchy;
            }
          }
        },
        ctor: function(name) {
          this._name = "undefined" !== (__typeofVal = typeof name, "object" === __typeofVal ? __realTypeOfObj(name) : __typeofVal) ? name : "New Node";
          this._activeInHierarchy = false;
          this.__instanceId = this._id || cc.ClassManager.getNewInstanceId();
          this.__eventTargets = [];
        },
        getTag: function() {
          return this._tag;
        },
        setTag: function(tag) {
          this._tag = tag;
        },
        getParent: function() {
          return this._parent;
        },
        setParent: function(value) {
          if (this._parent === value) return;
          false;
          var oldParent = this._parent;
          this._parent = value || null;
          this._onSetParent(value);
          if (value) {
            false;
            value._children.push(this);
            value.emit(CHILD_ADDED, this);
          }
          if (oldParent) {
            if (!(oldParent._objFlags & Destroying)) {
              var removeAt = oldParent._children.indexOf(this);
              false;
              oldParent._children.splice(removeAt, 1);
              oldParent.emit(CHILD_REMOVED, this);
              this._onHierarchyChanged(oldParent);
            }
          } else value && this._onHierarchyChanged(null);
        },
        init: function() {
          return true;
        },
        attr: function(attrs) {
          JS.mixin(this, attrs);
        },
        getChildByTag: function(aTag) {
          var children = this._children;
          if (null !== children) for (var i = 0; i < children.length; i++) {
            var node = children[i];
            if (node && node._tag === aTag) return node;
          }
          return null;
        },
        getChildByUuid: function(uuid) {
          if (!uuid) {
            cc.log("Invalid uuid");
            return null;
          }
          var locChildren = this._children;
          for (var i = 0, len = locChildren.length; i < len; i++) if (locChildren[i]._id === uuid) return locChildren[i];
          return null;
        },
        getChildByName: function(name) {
          if (!name) {
            cc.log("Invalid name");
            return null;
          }
          var locChildren = this._children;
          for (var i = 0, len = locChildren.length; i < len; i++) if (locChildren[i]._name === name) return locChildren[i];
          return null;
        },
        addChild: function(child) {
          false;
          cc.assertID(child, 1606);
          cc.assertID(null === child._parent, 1605);
          child.setParent(this);
        },
        insertChild: function(child, siblingIndex) {
          child.parent = this;
          child.setSiblingIndex(siblingIndex);
        },
        getSiblingIndex: function() {
          return this._parent ? this._parent._children.indexOf(this) : 0;
        },
        setSiblingIndex: function(index) {
          if (!this._parent) return;
          var siblings = this._parent._children;
          index = -1 !== index ? index : siblings.length - 1;
          var oldIndex = siblings.indexOf(this);
          if (index !== oldIndex) {
            siblings.splice(oldIndex, 1);
            index < siblings.length ? siblings.splice(index, 0, this) : siblings.push(this);
            this._onSiblingIndexChanged && this._onSiblingIndexChanged(index);
          }
        },
        cleanup: function() {},
        removeFromParent: function(cleanup) {
          if (this._parent) {
            void 0 === cleanup && (cleanup = true);
            this._parent.removeChild(this, cleanup);
          }
        },
        removeChild: function(child, cleanup) {
          if (this._children.indexOf(child) > -1) {
            (cleanup || void 0 === cleanup) && child.cleanup();
            child.parent = null;
          }
        },
        removeChildByTag: function(tag, cleanup) {
          tag === cc.macro.NODE_TAG_INVALID && cc.logID(1609);
          var child = this.getChildByTag(tag);
          child ? this.removeChild(child, cleanup) : cc.logID(1610, tag);
        },
        removeAllChildren: function(cleanup) {
          var children = this._children;
          void 0 === cleanup && (cleanup = true);
          for (var i = children.length - 1; i >= 0; i--) {
            var node = children[i];
            if (node) {
              cleanup && node.cleanup();
              node.parent = null;
            }
          }
          this._children.length = 0;
        },
        isChildOf: function(parent) {
          var child = this;
          do {
            if (child === parent) return true;
            child = child._parent;
          } while (child);
          return false;
        },
        getComponent: function(typeOrClassName) {
          var constructor = getConstructor(typeOrClassName);
          if (constructor) return findComponent(this, constructor);
          return null;
        },
        getComponents: function(typeOrClassName) {
          var constructor = getConstructor(typeOrClassName), components = [];
          constructor && findComponents(this, constructor, components);
          return components;
        },
        getComponentInChildren: function(typeOrClassName) {
          var constructor = getConstructor(typeOrClassName);
          if (constructor) return findChildComponent(this._children, constructor);
          return null;
        },
        getComponentsInChildren: function(typeOrClassName) {
          var constructor = getConstructor(typeOrClassName), components = [];
          if (constructor) {
            findComponents(this, constructor, components);
            findChildComponents(this._children, constructor, components);
          }
          return components;
        },
        _checkMultipleComp: false,
        addComponent: function(typeOrClassName) {
          false;
          var constructor;
          if ("string" === (__typeofVal = typeof typeOrClassName, "object" === __typeofVal ? __realTypeOfObj(typeOrClassName) : __typeofVal)) {
            constructor = JS.getClassByName(typeOrClassName);
            if (!constructor) {
              cc.errorID(3807, typeOrClassName);
              cc._RFpeek() && cc.errorID(3808, typeOrClassName);
              return null;
            }
          } else {
            if (!typeOrClassName) {
              cc.errorID(3804);
              return null;
            }
            constructor = typeOrClassName;
          }
          if ("function" !== (__typeofVal = typeof constructor, "object" === __typeofVal ? __realTypeOfObj(constructor) : __typeofVal)) {
            cc.errorID(3809);
            return null;
          }
          if (!cc.isChildClassOf(constructor, cc.Component)) {
            cc.errorID(3810);
            return null;
          }
          false;
          var ReqComp = constructor._requireComponent;
          if (ReqComp && !this.getComponent(ReqComp)) {
            var depended = this.addComponent(ReqComp);
            if (!depended) return null;
          }
          var component = new constructor();
          component.node = this;
          this._components.push(component);
          this._activeInHierarchy && cc.director._nodeActivator.activateComp(component);
          return component;
        },
        _addComponentAt: false,
        removeComponent: function(component) {
          if (!component) {
            cc.errorID(3813);
            return;
          }
          component instanceof cc.Component || (component = this.getComponent(component));
          component && component.destroy();
        },
        _getDependComponent: false,
        _removeComponent: function(component) {
          if (!component) {
            cc.errorID(3814);
            return;
          }
          if (!(this._objFlags & Destroying)) {
            var i = this._components.indexOf(component);
            -1 !== i ? this._components.splice(i, 1) : component.node !== this && cc.errorID(3815);
          }
        },
        _disableChildComps: function() {
          var i, len = this._components.length;
          for (i = 0; i < len; ++i) {
            var component = this._components[i];
            component._enabled && cc.director._compScheduler.disableComp(component);
          }
          for (i = 0, len = this._children.length; i < len; ++i) {
            var node = this._children[i];
            node._active && node._disableChildComps();
          }
        },
        destroy: function() {
          cc.Object.prototype.destroy.call(this) && this._activeInHierarchy && this._disableChildComps();
        },
        destroyAllChildren: function() {
          var children = this._children;
          for (var i = 0; i < children.length; ++i) children[i].destroy();
        },
        _onSetParent: function(value) {},
        _onPostActivated: function() {},
        _onHierarchyChanged: function(oldParent) {
          var newParent = this._parent;
          if (this._persistNode && !(newParent instanceof cc.Scene)) {
            cc.game.removePersistRootNode(this);
            false;
          }
          var shouldActiveNow = this._active && !!(newParent && newParent._activeInHierarchy);
          this._activeInHierarchy !== shouldActiveNow && cc.director._nodeActivator.activateNode(this, shouldActiveNow);
          var scene;
          var inCurrentSceneBefore;
          var inCurrentSceneNow;
          var newPrefabRoot;
          var myPrefabInfo;
          false, false;
        },
        _onBatchCreated: function() {
          var prefabInfo = this._prefab;
          prefabInfo && prefabInfo.sync && !prefabInfo._synced && prefabInfo.root === this && PrefabHelper.syncWithPrefab(this);
          var children = this._children;
          for (var i = 0, len = children.length; i < len; i++) children[i]._onBatchCreated();
        },
        _instantiate: function(cloned) {
          cloned || (cloned = cc.instantiate._clone(this, this));
          var thisPrefabInfo = this._prefab;
          false;
          var syncing = thisPrefabInfo && this === thisPrefabInfo.root && thisPrefabInfo.sync;
          !!syncing && (cloned._prefab._synced = thisPrefabInfo._synced);
          cloned._parent = null;
          cloned._onBatchCreated();
          return cloned;
        },
        _registerIfAttached: (false, false) && function(register) {
          if (register) {
            cc.engine.attachedObjsForEditor[this.uuid] = this;
            cc.engine.emit("node-attach-to-scene", {
              target: this
            });
          } else {
            cc.engine.emit("node-detach-from-scene", {
              target: this
            });
            delete cc.engine.attachedObjsForEditor[this._id];
          }
          var children = this._children;
          for (var i = 0, len = children.length; i < len; ++i) {
            var child = children[i];
            child._registerIfAttached(register);
          }
        },
        _onPreDestroy: function() {
          var i, len;
          this._objFlags |= Destroying;
          var parent = this._parent;
          var destroyByParent = parent && parent._objFlags & Destroying;
          !destroyByParent && (false, false) && this._registerIfAttached(false);
          var children = this._children;
          for (i = 0, len = children.length; i < len; ++i) children[i]._destroyImmediate();
          for (i = 0, len = this._components.length; i < len; ++i) {
            var component = this._components[i];
            component._destroyImmediate();
          }
          var eventTargets = this.__eventTargets;
          for (i = 0, len = eventTargets.length; i < len; ++i) {
            var target = eventTargets[i];
            target && target.targetOff(this);
          }
          eventTargets.length = 0;
          this._persistNode && cc.game.removePersistRootNode(this);
          if (!destroyByParent && parent) {
            var childIndex = parent._children.indexOf(this);
            parent._children.splice(childIndex, 1);
            parent.emit("child-removed", this);
          }
          return destroyByParent;
        },
        onRestore: false
      });
      BaseNode.prototype._onPreDestroyBase = BaseNode.prototype._onPreDestroy;
      false;
      BaseNode.prototype._onHierarchyChangedBase = BaseNode.prototype._onHierarchyChanged;
      false;
      var SameNameGetSets = [ "name", "children", "childrenCount" ];
      Misc.propertyDefine(BaseNode, SameNameGetSets, {});
      false;
      cc._BaseNode = module.exports = BaseNode;
    }), {
      "../event-manager": 62,
      "../platform/CCObject": 96,
      "../platform/id-generater": 103,
      "./misc": 117
    } ],
    114: [ (function(require, module, exports) {
      var EPSILON = 1e-6;
      function binarySearchEpsilon(array, value) {
        for (var l = 0, h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
          var test = array[m];
          if (test > value + EPSILON) h = m - 1; else {
            if (!(test < value - EPSILON)) return m;
            l = m + 1;
          }
        }
        return ~l;
      }
      module.exports = {
        binarySearchEpsilon: binarySearchEpsilon
      };
    }), {} ],
    115: [ (function(require, module, exports) {
      var Base64Values = require("./misc").BASE64_VALUES;
      var HexChars = "0123456789abcdef".split("");
      var _t = [ "", "", "", "" ];
      var UuidTemplate = _t.concat(_t, "-", _t, "-", _t, "-", _t, "-", _t, _t, _t);
      var Indices = UuidTemplate.map((function(x, i) {
        return "-" === x ? NaN : i;
      })).filter(isFinite);
      module.exports = function(base64) {
        if (22 !== base64.length) return base64;
        UuidTemplate[0] = base64[0];
        UuidTemplate[1] = base64[1];
        for (var i = 2, j = 2; i < 22; i += 2) {
          var lhs = Base64Values[base64.charCodeAt(i)];
          var rhs = Base64Values[base64.charCodeAt(i + 1)];
          UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
          UuidTemplate[Indices[j++]] = HexChars[(3 & lhs) << 2 | rhs >> 4];
          UuidTemplate[Indices[j++]] = HexChars[15 & rhs];
        }
        return UuidTemplate.join("");
      };
      false;
    }), {
      "./misc": 117
    } ],
    116: [ (function(require, module, exports) {
      cc.find = module.exports = function(path, referenceNode) {
        if (null == path) {
          cc.errorID(5600);
          return null;
        }
        if (referenceNode) false; else {
          var scene = cc.director.getScene();
          if (!scene) {
            false;
            return null;
          }
          false;
          referenceNode = scene;
        }
        var match = referenceNode;
        var startIndex = "/" !== path[0] ? 0 : 1;
        var nameList = path.split("/");
        for (var n = startIndex; n < nameList.length; n++) {
          var name = nameList[n];
          var children = match._children;
          match = null;
          for (var t = 0, len = children.length; t < len; ++t) {
            var subChild = children[t];
            if (subChild.name === name) {
              match = subChild;
              break;
            }
          }
          if (!match) return null;
        }
        return match;
      };
    }), {} ],
    117: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      var sys = require("../platform/CCSys");
      var misc = exports;
      misc.propertyDefine = function(ctor, sameNameGetSets, diffNameGetSets) {
        function define(np, propName, getter, setter) {
          var pd = Object.getOwnPropertyDescriptor(np, propName);
          if (pd) {
            pd.get && (np[getter] = pd.get);
            pd.set && setter && (np[setter] = pd.set);
          } else {
            var getterFunc = np[getter];
            var clsName;
            false;
            cc.js.getset(np, propName, getterFunc, np[setter]);
          }
        }
        var propName, np = ctor.prototype;
        for (var i = 0; i < sameNameGetSets.length; i++) {
          propName = sameNameGetSets[i];
          var suffix = propName[0].toUpperCase() + propName.slice(1);
          define(np, propName, "get" + suffix, "set" + suffix);
        }
        for (propName in diffNameGetSets) {
          var getset = diffNameGetSets[propName];
          define(np, propName, getset[0], getset[1]);
        }
      };
      misc.NextPOT = function(x) {
        x -= 1;
        x |= x >> 1;
        x |= x >> 2;
        x |= x >> 4;
        x |= x >> 8;
        x |= x >> 16;
        return x + 1;
      };
      false;
      misc.imagePool = new JS.Pool(function(img) {
        if (img instanceof HTMLImageElement) {
          img.src = this._smallImg;
          return true;
        }
        return false;
      }, 10);
      misc.imagePool.get = function() {
        return this._get() || new Image();
      };
      misc.imagePool._smallImg = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";
      sys.os !== sys.OS_WINDOWS && sys.os !== sys.OS_LINUX || sys.browserType === sys.BROWSER_TYPE_CHROME || misc.imagePool.resize(0);
      misc.BUILTIN_CLASSID_RE = /^(?:cc|dragonBones|sp|ccsg)\..+/;
      var BASE64_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var BASE64_VALUES = new Array(123);
      for (var i = 0; i < 123; ++i) BASE64_VALUES[i] = 64;
      for (var _i = 0; _i < 64; ++_i) BASE64_VALUES[BASE64_KEYS.charCodeAt(_i)] = _i;
      misc.BASE64_VALUES = BASE64_VALUES;
      misc.pushToMap = function(map, key, value, pushFront) {
        var exists = map[key];
        if (exists) if (Array.isArray(exists)) if (pushFront) {
          exists.push(exists[0]);
          exists[0] = value;
        } else exists.push(value); else map[key] = pushFront ? [ value, exists ] : [ exists, value ]; else map[key] = value;
      };
    }), {
      "../platform/CCSys": 97,
      "../platform/js": 107
    } ],
    118: [ (function(require, module, exports) {
      function MutableForwardIterator(array) {
        this.i = 0;
        this.array = array;
      }
      var proto = MutableForwardIterator.prototype;
      proto.remove = function(value) {
        var index = this.array.indexOf(value);
        index >= 0 && this.removeAt(index);
      };
      proto.removeAt = function(i) {
        this.array.splice(i, 1);
        i <= this.i && --this.i;
      };
      proto.fastRemove = function(value) {
        var index = this.array.indexOf(value);
        index >= 0 && this.fastRemoveAt(index);
      };
      proto.fastRemoveAt = function(i) {
        var array = this.array;
        array[i] = array[array.length - 1];
        --array.length;
        i <= this.i && --this.i;
      };
      proto.push = function(item) {
        this.array.push(item);
      };
      module.exports = MutableForwardIterator;
    }), {} ],
    119: [ (function(require, module, exports) {
      cc._PrefabInfo = cc.Class({
        name: "cc.PrefabInfo",
        properties: {
          root: null,
          asset: null,
          fileId: "",
          sync: false,
          _synced: {
            default: false,
            serializable: false
          }
        }
      });
      module.exports = {
        syncWithPrefab: function(node) {
          var _prefab = node._prefab;
          _prefab._synced = true;
          if (!_prefab.asset) {
            false;
            cc.errorID(3701, node.name);
            node._prefab = null;
            return;
          }
          var _objFlags = node._objFlags;
          var _parent = node._parent;
          var _id = node._id;
          var _name = node._name;
          var _active = node._active;
          var x = node._position.x;
          var y = node._position.y;
          var _rotationX = node._rotationX;
          var _rotationY = node._rotationY;
          var _localZOrder = node._localZOrder;
          var _globalZOrder = node._globalZOrder;
          cc.game._isCloning = true;
          var prefabRoot;
          true;
          _prefab.asset._doInstantiate(node);
          cc.game._isCloning = false;
          node._objFlags = _objFlags;
          node._parent = _parent;
          node._id = _id;
          node._prefab = _prefab;
          node._name = _name;
          node._active = _active;
          node._position.x = x;
          node._position.y = y;
          node._rotationX = _rotationX;
          node._rotationY = _rotationY;
          node._localZOrder = _localZOrder;
          node._globalZOrder = _globalZOrder;
        }
      };
    }), {} ],
    120: [ (function(require, module, exports) {
      var SceneGraphUtils = {
        removeSgNode: function() {
          var sgNode = this._sgNode;
          if (sgNode) {
            var parent = sgNode._parent;
            if (parent) parent.removeChild(sgNode); else {
              true;
              sgNode.cleanup();
            }
            sgNode._entity && (sgNode._entity = null);
          }
        }
      };
      false;
      module.exports = SceneGraphUtils;
    }), {} ],
    121: [ (function(require, module, exports) {
      cc.AffineTransform = function(a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
      };
      cc.affineTransformMake = function(a, b, c, d, tx, ty) {
        return {
          a: a,
          b: b,
          c: c,
          d: d,
          tx: tx,
          ty: ty
        };
      };
      cc.affineTransformClone = function(t) {
        return {
          a: t.a,
          b: t.b,
          c: t.c,
          d: t.d,
          tx: t.tx,
          ty: t.ty
        };
      };
      cc.pointApplyAffineTransform = function(point, transOrY, t) {
        var x, y;
        if (void 0 === t) {
          t = transOrY;
          x = point.x;
          y = point.y;
        } else {
          x = point;
          y = transOrY;
        }
        return {
          x: t.a * x + t.c * y + t.tx,
          y: t.b * x + t.d * y + t.ty
        };
      };
      cc._pointApplyAffineTransformIn = function(point, transOrY, transOrOut, out) {
        var x, y, t;
        if (void 0 === out) {
          t = transOrY;
          x = point.x;
          y = point.y;
          out = transOrOut;
        } else {
          x = point;
          y = transOrY;
          t = transOrOut;
        }
        out.x = t.a * x + t.c * y + t.tx;
        out.y = t.b * x + t.d * y + t.ty;
      };
      cc._pointApplyAffineTransform = function(x, y, t) {
        return cc.pointApplyAffineTransform(x, y, t);
      };
      cc.sizeApplyAffineTransform = function(size, t) {
        return {
          width: t.a * size.width + t.c * size.height,
          height: t.b * size.width + t.d * size.height
        };
      };
      cc.affineTransformMakeIdentity = function() {
        return {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        };
      };
      cc.affineTransformIdentity = function() {
        return {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        };
      };
      cc.rectApplyAffineTransform = function(rect, t) {
        var ol = rect.x;
        var ob = rect.y;
        var or = ol + rect.width;
        var ot = ob + rect.height;
        var lbx = t.a * ol + t.c * ob + t.tx;
        var lby = t.b * ol + t.d * ob + t.ty;
        var rbx = t.a * or + t.c * ob + t.tx;
        var rby = t.b * or + t.d * ob + t.ty;
        var ltx = t.a * ol + t.c * ot + t.tx;
        var lty = t.b * ol + t.d * ot + t.ty;
        var rtx = t.a * or + t.c * ot + t.tx;
        var rty = t.b * or + t.d * ot + t.ty;
        var minX = Math.min(lbx, rbx, ltx, rtx);
        var maxX = Math.max(lbx, rbx, ltx, rtx);
        var minY = Math.min(lby, rby, lty, rty);
        var maxY = Math.max(lby, rby, lty, rty);
        return cc.rect(minX, minY, maxX - minX, maxY - minY);
      };
      cc._rectApplyAffineTransformIn = function(rect, t) {
        var ol = rect.x;
        var ob = rect.y;
        var or = ol + rect.width;
        var ot = ob + rect.height;
        var lbx = t.a * ol + t.c * ob + t.tx;
        var lby = t.b * ol + t.d * ob + t.ty;
        var rbx = t.a * or + t.c * ob + t.tx;
        var rby = t.b * or + t.d * ob + t.ty;
        var ltx = t.a * ol + t.c * ot + t.tx;
        var lty = t.b * ol + t.d * ot + t.ty;
        var rtx = t.a * or + t.c * ot + t.tx;
        var rty = t.b * or + t.d * ot + t.ty;
        var minX = Math.min(lbx, rbx, ltx, rtx);
        var maxX = Math.max(lbx, rbx, ltx, rtx);
        var minY = Math.min(lby, rby, lty, rty);
        var maxY = Math.max(lby, rby, lty, rty);
        rect.x = minX;
        rect.y = minY;
        rect.width = maxX - minX;
        rect.height = maxY - minY;
        return rect;
      };
      cc.obbApplyAffineTransform = function(rect, anAffineTransform, out_bl, out_tl, out_tr, out_br) {
        var x = rect.x;
        var y = rect.y;
        var width = rect.width;
        var height = rect.height;
        var tx = anAffineTransform.a * x + anAffineTransform.c * y + anAffineTransform.tx;
        var ty = anAffineTransform.b * x + anAffineTransform.d * y + anAffineTransform.ty;
        var xa = anAffineTransform.a * width;
        var xb = anAffineTransform.b * width;
        var yc = anAffineTransform.c * height;
        var yd = anAffineTransform.d * height;
        out_tl.x = tx;
        out_tl.y = ty;
        out_tr.x = xa + tx;
        out_tr.y = xb + ty;
        out_bl.x = yc + tx;
        out_bl.y = yd + ty;
        out_br.x = xa + yc + tx;
        out_br.y = xb + yd + ty;
      };
      cc.affineTransformTranslate = function(t, tx, ty) {
        return {
          a: t.a,
          b: t.b,
          c: t.c,
          d: t.d,
          tx: t.tx + t.a * tx + t.c * ty,
          ty: t.ty + t.b * tx + t.d * ty
        };
      };
      cc.affineTransformScale = function(t, sx, sy) {
        return {
          a: t.a * sx,
          b: t.b * sx,
          c: t.c * sy,
          d: t.d * sy,
          tx: t.tx,
          ty: t.ty
        };
      };
      cc.affineTransformRotate = function(aTransform, anAngle) {
        var fSin = Math.sin(anAngle);
        var fCos = Math.cos(anAngle);
        return {
          a: aTransform.a * fCos + aTransform.c * fSin,
          b: aTransform.b * fCos + aTransform.d * fSin,
          c: aTransform.c * fCos - aTransform.a * fSin,
          d: aTransform.d * fCos - aTransform.b * fSin,
          tx: aTransform.tx,
          ty: aTransform.ty
        };
      };
      cc.affineTransformConcat = function(t1, t2) {
        return {
          a: t1.a * t2.a + t1.b * t2.c,
          b: t1.a * t2.b + t1.b * t2.d,
          c: t1.c * t2.a + t1.d * t2.c,
          d: t1.c * t2.b + t1.d * t2.d,
          tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx,
          ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty
        };
      };
      cc.affineTransformConcatIn = function(t1, t2) {
        var a = t1.a, b = t1.b, c = t1.c, d = t1.d, tx = t1.tx, ty = t1.ty;
        t1.a = a * t2.a + b * t2.c;
        t1.b = a * t2.b + b * t2.d;
        t1.c = c * t2.a + d * t2.c;
        t1.d = c * t2.b + d * t2.d;
        t1.tx = tx * t2.a + ty * t2.c + t2.tx;
        t1.ty = tx * t2.b + ty * t2.d + t2.ty;
        return t1;
      };
      cc.affineTransformEqualToTransform = function(t1, t2) {
        return t1.a === t2.a && t1.b === t2.b && t1.c === t2.c && t1.d === t2.d && t1.tx === t2.tx && t1.ty === t2.ty;
      };
      cc.affineTransformInvert = function(t) {
        var determinant = 1 / (t.a * t.d - t.b * t.c);
        return {
          a: determinant * t.d,
          b: -determinant * t.b,
          c: -determinant * t.c,
          d: determinant * t.a,
          tx: determinant * (t.c * t.ty - t.d * t.tx),
          ty: determinant * (t.b * t.tx - t.a * t.ty)
        };
      };
      cc.affineTransformInvertIn = function(t) {
        var a = t.a, b = t.b, c = t.c, d = t.d;
        var determinant = 1 / (a * d - b * c);
        var tx = t.tx, ty = t.ty;
        t.a = determinant * d;
        t.b = -determinant * b;
        t.c = -determinant * c;
        t.d = determinant * a;
        t.tx = determinant * (c * ty - d * tx);
        t.ty = determinant * (b * tx - a * ty);
        return t;
      };
      cc.affineTransformInvertOut = function(t, out) {
        var a = t.a, b = t.b, c = t.c, d = t.d;
        var determinant = 1 / (a * d - b * c);
        out.a = determinant * d;
        out.b = -determinant * b;
        out.c = -determinant * c;
        out.d = determinant * a;
        out.tx = determinant * (c * t.ty - d * t.tx);
        out.ty = determinant * (b * t.tx - a * t.ty);
      };
    }), {} ],
    122: [ (function(require, module, exports) {
      var ValueType = require("./CCValueType");
      var JS = require("../platform/js");
      var Color = (function() {
        function Color(r, g, b, a) {
          if ("object" === (__typeofVal = typeof r, "object" === __typeofVal ? __realTypeOfObj(r) : __typeofVal)) {
            g = r.g;
            b = r.b;
            a = r.a;
            r = r.r;
          }
          r = r || 0;
          g = g || 0;
          b = b || 0;
          a = "number" === (__typeofVal = typeof a, "object" === __typeofVal ? __realTypeOfObj(a) : __typeofVal) ? a : 255;
          this._val = (~~r << 24 >>> 0) + (~~g << 16) + (~~b << 8) + ~~a;
        }
        JS.extend(Color, ValueType);
        require("../platform/CCClass").fastDefine("cc.Color", Color, {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        });
        var DefaultColors = {
          WHITE: [ 255, 255, 255, 255 ],
          BLACK: [ 0, 0, 0, 255 ],
          TRANSPARENT: [ 0, 0, 0, 0 ],
          GRAY: [ 127.5, 127.5, 127.5 ],
          RED: [ 255, 0, 0 ],
          GREEN: [ 0, 255, 0 ],
          BLUE: [ 0, 0, 255 ],
          YELLOW: [ 255, 235, 4 ],
          ORANGE: [ 255, 127, 0 ],
          CYAN: [ 0, 255, 255 ],
          MAGENTA: [ 255, 0, 255 ]
        };
        for (var colorName in DefaultColors) JS.get(Color, colorName, (function(rgba) {
          return function() {
            return new Color(rgba[0], rgba[1], rgba[2], rgba[3]);
          };
        })(DefaultColors[colorName]));
        var proto = Color.prototype;
        proto.clone = function() {
          var ret = new Color();
          ret._val = this._val;
          return ret;
        };
        proto.equals = function(other) {
          return other && this._val === other._val;
        };
        proto.lerp = function(to, ratio, out) {
          out = out || new Color();
          var r = this.r;
          var g = this.g;
          var b = this.b;
          var a = this.a;
          out.r = r + (to.r - r) * ratio;
          out.g = g + (to.g - g) * ratio;
          out.b = b + (to.b - b) * ratio;
          out.a = a + (to.a - a) * ratio;
          return out;
        };
        proto.toString = function() {
          return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
        };
        proto.getR = function() {
          return (4278190080 & this._val) >>> 24;
        };
        proto.setR = function(red) {
          this._val = (16777215 & this._val | ~~red << 24 >>> 0) >>> 0;
          return this;
        };
        proto.getG = function() {
          return (16711680 & this._val) >> 16;
        };
        proto.setG = function(green) {
          this._val = (4278255615 & this._val | ~~green << 16) >>> 0;
          return this;
        };
        proto.getB = function() {
          return (65280 & this._val) >> 8;
        };
        proto.setB = function(blue) {
          this._val = (4294902015 & this._val | ~~blue << 8) >>> 0;
          return this;
        };
        proto.getA = function() {
          return 255 & this._val;
        };
        proto.setA = function(alpha) {
          this._val = (4294967040 & this._val | ~~alpha) >>> 0;
          return this;
        };
        JS.getset(proto, "r", proto.getR, proto.setR, true);
        JS.getset(proto, "g", proto.getG, proto.setG, true);
        JS.getset(proto, "b", proto.getB, proto.setB, true);
        JS.getset(proto, "a", proto.getA, proto.setA, true);
        proto.toCSS = function(opt) {
          return "rgba" === opt ? "rgba(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + "," + (this.a / 255).toFixed(2) + ")" : "rgb" === opt ? "rgb(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + ")" : "#" + this.toHEX(opt);
        };
        proto.clamp = function() {
          return;
        };
        proto.fromHEX = function(hexString) {
          hexString.length < 8 && (hexString += "FF");
          var hex = parseInt(hexString.indexOf("#") > -1 ? hexString.substring(1) : hexString, 16);
          this._val = (0 & this._val | hex) >>> 0;
          return this;
        };
        proto.toHEX = function(fmt) {
          var hex = [ (0 | this.r).toString(16), (0 | this.g).toString(16), (0 | this.b).toString(16) ];
          var i = -1;
          if ("#rgb" === fmt) for (i = 0; i < hex.length; ++i) hex[i].length > 1 && (hex[i] = hex[i][0]); else if ("#rrggbb" === fmt) for (i = 0; i < hex.length; ++i) 1 === hex[i].length && (hex[i] = "0" + hex[i]);
          return hex.join("");
        };
        proto.toRGBValue = function() {
          return 16777215 & this._val;
        };
        proto.fromHSV = function(h, s, v) {
          var rgb = Color.hsv2rgb(h, s, v);
          this._val = (rgb.r << 24 >>> 0) + (rgb.g << 16) + (rgb.b << 8) + this.a;
          return this;
        };
        proto.toHSV = function() {
          return Color.rgb2hsv(this.r, this.g, this.b);
        };
        proto.fromColor = function(color) {
          if (color._val) this._val = color._val; else {
            this.r = color.r;
            this.g = color.g;
            this.b = color.b;
            this.a = color.a;
          }
        };
        return Color;
      })();
      Color.rgb2hsv = function(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var hsv = {
          h: 0,
          s: 0,
          v: 0
        };
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var delta = 0;
        hsv.v = max;
        hsv.s = max ? (max - min) / max : 0;
        if (hsv.s) {
          delta = max - min;
          hsv.h = r === max ? (g - b) / delta : g === max ? 2 + (b - r) / delta : 4 + (r - g) / delta;
          hsv.h /= 6;
          hsv.h < 0 && (hsv.h += 1);
        } else hsv.h = 0;
        return hsv;
      };
      Color.hsv2rgb = function(h, s, v) {
        var rgb = {
          r: 0,
          g: 0,
          b: 0
        };
        if (0 === s) rgb.r = rgb.g = rgb.b = v; else if (0 === v) rgb.r = rgb.g = rgb.b = 0; else {
          1 === h && (h = 0);
          h *= 6;
          s = s;
          v = v;
          var i = Math.floor(h);
          var f = h - i;
          var p = v * (1 - s);
          var q = v * (1 - s * f);
          var t = v * (1 - s * (1 - f));
          switch (i) {
           case 0:
            rgb.r = v;
            rgb.g = t;
            rgb.b = p;
            break;

           case 1:
            rgb.r = q;
            rgb.g = v;
            rgb.b = p;
            break;

           case 2:
            rgb.r = p;
            rgb.g = v;
            rgb.b = t;
            break;

           case 3:
            rgb.r = p;
            rgb.g = q;
            rgb.b = v;
            break;

           case 4:
            rgb.r = t;
            rgb.g = p;
            rgb.b = v;
            break;

           case 5:
            rgb.r = v;
            rgb.g = p;
            rgb.b = q;
          }
        }
        rgb.r *= 255;
        rgb.g *= 255;
        rgb.b *= 255;
        return rgb;
      };
      cc.Color = Color;
      cc.color = function color(r, g, b, a) {
        if ("string" === (__typeofVal = typeof r, "object" === __typeofVal ? __realTypeOfObj(r) : __typeofVal)) {
          var result = new cc.Color();
          return result.fromHEX(r);
        }
        if ("object" === (__typeofVal = typeof r, "object" === __typeofVal ? __realTypeOfObj(r) : __typeofVal)) return new cc.Color(r.r, r.g, r.b, r.a);
        return new cc.Color(r, g, b, a);
      };
      cc.colorEqual = function(color1, color2) {
        return void 0 !== color1._val && void 0 !== color2._val ? color1._val === color2._val : color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
      };
      cc.hexToColor = function(hex) {
        hex = hex.replace(/^#?/, "0x");
        var c = parseInt(hex);
        var r = c >> 16;
        var g = (65280 & c) >> 8;
        var b = 255 & c;
        return cc.color(r, g, b);
      };
      cc.colorToHex = function(color) {
        var hR = color.r.toString(16), hG = color.g.toString(16), hB = color.b.toString(16);
        return "#" + (color.r < 16 ? "0" + hR : hR) + (color.g < 16 ? "0" + hG : hG) + (color.b < 16 ? "0" + hB : hB);
      };
      module.exports = cc.Color;
    }), {
      "../platform/CCClass": 92,
      "../platform/js": 107,
      "./CCValueType": 128
    } ],
    123: [ (function(require, module, exports) {
      var POINT_EPSILON = parseFloat("1.192092896e-07F");
      cc.pNeg = function(point) {
        return cc.p(-point.x, -point.y);
      };
      cc.pAdd = function(v1, v2) {
        return cc.p(v1.x + v2.x, v1.y + v2.y);
      };
      cc.pSub = function(v1, v2) {
        return cc.p(v1.x - v2.x, v1.y - v2.y);
      };
      cc.pMult = function(point, floatVar) {
        return cc.p(point.x * floatVar, point.y * floatVar);
      };
      cc.pMidpoint = function(v1, v2) {
        return cc.pMult(cc.pAdd(v1, v2), .5);
      };
      cc.pDot = function(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
      };
      cc.pCross = function(v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
      };
      cc.pPerp = function(point) {
        return cc.p(-point.y, point.x);
      };
      cc.pRPerp = function(point) {
        return cc.p(point.y, -point.x);
      };
      cc.pProject = function(v1, v2) {
        return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2));
      };
      cc.pLengthSQ = function(v) {
        return cc.pDot(v, v);
      };
      cc.pDistanceSQ = function(point1, point2) {
        return cc.pLengthSQ(cc.pSub(point1, point2));
      };
      cc.pLength = function(v) {
        return Math.sqrt(cc.pLengthSQ(v));
      };
      cc.pDistance = function(v1, v2) {
        return cc.pLength(cc.pSub(v1, v2));
      };
      cc.pNormalize = function(v) {
        var n = cc.pLength(v);
        return 0 === n ? cc.p(v) : cc.pMult(v, 1 / n);
      };
      cc.pForAngle = function(a) {
        return cc.p(Math.cos(a), Math.sin(a));
      };
      cc.pToAngle = function(v) {
        return Math.atan2(v.y, v.x);
      };
      cc.clampf = function(value, min_inclusive, max_inclusive) {
        if (min_inclusive > max_inclusive) {
          var temp = min_inclusive;
          min_inclusive = max_inclusive;
          max_inclusive = temp;
        }
        return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
      };
      cc.clamp01 = function(value) {
        return value < 0 ? 0 : value < 1 ? value : 1;
      };
      cc.pClamp = function(p, min_inclusive, max_inclusive) {
        return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y));
      };
      cc.pFromSize = function(s) {
        return cc.p(s.width, s.height);
      };
      cc.pCompOp = function(p, opFunc) {
        return cc.p(opFunc(p.x), opFunc(p.y));
      };
      cc.pLerp = function(a, b, alpha) {
        return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
      };
      cc.pFuzzyEqual = function(a, b, variance) {
        if (a.x - variance <= b.x && b.x <= a.x + variance && a.y - variance <= b.y && b.y <= a.y + variance) return true;
        return false;
      };
      cc.pCompMult = function(a, b) {
        return cc.p(a.x * b.x, a.y * b.y);
      };
      cc.pAngleSigned = function(a, b) {
        var a2 = cc.pNormalize(a);
        var b2 = cc.pNormalize(b);
        var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
        if (Math.abs(angle) < POINT_EPSILON) return 0;
        return angle;
      };
      cc.pAngle = function(a, b) {
        var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
        if (Math.abs(angle) < POINT_EPSILON) return 0;
        return angle;
      };
      cc.pRotateByAngle = function(v, pivot, angle) {
        var r = cc.pSub(v, pivot);
        var cosa = Math.cos(angle), sina = Math.sin(angle);
        var t = r.x;
        r.x = t * cosa - r.y * sina + pivot.x;
        r.y = t * sina + r.y * cosa + pivot.y;
        return r;
      };
      cc.pLineIntersect = function(A, B, C, D, retP) {
        if (A.x === B.x && A.y === B.y || C.x === D.x && C.y === D.y) return false;
        var BAx = B.x - A.x;
        var BAy = B.y - A.y;
        var DCx = D.x - C.x;
        var DCy = D.y - C.y;
        var ACx = A.x - C.x;
        var ACy = A.y - C.y;
        var denom = DCy * BAx - DCx * BAy;
        retP.x = DCx * ACy - DCy * ACx;
        retP.y = BAx * ACy - BAy * ACx;
        if (0 === denom) {
          if (0 === retP.x || 0 === retP.y) return true;
          return false;
        }
        retP.x = retP.x / denom;
        retP.y = retP.y / denom;
        return true;
      };
      cc.pSegmentIntersect = function(A, B, C, D) {
        var retP = cc.p(0, 0);
        if (cc.pLineIntersect(A, B, C, D, retP) && retP.x >= 0 && retP.x <= 1 && retP.y >= 0 && retP.y <= 1) return true;
        return false;
      };
      cc.pIntersectPoint = function(A, B, C, D) {
        var retP = cc.p(0, 0);
        if (cc.pLineIntersect(A, B, C, D, retP)) {
          var P = cc.p(0, 0);
          P.x = A.x + retP.x * (B.x - A.x);
          P.y = A.y + retP.x * (B.y - A.y);
          return P;
        }
        return cc.p(0, 0);
      };
      cc.pSameAs = function(A, B) {
        if (null != A && null != B) return A.x === B.x && A.y === B.y;
        return false;
      };
      cc.pZeroIn = function(v) {
        v.x = 0;
        v.y = 0;
      };
      cc.pIn = function(v1, v2) {
        v1.x = v2.x;
        v1.y = v2.y;
      };
      cc.pMultIn = function(point, floatVar) {
        point.x *= floatVar;
        point.y *= floatVar;
      };
      cc.pSubIn = function(v1, v2) {
        v1.x -= v2.x;
        v1.y -= v2.y;
      };
      cc.pAddIn = function(v1, v2) {
        v1.x += v2.x;
        v1.y += v2.y;
      };
      cc.pNormalizeIn = function(v) {
        cc.pMultIn(v, 1 / Math.sqrt(v.x * v.x + v.y * v.y));
      };
    }), {} ],
    124: [ (function(require, module, exports) {
      var ValueType = require("./CCValueType");
      var JS = require("../platform/js");
      function Rect(x, y, w, h) {
        if (x && "object" === (__typeofVal = typeof x, "object" === __typeofVal ? __realTypeOfObj(x) : __typeofVal)) {
          y = x.y;
          w = x.width;
          h = x.height;
          x = x.x;
        }
        this.x = x || 0;
        this.y = y || 0;
        this.width = w || 0;
        this.height = h || 0;
      }
      JS.extend(Rect, ValueType);
      require("../platform/CCClass").fastDefine("cc.Rect", Rect, {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      Rect.fromMinMax = function(v1, v2) {
        var min_x = Math.min(v1.x, v2.x);
        var min_y = Math.min(v1.y, v2.y);
        var max_x = Math.max(v1.x, v2.x);
        var max_y = Math.max(v1.y, v2.y);
        return new Rect(min_x, min_y, max_x - min_x, max_y - min_y);
      };
      Rect.contain = function _Contain(a, b) {
        if (a.x < b.x && a.x + a.width > b.x + b.width && a.y < b.y && a.y + a.height > b.y + b.height) return 1;
        if (b.x < a.x && b.x + b.width > a.x + a.width && b.y < a.y && b.y + b.height > a.y + a.height) return -1;
        return 0;
      };
      var proto = Rect.prototype;
      proto.clone = function() {
        return new Rect(this.x, this.y, this.width, this.height);
      };
      proto.equals = function(other) {
        return other && this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
      };
      proto.lerp = function(to, ratio, out) {
        out = out || new Rect();
        var x = this.x;
        var y = this.y;
        var width = this.width;
        var height = this.height;
        out.x = x + (to.x - x) * ratio;
        out.y = y + (to.y - y) * ratio;
        out.width = width + (to.width - width) * ratio;
        out.height = height + (to.height - height) * ratio;
        return out;
      };
      proto.toString = function() {
        return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
      };
      JS.getset(proto, "xMin", (function() {
        return this.x;
      }), (function(value) {
        this.width += this.x - value;
        this.x = value;
      }));
      JS.getset(proto, "yMin", (function() {
        return this.y;
      }), (function(value) {
        this.height += this.y - value;
        this.y = value;
      }));
      JS.getset(proto, "xMax", (function() {
        return this.x + this.width;
      }), (function(value) {
        this.width = value - this.x;
      }));
      JS.getset(proto, "yMax", (function() {
        return this.y + this.height;
      }), (function(value) {
        this.height = value - this.y;
      }));
      JS.getset(proto, "center", (function() {
        return new cc.Vec2(this.x + .5 * this.width, this.y + .5 * this.height);
      }), (function(value) {
        this.x = value.x - .5 * this.width;
        this.y = value.y - .5 * this.height;
      }));
      JS.getset(proto, "origin", (function() {
        return new cc.Vec2(this.x, this.y);
      }), (function(value) {
        this.x = value.x;
        this.y = value.y;
      }));
      JS.getset(proto, "size", (function() {
        return new cc.Size(this.width, this.height);
      }), (function(value) {
        this.width = value.width;
        this.height = value.height;
      }));
      proto.intersects = function(rect) {
        return cc.rectIntersectsRect(this, rect);
      };
      proto.contains = function(point) {
        return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
      };
      proto.containsRect = function(rect) {
        return this.x <= rect.x && this.x + this.width >= rect.x + rect.width && this.y <= rect.y && this.y + this.height >= rect.y + rect.height;
      };
      cc.Rect = Rect;
      cc.rect = function rect(x, y, w, h) {
        return new Rect(x, y, w, h);
      };
      cc.rectEqualToRect = function(rect1, rect2) {
        return rect1 && rect2 && rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
      };
      cc._rectEqualToZero = function(rect) {
        return rect && 0 === rect.x && 0 === rect.y && 0 === rect.width && 0 === rect.height;
      };
      cc.rectContainsRect = function(rect1, rect2) {
        if (!rect1 || !rect2) return false;
        return !(rect1.x >= rect2.x || rect1.y >= rect2.y || rect1.x + rect1.width <= rect2.x + rect2.width || rect1.y + rect1.height <= rect2.y + rect2.height);
      };
      cc.rectGetMaxX = function(rect) {
        return rect.x + rect.width;
      };
      cc.rectGetMidX = function(rect) {
        return rect.x + rect.width / 2;
      };
      cc.rectGetMinX = function(rect) {
        return rect.x;
      };
      cc.rectGetMaxY = function(rect) {
        return rect.y + rect.height;
      };
      cc.rectGetMidY = function(rect) {
        return rect.y + rect.height / 2;
      };
      cc.rectGetMinY = function(rect) {
        return rect.y;
      };
      cc.rectContainsPoint = function(rect, point) {
        return point.x >= cc.rectGetMinX(rect) && point.x <= cc.rectGetMaxX(rect) && point.y >= cc.rectGetMinY(rect) && point.y <= cc.rectGetMaxY(rect);
      };
      cc.rectIntersectsRect = function(ra, rb) {
        var maxax = ra.x + ra.width, maxay = ra.y + ra.height, maxbx = rb.x + rb.width, maxby = rb.y + rb.height;
        return !(maxax < rb.x || maxbx < ra.x || maxay < rb.y || maxby < ra.y);
      };
      cc.rectOverlapsRect = function(rectA, rectB) {
        return !(rectA.x + rectA.width < rectB.x || rectB.x + rectB.width < rectA.x || rectA.y + rectA.height < rectB.y || rectB.y + rectB.height < rectA.y);
      };
      cc.rectUnion = function(rectA, rectB) {
        var rect = cc.rect(0, 0, 0, 0);
        rect.x = Math.min(rectA.x, rectB.x);
        rect.y = Math.min(rectA.y, rectB.y);
        rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
        rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
        return rect;
      };
      cc.rectIntersection = function(rectA, rectB) {
        var intersection = cc.rect(Math.max(cc.rectGetMinX(rectA), cc.rectGetMinX(rectB)), Math.max(cc.rectGetMinY(rectA), cc.rectGetMinY(rectB)), 0, 0);
        intersection.width = Math.min(cc.rectGetMaxX(rectA), cc.rectGetMaxX(rectB)) - cc.rectGetMinX(intersection);
        intersection.height = Math.min(cc.rectGetMaxY(rectA), cc.rectGetMaxY(rectB)) - cc.rectGetMinY(intersection);
        return intersection;
      };
      module.exports = cc.Rect;
    }), {
      "../platform/CCClass": 92,
      "../platform/js": 107,
      "./CCValueType": 128
    } ],
    125: [ (function(require, module, exports) {
      var ValueType = require("./CCValueType");
      var JS = require("../platform/js");
      function Size(width, height) {
        if (width && "object" === (__typeofVal = typeof width, "object" === __typeofVal ? __realTypeOfObj(width) : __typeofVal)) {
          height = width.height;
          width = width.width;
        }
        this.width = width || 0;
        this.height = height || 0;
      }
      JS.extend(Size, ValueType);
      require("../platform/CCClass").fastDefine("cc.Size", Size, {
        width: 0,
        height: 0
      });
      JS.get(Size, "ZERO", (function() {
        return new Size(0, 0);
      }));
      var proto = Size.prototype;
      proto.clone = function() {
        return new Size(this.width, this.height);
      };
      proto.equals = function(other) {
        return other && this.width === other.width && this.height === other.height;
      };
      proto.lerp = function(to, ratio, out) {
        out = out || new Size();
        var width = this.width;
        var height = this.height;
        out.width = width + (to.width - width) * ratio;
        out.height = height + (to.height - height) * ratio;
        return out;
      };
      proto.toString = function() {
        return "(" + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
      };
      cc.size = function(w, h) {
        return new Size(w, h);
      };
      cc.sizeEqualToSize = function(size1, size2) {
        return size1 && size2 && size1.width === size2.width && size1.height === size2.height;
      };
      cc.Size = module.exports = Size;
    }), {
      "../platform/CCClass": 92,
      "../platform/js": 107,
      "./CCValueType": 128
    } ],
    126: [ (function(require, module, exports) {
      cc.Acceleration = function(x, y, z, timestamp) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.timestamp = timestamp || 0;
      };
      cc.BlendFunc = function(src1, dst1) {
        this.src = src1;
        this.dst = dst1;
      };
      var BlendFactor = cc.Enum({
        ONE: 1,
        ZERO: 0,
        SRC_ALPHA: 770,
        SRC_COLOR: 768,
        DST_ALPHA: 772,
        DST_COLOR: 774,
        ONE_MINUS_SRC_ALPHA: 771,
        ONE_MINUS_SRC_COLOR: 769,
        ONE_MINUS_DST_ALPHA: 773,
        ONE_MINUS_DST_COLOR: 775
      });
      cc.BlendFunc._disable = function() {
        return new cc.BlendFunc(BlendFactor.ONE, BlendFactor.ZERO);
      };
      cc.BlendFunc._alphaPremultiplied = function() {
        return new cc.BlendFunc(BlendFactor.ONE, BlendFactor.ONE_MINUS_SRC_ALPHA);
      };
      cc.BlendFunc._alphaNonPremultiplied = function() {
        return new cc.BlendFunc(BlendFactor.SRC_ALPHA, BlendFactor.ONE_MINUS_SRC_ALPHA);
      };
      cc.BlendFunc._additive = function() {
        return new cc.BlendFunc(BlendFactor.SRC_ALPHA, BlendFactor.ONE);
      };
      cc.BlendFunc.BlendFactor = BlendFactor;
      cc.BlendFunc.DISABLE;
      cc.js.get(cc.BlendFunc, "DISABLE", cc.BlendFunc._disable);
      cc.BlendFunc.ALPHA_PREMULTIPLIED;
      cc.js.get(cc.BlendFunc, "ALPHA_PREMULTIPLIED", cc.BlendFunc._alphaPremultiplied);
      cc.BlendFunc.ALPHA_NON_PREMULTIPLIED;
      cc.js.get(cc.BlendFunc, "ALPHA_NON_PREMULTIPLIED", cc.BlendFunc._alphaNonPremultiplied);
      cc.BlendFunc.ADDITIVE;
      cc.js.get(cc.BlendFunc, "ADDITIVE", cc.BlendFunc._additive);
      cc.blendFuncDisable = cc.BlendFunc._disable;
      cc.TextAlignment = cc.Enum({
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2
      });
      cc.VerticalTextAlignment = cc.Enum({
        TOP: 0,
        CENTER: 1,
        BOTTOM: 2
      });
    }), {} ],
    127: [ (function(require, module, exports) {
      cc.WebGLColor = function(r, g, b, a, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.WebGLColor.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._view = new Uint8Array(locArrayBuffer, locOffset, 4);
        this._view[0] = r || 0;
        this._view[1] = g || 0;
        this._view[2] = b || 0;
        if ("number" === (__typeofVal = typeof a, "object" === __typeofVal ? __realTypeOfObj(a) : __typeofVal)) this._view[3] = a; else {
          this._view[3] = 255;
          this.a_undefined = true;
        }
      };
      cc.WebGLColor.BYTES_PER_ELEMENT = 4;
      var _p = cc.WebGLColor.prototype;
      _p._getR = function() {
        return this._view[0];
      };
      _p._setR = function(value) {
        this._view[0] = value < 0 ? 0 : value;
      };
      _p._getG = function() {
        return this._view[1];
      };
      _p._setG = function(value) {
        this._view[1] = value < 0 ? 0 : value;
      };
      _p._getB = function() {
        return this._view[2];
      };
      _p._setB = function(value) {
        this._view[2] = value < 0 ? 0 : value;
      };
      _p._getA = function() {
        return this._view[3];
      };
      _p._setA = function(value) {
        this._view[3] = value < 0 ? 0 : value;
      };
      _p.r;
      cc.js.getset(_p, "r", _p._getR, _p._setR);
      _p.g;
      cc.js.getset(_p, "g", _p._getG, _p._setG);
      _p.b;
      cc.js.getset(_p, "b", _p._getB, _p._setB);
      _p.a;
      cc.js.getset(_p, "a", _p._getA, _p._setA);
      cc.Vertex2F = function(x, y, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        this._view = new Float32Array(this._arrayBuffer, this._offset, 2);
        this._view[0] = x || 0;
        this._view[1] = y || 0;
      };
      cc.Vertex2F.BYTES_PER_ELEMENT = 8;
      var _p = cc.Vertex2F.prototype;
      _p._getX = function() {
        return this._view[0];
      };
      _p._setX = function(xValue) {
        this._view[0] = xValue;
      };
      _p._getY = function() {
        return this._view[1];
      };
      _p._setY = function(yValue) {
        this._view[1] = yValue;
      };
      cc.js.getset(_p, "x", _p._getX, _p._setX);
      cc.js.getset(_p, "y", _p._getY, _p._setY);
      cc.Vertex3F = function(x, y, z, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._view = new Float32Array(locArrayBuffer, locOffset, 3);
        this._view[0] = x || 0;
        this._view[1] = y || 0;
        this._view[2] = z || 0;
      };
      cc.Vertex3F.BYTES_PER_ELEMENT = 12;
      _p = cc.Vertex3F.prototype;
      _p._getX = function() {
        return this._view[0];
      };
      _p._setX = function(xValue) {
        this._view[0] = xValue;
      };
      _p._getY = function() {
        return this._view[1];
      };
      _p._setY = function(yValue) {
        this._view[1] = yValue;
      };
      _p._getZ = function() {
        return this._view[2];
      };
      _p._setZ = function(zValue) {
        this._view[2] = zValue;
      };
      cc.js.getset(_p, "x", _p._getX, _p._setX);
      cc.js.getset(_p, "y", _p._getY, _p._setY);
      cc.js.getset(_p, "z", _p._getZ, _p._setZ);
      cc.Tex2F = function(u, v, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        this._view = new Float32Array(this._arrayBuffer, this._offset, 2);
        this._view[0] = u || 0;
        this._view[1] = v || 0;
      };
      cc.Tex2F.BYTES_PER_ELEMENT = 8;
      _p = cc.Tex2F.prototype;
      _p._getU = function() {
        return this._view[0];
      };
      _p._setU = function(xValue) {
        this._view[0] = xValue;
      };
      _p._getV = function() {
        return this._view[1];
      };
      _p._setV = function(yValue) {
        this._view[1] = yValue;
      };
      cc.js.getset(_p, "u", _p._getU, _p._setU);
      cc.js.getset(_p, "v", _p._getV, _p._setV);
      cc.Quad2 = function(tl, tr, bl, br, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Quad2.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex2F.BYTES_PER_ELEMENT;
        this._tl = tl ? new cc.Vertex2F(tl.x, tl.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._tr = tr ? new cc.Vertex2F(tr.x, tr.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._bl = bl ? new cc.Vertex2F(bl.x, bl.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._br = br ? new cc.Vertex2F(br.x, br.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
      };
      cc.Quad2.BYTES_PER_ELEMENT = 32;
      _p = cc.Quad2.prototype;
      _p._getTL = function() {
        return this._tl;
      };
      _p._setTL = function(tlValue) {
        this._tl._view[0] = tlValue.x;
        this._tl._view[1] = tlValue.y;
      };
      _p._getTR = function() {
        return this._tr;
      };
      _p._setTR = function(trValue) {
        this._tr._view[0] = trValue.x;
        this._tr._view[1] = trValue.y;
      };
      _p._getBL = function() {
        return this._bl;
      };
      _p._setBL = function(blValue) {
        this._bl._view[0] = blValue.x;
        this._bl._view[1] = blValue.y;
      };
      _p._getBR = function() {
        return this._br;
      };
      _p._setBR = function(brValue) {
        this._br._view[0] = brValue.x;
        this._br._view[1] = brValue.y;
      };
      cc.js.getset(_p, "tl", _p._getTL, _p._setTL);
      cc.js.getset(_p, "tr", _p._getTR, _p._setTR);
      cc.js.getset(_p, "bl", _p._getBL, _p._setBL);
      cc.js.getset(_p, "br", _p._getBR, _p._setBR);
      cc.Quad3 = function(bl1, br1, tl1, tr1, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Quad3.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex3F.BYTES_PER_ELEMENT;
        this.bl = bl ? new cc.Vertex3F(bl.x, bl.y, bl.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this.br = br ? new cc.Vertex3F(br.x, br.y, br.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this.tl = tl ? new cc.Vertex3F(tl.x, tl.y, tl.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this.tr = tr ? new cc.Vertex3F(tr.x, tr.y, tr.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
      };
      cc.Quad3.BYTES_PER_ELEMENT = 48;
      cc.V3F_C4B_T2F = function(vertices, colors, texCoords, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._vertices = vertices ? new cc.Vertex3F(vertices.x, vertices.y, vertices.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
        locOffset += cc.Vertex3F.BYTES_PER_ELEMENT;
        this._colors = colors ? new cc.WebGLColor(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset) : new cc.WebGLColor(0, 0, 0, 0, locArrayBuffer, locOffset);
        locOffset += cc.WebGLColor.BYTES_PER_ELEMENT;
        this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset) : new cc.Tex2F(0, 0, locArrayBuffer, locOffset);
      };
      cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24;
      _p = cc.V3F_C4B_T2F.prototype;
      _p._getVertices = function() {
        return this._vertices;
      };
      _p._setVertices = function(verticesValue) {
        var locVertices = this._vertices;
        locVertices._view[0] = verticesValue.x;
        locVertices._view[1] = verticesValue.y;
        locVertices._view[2] = verticesValue.z;
      };
      _p._getColor = function() {
        return this._colors;
      };
      _p._setColor = function(colorValue) {
        var locColors = this._colors;
        locColors._view[0] = colorValue.r;
        locColors._view[1] = colorValue.g;
        locColors._view[2] = colorValue.b;
        locColors._view[3] = colorValue.a;
      };
      _p._getTexCoords = function() {
        return this._texCoords;
      };
      _p._setTexCoords = function(texValue) {
        this._texCoords._view[0] = texValue.u;
        this._texCoords._view[1] = texValue.v;
      };
      cc.js.getset(_p, "vertices", _p._getVertices, _p._setVertices);
      cc.js.getset(_p, "colors", _p._getColor, _p._setColor);
      cc.js.getset(_p, "texCoords", _p._getTexCoords, _p._setTexCoords);
      cc.V3F_C4B_T2F_Quad = function(tl, bl, tr, br, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
        this._tl = tl ? new cc.V3F_C4B_T2F(tl.vertices, tl.colors, tl.texCoords, locArrayBuffer, locOffset) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._bl = bl ? new cc.V3F_C4B_T2F(bl.vertices, bl.colors, bl.texCoords, locArrayBuffer, locOffset) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._tr = tr ? new cc.V3F_C4B_T2F(tr.vertices, tr.colors, tr.texCoords, locArrayBuffer, locOffset) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._br = br ? new cc.V3F_C4B_T2F(br.vertices, br.colors, br.texCoords, locArrayBuffer, locOffset) : new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
      };
      cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96;
      _p = cc.V3F_C4B_T2F_Quad.prototype;
      _p._getTL = function() {
        return this._tl;
      };
      _p._setTL = function(tlValue) {
        var locTl = this._tl;
        locTl.vertices = tlValue.vertices;
        locTl.colors = tlValue.colors;
        locTl.texCoords = tlValue.texCoords;
      };
      _p._getBL = function() {
        return this._bl;
      };
      _p._setBL = function(blValue) {
        var locBl = this._bl;
        locBl.vertices = blValue.vertices;
        locBl.colors = blValue.colors;
        locBl.texCoords = blValue.texCoords;
      };
      _p._getTR = function() {
        return this._tr;
      };
      _p._setTR = function(trValue) {
        var locTr = this._tr;
        locTr.vertices = trValue.vertices;
        locTr.colors = trValue.colors;
        locTr.texCoords = trValue.texCoords;
      };
      _p._getBR = function() {
        return this._br;
      };
      _p._setBR = function(brValue) {
        var locBr = this._br;
        locBr.vertices = brValue.vertices;
        locBr.colors = brValue.colors;
        locBr.texCoords = brValue.texCoords;
      };
      _p._getArrayBuffer = function() {
        return this._arrayBuffer;
      };
      cc.js.getset(_p, "tl", _p._getTL, _p._setTL);
      cc.js.getset(_p, "tr", _p._getTR, _p._setTR);
      cc.js.getset(_p, "bl", _p._getBL, _p._setBL);
      cc.js.getset(_p, "br", _p._getBR, _p._setBR);
      cc.js.get(_p, "arrayBuffer", _p._getArrayBuffer);
      cc.V3F_C4B_T2F_QuadZero = function() {
        return new cc.V3F_C4B_T2F_Quad();
      };
      cc.V3F_C4B_T2F_QuadCopy = function(sourceQuad) {
        if (!sourceQuad) return cc.V3F_C4B_T2F_QuadZero();
        var srcTL = sourceQuad.tl, srcBL = sourceQuad.bl, srcTR = sourceQuad.tr, srcBR = sourceQuad.br;
        return {
          tl: {
            vertices: {
              x: srcTL.vertices.x,
              y: srcTL.vertices.y,
              z: srcTL.vertices.z
            },
            colors: {
              r: srcTL.colors.r,
              g: srcTL.colors.g,
              b: srcTL.colors.b,
              a: srcTL.colors.a
            },
            texCoords: {
              u: srcTL.texCoords.u,
              v: srcTL.texCoords.v
            }
          },
          bl: {
            vertices: {
              x: srcBL.vertices.x,
              y: srcBL.vertices.y,
              z: srcBL.vertices.z
            },
            colors: {
              r: srcBL.colors.r,
              g: srcBL.colors.g,
              b: srcBL.colors.b,
              a: srcBL.colors.a
            },
            texCoords: {
              u: srcBL.texCoords.u,
              v: srcBL.texCoords.v
            }
          },
          tr: {
            vertices: {
              x: srcTR.vertices.x,
              y: srcTR.vertices.y,
              z: srcTR.vertices.z
            },
            colors: {
              r: srcTR.colors.r,
              g: srcTR.colors.g,
              b: srcTR.colors.b,
              a: srcTR.colors.a
            },
            texCoords: {
              u: srcTR.texCoords.u,
              v: srcTR.texCoords.v
            }
          },
          br: {
            vertices: {
              x: srcBR.vertices.x,
              y: srcBR.vertices.y,
              z: srcBR.vertices.z
            },
            colors: {
              r: srcBR.colors.r,
              g: srcBR.colors.g,
              b: srcBR.colors.b,
              a: srcBR.colors.a
            },
            texCoords: {
              u: srcBR.texCoords.u,
              v: srcBR.texCoords.v
            }
          }
        };
      };
      cc.V3F_C4B_T2F_QuadsCopy = function(sourceQuads) {
        if (!sourceQuads) return [];
        var retArr = [];
        for (var i = 0; i < sourceQuads.length; i++) retArr.push(cc.V3F_C4B_T2F_QuadCopy(sourceQuads[i]));
        return retArr;
      };
      cc.V2F_C4B_T2F = function(vertices, colors, texCoords, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._vertices = vertices ? new cc.Vertex2F(vertices.x, vertices.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
        locOffset += cc.Vertex2F.BYTES_PER_ELEMENT;
        this._colors = colors ? new cc.WebGLColor(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset) : new cc.WebGLColor(0, 0, 0, 0, locArrayBuffer, locOffset);
        locOffset += cc.WebGLColor.BYTES_PER_ELEMENT;
        this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset) : new cc.Tex2F(0, 0, locArrayBuffer, locOffset);
      };
      cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20;
      _p = cc.V2F_C4B_T2F.prototype;
      _p._getVertices = function() {
        return this._vertices;
      };
      _p._setVertices = function(verticesValue) {
        this._vertices._view[0] = verticesValue.x;
        this._vertices._view[1] = verticesValue.y;
      };
      _p._getColor = function() {
        return this._colors;
      };
      _p._setColor = function(colorValue) {
        var locColors = this._colors;
        locColors._view[0] = colorValue.r;
        locColors._view[1] = colorValue.g;
        locColors._view[2] = colorValue.b;
        locColors._view[3] = colorValue.a;
      };
      _p._getTexCoords = function() {
        return this._texCoords;
      };
      _p._setTexCoords = function(texValue) {
        this._texCoords._view[0] = texValue.u;
        this._texCoords._view[1] = texValue.v;
      };
      cc.js.getset(_p, "vertices", _p._getVertices, _p._setVertices);
      cc.js.getset(_p, "colors", _p._getColor, _p._setColor);
      cc.js.getset(_p, "texCoords", _p._getTexCoords, _p._setTexCoords);
      cc.V2F_C4B_T2F_Triangle = function(a, b, c, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        this._a = a ? new cc.V2F_C4B_T2F(a.vertices, a.colors, a.texCoords, locArrayBuffer, locOffset) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._b = b ? new cc.V2F_C4B_T2F(b.vertices, b.colors, b.texCoords, locArrayBuffer, locOffset) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
        locOffset += locElementLen;
        this._c = c ? new cc.V2F_C4B_T2F(c.vertices, c.colors, c.texCoords, locArrayBuffer, locOffset) : new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
      };
      cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60;
      _p = cc.V2F_C4B_T2F_Triangle.prototype;
      _p._getA = function() {
        return this._a;
      };
      _p._setA = function(aValue) {
        var locA = this._a;
        locA.vertices = aValue.vertices;
        locA.colors = aValue.colors;
        locA.texCoords = aValue.texCoords;
      };
      _p._getB = function() {
        return this._b;
      };
      _p._setB = function(bValue) {
        var locB = this._b;
        locB.vertices = bValue.vertices;
        locB.colors = bValue.colors;
        locB.texCoords = bValue.texCoords;
      };
      _p._getC = function() {
        return this._c;
      };
      _p._setC = function(cValue) {
        var locC = this._c;
        locC.vertices = cValue.vertices;
        locC.colors = cValue.colors;
        locC.texCoords = cValue.texCoords;
      };
      cc.js.getset(_p, "a", _p._getA, _p._setA);
      cc.js.getset(_p, "b", _p._getB, _p._setB);
      cc.js.getset(_p, "c", _p._getC, _p._setC);
    }), {} ],
    128: [ (function(require, module, exports) {
      var JS = require("../platform/js");
      function ValueType() {}
      JS.setClassName("cc.ValueType", ValueType);
      var proto = ValueType.prototype;
      false;
      proto.toString = function() {
        return "" + {};
      };
      cc.ValueType = ValueType;
      module.exports = ValueType;
    }), {
      "../platform/js": 107
    } ],
    129: [ (function(require, module, exports) {
      var ValueType = require("./CCValueType");
      var JS = require("../platform/js");
      var CCClass = require("../platform/CCClass");
      function Vec2(x, y) {
        if (x && "object" === (__typeofVal = typeof x, "object" === __typeofVal ? __realTypeOfObj(x) : __typeofVal)) {
          y = x.y;
          x = x.x;
        }
        this.x = x || 0;
        this.y = y || 0;
      }
      JS.extend(Vec2, ValueType);
      CCClass.fastDefine("cc.Vec2", Vec2, {
        x: 0,
        y: 0
      });
      var proto = Vec2.prototype;
      proto.clone = function() {
        return new Vec2(this.x, this.y);
      };
      proto.set = function(newValue) {
        this.x = newValue.x;
        this.y = newValue.y;
        return this;
      };
      proto.equals = function(other) {
        return other && this.x === other.x && this.y === other.y;
      };
      proto.toString = function() {
        return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
      };
      proto.lerp = function(to, ratio, out) {
        out = out || new Vec2();
        var x = this.x;
        var y = this.y;
        out.x = x + (to.x - x) * ratio;
        out.y = y + (to.y - y) * ratio;
        return out;
      };
      proto.addSelf = function(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
      };
      proto.add = function(vector, out) {
        out = out || new Vec2();
        out.x = this.x + vector.x;
        out.y = this.y + vector.y;
        return out;
      };
      proto.subSelf = function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
      };
      proto.sub = function(vector, out) {
        out = out || new Vec2();
        out.x = this.x - vector.x;
        out.y = this.y - vector.y;
        return out;
      };
      proto.mulSelf = function(num) {
        this.x *= num;
        this.y *= num;
        return this;
      };
      proto.mul = function(num, out) {
        out = out || new Vec2();
        out.x = this.x * num;
        out.y = this.y * num;
        return out;
      };
      proto.scaleSelf = function(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
      };
      proto.scale = function(vector, out) {
        out = out || new Vec2();
        out.x = this.x * vector.x;
        out.y = this.y * vector.y;
        return out;
      };
      proto.divSelf = function(num) {
        this.x /= num;
        this.y /= num;
        return this;
      };
      proto.div = function(num, out) {
        out = out || new Vec2();
        out.x = this.x / num;
        out.y = this.y / num;
        return out;
      };
      proto.negSelf = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
      };
      proto.neg = function(out) {
        out = out || new Vec2();
        out.x = -this.x;
        out.y = -this.y;
        return out;
      };
      proto.dot = function(vector) {
        return this.x * vector.x + this.y * vector.y;
      };
      proto.cross = function(vector) {
        return this.y * vector.x - this.x * vector.y;
      };
      proto.mag = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };
      proto.magSqr = function() {
        return this.x * this.x + this.y * this.y;
      };
      proto.normalizeSelf = function() {
        var magSqr = this.x * this.x + this.y * this.y;
        if (1 === magSqr) return this;
        if (0 === magSqr) {
          console.warn("Can't normalize zero vector");
          return this;
        }
        var invsqrt = 1 / Math.sqrt(magSqr);
        this.x *= invsqrt;
        this.y *= invsqrt;
        return this;
      };
      proto.normalize = function(out) {
        out = out || new Vec2();
        out.x = this.x;
        out.y = this.y;
        out.normalizeSelf();
        return out;
      };
      proto.angle = function(vector) {
        var magSqr1 = this.magSqr();
        var magSqr2 = vector.magSqr();
        if (0 === magSqr1 || 0 === magSqr2) {
          console.warn("Can't get angle between zero vector");
          return 0;
        }
        var dot = this.dot(vector);
        var theta = dot / Math.sqrt(magSqr1 * magSqr2);
        theta = cc.clampf(theta, -1, 1);
        return Math.acos(theta);
      };
      proto.signAngle = function(vector) {
        return Math.atan2(this.y, this.x) - Math.atan2(vector.y, vector.x);
      };
      proto.rotate = function(radians, out) {
        out = out || new Vec2();
        out.x = this.x;
        out.y = this.y;
        return out.rotateSelf(radians);
      };
      proto.rotateSelf = function(radians) {
        var sin = Math.sin(radians);
        var cos = Math.cos(radians);
        var x = this.x;
        this.x = cos * x - sin * this.y;
        this.y = sin * x + cos * this.y;
        return this;
      };
      JS.get(Vec2, "ONE", (function() {
        return new Vec2(1, 1);
      }));
      JS.get(Vec2, "ZERO", (function() {
        return new Vec2(0, 0);
      }));
      JS.get(Vec2, "UP", (function() {
        return new Vec2(0, 1);
      }));
      JS.get(Vec2, "RIGHT", (function() {
        return new Vec2(1, 0);
      }));
      cc.Vec2 = Vec2;
      cc.v2 = function v2(x, y) {
        return new Vec2(x, y);
      };
      cc.p = cc.v2;
      cc.pointEqualToPoint = function(point1, point2) {
        return point1 && point2 && point1.x === point2.x && point1.y === point2.y;
      };
      module.exports = cc.Vec2;
    }), {
      "../platform/CCClass": 92,
      "../platform/js": 107,
      "./CCValueType": 128
    } ],
    130: [ (function(require, module, exports) {
      require("./CCValueType");
      require("./CCVec2");
      require("./CCPointExtension");
      require("./CCSize");
      require("./CCRect");
      require("./CCColor");
      require("./CCTypes");
      require("./CCAffineTransform");
      require("./CCTypesWebGL");
    }), {
      "./CCAffineTransform": 121,
      "./CCColor": 122,
      "./CCPointExtension": 123,
      "./CCRect": 124,
      "./CCSize": 125,
      "./CCTypes": 126,
      "./CCTypesWebGL": 127,
      "./CCValueType": 128,
      "./CCVec2": 129
    } ],
    131: [ (function(require, module, exports) {
      var js = cc.js;
      var deprecateEnum;
      var markAsRemoved;
      var provideClearError;
      var shouldNotUseNodeProp;
      var ERR;
      false;
    }), {} ],
    132: [ (function(require, module, exports) {
      require("./cocos2d/core");
      require("./cocos2d/animation");
      false;
      require("./cocos2d/particle/CCParticleSystem");
      require("./cocos2d/tilemap/CCTiledMap");
      require("./cocos2d/motion-streak/CCMotionStreak");
      require("./cocos2d/core/components/CCStudioComponent");
      require("./extensions/ccpool/CCNodePool");
      require("./extensions/ccpool/CCPool");
      false;
      require("./extensions/spine");
      require("./extensions/dragonbones");
      true;
      require("./cocos2d/deprecated");
    }), {
      "./cocos2d/actions": 1,
      "./cocos2d/animation": 11,
      "./cocos2d/core": 71,
      "./cocos2d/core/components/CCStudioComponent": 54,
      "./cocos2d/deprecated": 131,
      "./cocos2d/motion-streak/CCMotionStreak": 1,
      "./cocos2d/particle/CCParticleAsset": 1,
      "./cocos2d/particle/CCParticleSystem": 1,
      "./cocos2d/tilemap/CCTiledMap": 1,
      "./cocos2d/tilemap/CCTiledMapAsset": 1,
      "./extensions/ccpool/CCNodePool": 133,
      "./extensions/ccpool/CCPool": 134,
      "./extensions/dragonbones": 1,
      "./extensions/spine": 1,
      "./external/chipmunk/chipmunk": 1
    } ],
    133: [ (function(require, module, exports) {
      cc.NodePool = function(poolHandlerComp) {
        this.poolHandlerComp = poolHandlerComp;
        this._pool = [];
      };
      cc.NodePool.prototype = {
        constructor: cc.NodePool,
        size: function() {
          return this._pool.length;
        },
        clear: function() {
          var count = this._pool.length;
          for (var i = 0; i < count; ++i) this._pool[i].destroy();
          this._pool.length = 0;
        },
        put: function(obj) {
          if (obj && -1 === this._pool.indexOf(obj)) {
            obj.removeFromParent(false);
            var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
            handler && handler.unuse && handler.unuse();
            this._pool.push(obj);
          }
        },
        get: function() {
          var last = this._pool.length - 1;
          if (last < 0) return null;
          var obj = this._pool[last];
          this._pool.length = last;
          var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
          handler && handler.reuse && handler.reuse.apply(handler, arguments);
          return obj;
        }
      };
      module.exports = cc.NodePool;
    }), {} ],
    134: [ (function(require, module, exports) {
      var _args = [];
      cc.pool = {
        _pool: {},
        _releaseCB: function() {
          this.release();
        },
        _autoRelease: function(obj) {
          var running = void 0 !== obj._running && !obj._running;
          cc.director.getScheduler().schedule(this._releaseCB, obj, 0, 0, 0, running);
        },
        putInPool: function(obj) {
          var cid = cc.js._getClassId(obj.constructor);
          if (!cid) return;
          this._pool[cid] || (this._pool[cid] = []);
          (true, obj.retain) && obj.retain();
          obj.unuse && obj.unuse();
          this._pool[cid].push(obj);
        },
        hasObject: function(objClass) {
          var cid = cc.js._getClassId(objClass);
          var list = this._pool[cid];
          if (!list || 0 === list.length) return false;
          return true;
        },
        removeObject: function(obj) {
          var cid = cc.js._getClassId(obj.constructor);
          if (cid) {
            var list = this._pool[cid];
            if (list) for (var i = 0; i < list.length; i++) if (obj === list[i]) {
              (true, obj.release) && obj.release();
              list.splice(i, 1);
            }
          }
        },
        getFromPool: function(objClass) {
          if (this.hasObject(objClass)) {
            var cid = cc.js._getClassId(objClass);
            var list = this._pool[cid];
            _args.length = arguments.length - 1;
            for (var i = 0; i < _args.length; i++) _args[i] = arguments[i + 1];
            var obj = list.pop();
            obj.reuse && obj.reuse.apply(obj, _args);
            (true, obj.release) && this._autoRelease(obj);
            _args.length = 0;
            return obj;
          }
        },
        drainAllPools: function() {
          true;
          for (var i in this._pool) for (var j = 0; j < this._pool[i].length; j++) {
            var obj = this._pool[i][j];
            obj.release && obj.release();
          }
          this._pool = {};
        }
      };
    }), {} ],
    135: [ (function(require, module, exports) {
      "use strict";
      function defineMacro(name, defaultValue) {
        "undefined" === (__typeofVal = typeof window[name], "object" === __typeofVal ? __realTypeOfObj(window[name]) : __typeofVal) && (window[name] = defaultValue);
      }
      function defined(name) {
        return "object" === (__typeofVal = typeof window[name], "object" === __typeofVal ? __realTypeOfObj(window[name]) : __typeofVal);
      }
      defineMacro("CC_TEST", defined("tap") || defined("QUnit"));
      defineMacro("CC_EDITOR", defined("Editor") && defined("process") && "electron" in process.versions);
      defineMacro("CC_PREVIEW", true);
      defineMacro("CC_DEV", true);
      defineMacro("CC_DEBUG", true);
      defineMacro("CC_JSB", defined("jsb"));
      defineMacro("CC_BUILD", false);
      defineMacro("CC_WECHATGAME", false);
      defineMacro("CC_QQPLAY", false);
      defineMacro("CC_SUPPORT_JIT", !(false, false));
      cc.ClassManager || (cc.ClassManager = window.ClassManager);
      false;
      require("../polyfill/misc");
      require("../polyfill/string");
      true;
      require("../polyfill/typescript");
      require("../cocos2d/core/platform/js");
      require("../cocos2d/core/value-types");
      require("../cocos2d/core/utils/find");
      require("../cocos2d/core/utils/mutable-forward-iterator");
      require("../cocos2d/core/event");
      require("../cocos2d/core/event-manager/CCEvent");
      require("../CCDebugger");
      true;
      require("../DebugInfos");
      var macro = require("../cocos2d/core/platform/CCMacro");
      void 0 !== window.__ENABLE_GC_FOR_NATIVE_OBJECTS__ && (macro.ENABLE_GC_FOR_NATIVE_OBJECTS = window.__ENABLE_GC_FOR_NATIVE_OBJECTS__);
      require("./jsb-game");
      require("./jsb-loader");
      require("./jsb-director");
      require("./jsb-tex-sprite-frame");
      require("./jsb-scale9sprite");
      require("./jsb-label");
      require("./jsb-editbox");
      require("./jsb-videoplayer");
      require("./jsb-webview");
      require("./jsb-particle");
      require("./jsb-spine");
      require("./jsb-enums");
      require("./jsb-event");
      require("./jsb-action");
      require("./jsb-etc");
      require("./jsb-audio");
      require("./jsb-tiledmap");
      require("./jsb-box2d");
      require("./jsb-dragonbones");
      require("../extends");
    }), {
      "../CCDebugger": 2,
      "../DebugInfos": 3,
      "../cocos2d/core/event": 66,
      "../cocos2d/core/event-manager/CCEvent": 61,
      "../cocos2d/core/platform/CCMacro": 95,
      "../cocos2d/core/platform/js": 107,
      "../cocos2d/core/utils/find": 116,
      "../cocos2d/core/utils/mutable-forward-iterator": 118,
      "../cocos2d/core/value-types": 130,
      "../extends": 132,
      "../polyfill/misc": 152,
      "../polyfill/string": 153,
      "../polyfill/typescript": 154,
      "./jsb-action": 136,
      "./jsb-audio": 137,
      "./jsb-box2d": 1,
      "./jsb-director": 138,
      "./jsb-dragonbones": 1,
      "./jsb-editbox": 139,
      "./jsb-enums": 140,
      "./jsb-etc": 141,
      "./jsb-event": 142,
      "./jsb-game": 143,
      "./jsb-label": 144,
      "./jsb-loader": 145,
      "./jsb-particle": 146,
      "./jsb-scale9sprite": 147,
      "./jsb-spine": 1,
      "./jsb-tex-sprite-frame": 148,
      "./jsb-tiledmap": 149,
      "./jsb-videoplayer": 150,
      "./jsb-webview": 151
    } ],
    136: [ (function(require, module, exports) {
      var ENABLE_GC_FOR_NATIVE_OBJECTS = cc.macro.ENABLE_GC_FOR_NATIVE_OBJECTS;
      cc.Action.prototype._getSgTarget = cc.Action.prototype.getTarget;
      cc.Action.prototype.getTarget = function() {
        var sgNode = this._getSgTarget();
        return sgNode._owner || sgNode;
      };
      cc.targetedAction = function(target, action) {
        return new cc.TargetedAction(target, action);
      };
      cc.TargetedAction.prototype._ctor = function(target, action) {
        var node = target._sgNode || target;
        node._owner = target;
        action && this.initWithTarget(node, action);
      };
      cc.follow = function(followedNode, rect) {
        return new cc.Follow(followedNode, rect);
      };
      cc.Follow = cc.BaseJSAction.extend({
        _followedNode: null,
        _boundarySet: false,
        _boundaryFullyCovered: false,
        _halfScreenSize: null,
        _fullScreenSize: null,
        _worldRect: null,
        leftBoundary: 0,
        rightBoundary: 0,
        topBoundary: 0,
        bottomBoundary: 0,
        ctor: function(followedNode, rect) {
          cc.BaseJSAction.prototype.ctor.call(this);
          this._followedNode = null;
          this._boundarySet = false;
          this._boundaryFullyCovered = false;
          this._halfScreenSize = null;
          this._fullScreenSize = null;
          this.leftBoundary = 0;
          this.rightBoundary = 0;
          this.topBoundary = 0;
          this.bottomBoundary = 0;
          this._worldRect = cc.rect(0, 0, 0, 0);
          followedNode && (rect ? this.initWithTarget(followedNode, rect) : this.initWithTarget(followedNode));
        },
        clone: function() {
          var action = new cc.Follow();
          var locRect = this._worldRect;
          var rect = new cc.Rect(locRect.x, locRect.y, locRect.width, locRect.height);
          action.initWithTarget(this._followedNode, rect);
          return action;
        },
        isBoundarySet: function() {
          return this._boundarySet;
        },
        setBoudarySet: function(value) {
          this._boundarySet = value;
        },
        initWithTarget: function(followedNode, rect) {
          if (!followedNode) throw new Error("cc.Follow.initWithAction(): followedNode must be non nil");
          var _this = this;
          rect = rect || cc.rect(0, 0, 0, 0);
          _this._followedNode = followedNode;
          _this._worldRect = rect;
          _this._boundarySet = !cc._rectEqualToZero(rect);
          _this._boundaryFullyCovered = false;
          var winSize = cc.director.getWinSize();
          _this._fullScreenSize = cc.p(winSize.width, winSize.height);
          _this._halfScreenSize = cc.pMult(_this._fullScreenSize, .5);
          if (_this._boundarySet) {
            _this.leftBoundary = -(rect.x + rect.width - _this._fullScreenSize.x);
            _this.rightBoundary = -rect.x;
            _this.topBoundary = -rect.y;
            _this.bottomBoundary = -(rect.y + rect.height - _this._fullScreenSize.y);
            _this.rightBoundary < _this.leftBoundary && (_this.rightBoundary = _this.leftBoundary = (_this.leftBoundary + _this.rightBoundary) / 2);
            _this.topBoundary < _this.bottomBoundary && (_this.topBoundary = _this.bottomBoundary = (_this.topBoundary + _this.bottomBoundary) / 2);
            _this.topBoundary === _this.bottomBoundary && _this.leftBoundary === _this.rightBoundary && (_this._boundaryFullyCovered = true);
          }
          return true;
        },
        step: function(dt) {
          var target = this.getTarget();
          var targetWorldPos = target.convertToWorldSpaceAR(cc.Vec2.ZERO);
          var followedWorldPos = this._followedNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
          var delta = cc.pSub(targetWorldPos, followedWorldPos);
          var tempPos = target.parent.convertToNodeSpaceAR(cc.pAdd(delta, this._halfScreenSize));
          if (this._boundarySet) {
            if (this._boundaryFullyCovered) return;
            target.setPosition(cc.clampf(tempPos.x, this.leftBoundary, this.rightBoundary), cc.clampf(tempPos.y, this.bottomBoundary, this.topBoundary));
          } else target.setPosition(tempPos.x, tempPos.y);
        },
        isDone: function() {
          return !this._followedNode.isRunning();
        },
        stop: function() {
          this.setTarget(null);
          cc.Action.prototype.stop.call(this);
        }
      });
      var _FlipX = cc.FlipX;
      cc.FlipX = _FlipX.extend({
        _flippedX: false,
        ctor: function(flip) {
          _FlipX.prototype.ctor.call(this);
          this.initWithFlipX(flip);
        },
        initWithFlipX: function(flip) {
          this._flippedX = !!flip;
          return true;
        },
        update: function(dt) {
          var target = this._getSgTarget();
          target.scaleX = Math.abs(target.scaleX) * (this._flippedX ? -1 : 1);
        },
        reverse: function() {
          return new cc.FlipX(!this._flippedX);
        },
        clone: function() {
          return new cc.FlipX(this._flippedX);
        }
      });
      cc.flipX = function(flip) {
        return new cc.FlipX(flip);
      };
      var _FlipY = cc.FlipY;
      cc.FlipY = _FlipY.extend({
        _flippedY: false,
        ctor: function(flip) {
          _FlipY.prototype.ctor.call(this);
          this.initWithFlipY(flip);
        },
        initWithFlipY: function(flip) {
          this._flippedY = !!flip;
          return true;
        },
        update: function(dt) {
          var target = this._getSgTarget();
          target.scaleY = Math.abs(target.scaleY) * (this._flippedY ? -1 : 1);
        },
        reverse: function() {
          return new cc.FlipY(!this._flippedY);
        },
        clone: function() {
          return new cc.FlipY(this._flippedY);
        }
      });
      cc.flipY = function(flip) {
        return new cc.FlipY(flip);
      };
      function setRendererVisibility(sgNode, toggleVisible, visible) {
        if (!sgNode) return;
        var _renderComps = sgNode._owner.getComponentsInChildren(cc._SGComponent);
        for (var i = 0; i < _renderComps.length; ++i) {
          var render = _renderComps[i];
          render.enabled = toggleVisible ? !render.enabled : visible;
        }
      }
      cc.Show.prototype.update = function(dt) {
        setRendererVisibility(this._getSgTarget(), false, true);
      };
      cc.Hide.prototype.update = function(dt) {
        setRendererVisibility(this._getSgTarget(), false, false);
      };
      cc.ToggleVisibility.prototype.update = function(dt) {
        setRendererVisibility(this._getSgTarget(), true);
      };
      cc.callFunc = function(selector, selectorTarget, data) {
        var callback = function(sender) {
          sender && (sender = sender._owner || sender);
          selector.call(this, sender, data);
        };
        var action = selectorTarget ? cc.CallFunc.create(callback, selectorTarget) : cc.CallFunc.create(callback);
        return action;
      };
      cc.CallFunc.prototype._ctor = function(selector, selectorTarget, data) {
        if (void 0 !== selector) {
          var callback = function(sender) {
            sender && (sender = sender._owner || sender);
            selector.call(this, sender, data);
          };
          void 0 === selectorTarget ? this.initWithFunction(callback) : this.initWithFunction(callback, selectorTarget);
        }
      };
      function getSGTarget(target) {
        target instanceof cc.Component ? target = target.node._sgNode : target instanceof cc.Node ? target = target._sgNode : target instanceof _ccsg.Node || (target = null);
        return target;
      }
      var jsbAddAction = cc.ActionManager.prototype.addAction;
      cc.ActionManager.prototype.addAction = function(action, target, paused) {
        target = getSGTarget(target);
        target && jsbAddAction.call(this, action, target, paused);
      };
      function actionMgrFuncReplacer(funcName, targetPos) {
        var proto = cc.ActionManager.prototype;
        var oldFunc = proto[funcName];
        proto[funcName] = function() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) args[i] = i === targetPos ? getSGTarget(arguments[i]) : arguments[i];
          return args[targetPos] ? oldFunc.apply(this, args) : void 0;
        };
      }
      var targetRelatedFuncs = [ [ "removeAllActionsFromTarget", 0 ], [ "removeActionByTag", 1 ], [ "getActionByTag", 1 ], [ "getNumberOfRunningActionsInTarget", 0 ], [ "pauseTarget", 0 ], [ "resumeTarget", 0 ] ];
      for (var i = 0; i < targetRelatedFuncs.length; ++i) actionMgrFuncReplacer.apply(null, targetRelatedFuncs[i]);
      cc.ActionManager.prototype.resumeTargets = function(targetsToResume) {
        if (!targetsToResume) return;
        for (var i = 0; i < targetsToResume.length; i++) targetsToResume[i] && this.resumeTarget(targetsToResume[i]);
      };
      cc.ActionManager.prototype.pauseTargets = function(targetsToPause) {
        if (!targetsToPause) return;
        for (var i = 0; i < targetsToPause.length; i++) targetsToPause[i] && this.pauseTarget(targetsToPause[i]);
      };
      function syncPositionUpdate(dt) {
        var target = this._getSgTarget();
        if (target._owner) {
          target._owner.x = target.getPositionX();
          target._owner.y = target.getPositionY();
        }
      }
      function syncRotationUpdate(dt) {
        var target = this._getSgTarget();
        if (target._owner) {
          target._owner.rotationX = target.getRotationX();
          target._owner.rotationY = target.getRotationY();
        }
      }
      function syncScaleUpdate(dt) {
        var target = this._getSgTarget();
        if (target._owner) {
          target._owner.scaleX = target.getScaleX();
          target._owner.scaleY = target.getScaleY();
        }
      }
      function syncRemoveSelfUpdate(dt) {
        var target = this._getSgTarget();
        target._owner && target._owner.removeFromParent();
      }
      function syncSkewUpdate(dt) {
        var target = this._getSgTarget();
        if (target._owner) {
          target._owner.skewX = target.getSkewX();
          target._owner.skewY = target.getSkewY();
        }
      }
      function syncOpacityUpdate(dt) {
        var target = this._getSgTarget();
        target._owner && (target._owner.opacity = target.getOpacity());
      }
      function syncColorUpdate(dt) {
        var target = this._getSgTarget();
        if (target._owner) {
          var color = target.getColor();
          target._owner.color = color;
        }
      }
      var actionUpdate = {
        MoveBy: syncPositionUpdate,
        JumpBy: syncPositionUpdate,
        Place: syncPositionUpdate,
        CardinalSplineTo: syncPositionUpdate,
        RotateTo: syncRotationUpdate,
        RotateBy: syncRotationUpdate,
        ScaleTo: syncScaleUpdate,
        RemoveSelf: syncRemoveSelfUpdate,
        SkewTo: syncSkewUpdate,
        Blink: syncOpacityUpdate,
        FadeIn: syncOpacityUpdate,
        FadeOut: syncOpacityUpdate,
        FadeTo: syncOpacityUpdate,
        TintTo: syncColorUpdate,
        TintBy: syncColorUpdate,
        BezierBy: syncPositionUpdate
      };
      for (var key in actionUpdate) {
        var action = cc[key];
        var prototype = action.prototype;
        prototype.update = actionUpdate[key];
        prototype.speed = function(speed) {
          return new cc.Speed(this, speed);
        };
        prototype.repeat = function(times) {
          return new cc.Repeat(this, times);
        };
        prototype.repeatForever = function() {
          return new cc.RepeatForever(this);
        };
      }
    }), {} ],
    137: [ (function(require, module, exports) {
      cc.Audio = function(src) {
        this.src = src;
        this.volume = 1;
        this.loop = false;
        this.id = -1;
        this._eventList = {};
        this.type = cc.Audio.Type.NATIVE;
      };
      cc.Audio.Type = {
        DOM: "AUDIO",
        WEBAUDIO: "WEBAUDIO",
        NATIVE: "NATIVE",
        UNKNOWN: "UNKNOWN"
      };
      (function(proto, audioEngine) {
        cc.audioEngine = audioEngine;
        audioEngine.play = audioEngine.play2d;
        audioEngine.setMaxWebAudioSize = function() {};
        var Module = require("../cocos2d/audio/deprecated");
        Module.removed(audioEngine);
        Module.deprecated(audioEngine);
        proto.State = audioEngine.AudioState;
        proto.play = function() {
          audioEngine.stop(this.id);
          this.id = audioEngine.play2d(this.src, this.loop, this.volume);
        };
        proto.pause = function() {
          audioEngine.pause(this.id);
        };
        proto.resume = function() {
          audioEngine.resume(this.id);
        };
        proto.stop = function() {
          audioEngine.stop(this.id);
        };
        proto.destroy = function() {};
        proto.setLoop = function(loop) {
          this.loop = loop;
          audioEngine.setLoop(this.id, loop);
        };
        proto.getLoop = function() {
          return audioEngine.getLoop(this.id);
        };
        proto.setVolume = function(volume) {
          this.volume = volume;
          return audioEngine.setVolume(this.id, volume);
        };
        proto.getVolume = function() {
          return audioEngine.getVolume(this.id);
        };
        proto.setCurrentTime = function(time) {
          audioEngine.setCurrentTime(this.id, time);
        };
        proto.getCurrentTime = function() {
          return audioEngine.getCurrentTime(this.id);
        };
        proto.getDuration = function() {
          return audioEngine.getDuration(this.id);
        };
        proto.getState = function() {
          return audioEngine.getState(this.id);
        };
        proto.preload = function() {
          this._loaded = true;
          this.emit("load");
        };
        proto.on = function(event, callback) {
          var list = this._eventList[event];
          list || (list = this._eventList[event] = []);
          list.push(callback);
        };
        proto.once = function(event, callback) {
          var onceCallback = function(elem) {
            callback.call(this, elem);
            this.off(event, onceCallback);
          };
          this.on(event, onceCallback);
        };
        proto.emit = function(event) {
          var list = this._eventList[event];
          if (!list) return;
          for (var i = 0; i < list.length; i++) list[i].call(this, this);
        };
        proto.off = function(event, callback) {
          var list = this._eventList[event];
          if (!list) return false;
          if (!callback) {
            this._eventList[event] = [];
            return true;
          }
          for (var i = 0; i < list.length; i++) if (list[i] === callback) {
            list.splice(i, 1);
            break;
          }
          return true;
        };
      })(cc.Audio.prototype, jsb.AudioEngine);
    }), {
      "../cocos2d/audio/deprecated": 15
    } ],
    138: [ (function(require, module, exports) {
      "use strict";
      var AutoReleaseUtils = require("../cocos2d/core/load-pipeline/auto-release-utils");
      var ComponentScheduler = require("../cocos2d/core/component-scheduler");
      var NodeActivator = require("../cocos2d/core/node-activator");
      var EventListeners = require("../cocos2d/core/event/event-listeners");
      cc.director._purgeDirector = cc.director.purgeDirector;
      cc.js.mixin(cc.director, {
        sharedInit: function() {
          this._compScheduler = new ComponentScheduler();
          this._nodeActivator = new NodeActivator();
          var scheduler = this.getScheduler();
          if (cc.AnimationManager) {
            this._animationManager = new cc.AnimationManager();
            scheduler.scheduleUpdate(this._animationManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          } else this._animationManager = null;
          if (cc.CollisionManager) {
            this._collisionManager = new cc.CollisionManager();
            scheduler.scheduleUpdate(this._collisionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          } else this._collisionManager = null;
          if (cc.PhysicsManager) {
            this._physicsManager = new cc.PhysicsManager();
            this.getScheduler().scheduleUpdate(this._physicsManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          } else this._physicsManager = null;
          cc._widgetManager.init(this);
          cc.loader.init(this);
        },
        purgeDirector: function() {
          this._compScheduler.unscheduleAll();
          this._nodeActivator.reset();
          this._purgeDirector();
        },
        reset: function() {
          this.purgeDirector();
          cc.eventManager && cc.eventManager.setEnabled(true);
          this._animationManager && this.getScheduler().scheduleUpdate(this._animationManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          this._collisionManager && this.getScheduler().scheduleUpdate(this._collisionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          this._physicsManager && this.getScheduler().scheduleUpdate(this._physicsManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          this.startAnimation();
        },
        getActionManager: function() {
          return this._actionManager;
        },
        setActionManager: function(actionManager) {
          if (this._actionManager !== actionManager) {
            this._actionManager && this._scheduler.unscheduleUpdate(this._actionManager);
            this._actionManager = actionManager;
            this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
          }
        },
        getAnimationManager: function() {
          return this._animationManager;
        },
        getCollisionManager: function() {
          return this._collisionManager;
        },
        getPhysicsManager: function() {
          return this._physicsManager;
        },
        getScene: function() {
          return this._scene;
        },
        runSceneImmediate: function(scene, onBeforeLoadScene, onLaunched) {
          var console = window.console;
          var INIT_SCENE = "InitScene";
          var AUTO_RELEASE = "AutoRelease";
          var DESTROY = "Destroy";
          var ATTACH_PERSIST = "AttachPersist";
          var ACTIVATE = "Activate";
          if (scene instanceof cc.Scene) {
            console.time(INIT_SCENE);
            scene._load();
            console.timeEnd(INIT_SCENE);
          }
          var game = cc.game;
          var persistNodeList = Object.keys(game._persistRootNodes).map((function(x) {
            return game._persistRootNodes[x];
          }));
          for (var i = 0; i < persistNodeList.length; i++) {
            var node = persistNodeList[i];
            game._ignoreRemovePersistNode = node;
            node.parent = null;
            game._ignoreRemovePersistNode = null;
          }
          var oldScene = this._scene;
          console.time(AUTO_RELEASE);
          var autoReleaseAssets = oldScene && oldScene.autoReleaseAssets && oldScene.dependAssets;
          AutoReleaseUtils.autoRelease(autoReleaseAssets, scene.dependAssets, persistNodeList);
          console.timeEnd(AUTO_RELEASE);
          console.time(DESTROY);
          cc.isValid(oldScene) && oldScene.destroy();
          this._scene = null;
          cc.Object._deferredDestroy();
          console.timeEnd(DESTROY);
          onBeforeLoadScene && onBeforeLoadScene();
          this.emit(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, scene);
          var sgScene = scene;
          if (scene instanceof cc.Scene) {
            this._scene = scene;
            sgScene = scene._sgNode;
            console.time(ATTACH_PERSIST);
            for (var _i = 0; _i < persistNodeList.length; _i++) {
              var _node = persistNodeList[_i];
              var existNode = scene.getChildByUuid(_node.uuid);
              if (existNode) {
                var index = existNode.getSiblingIndex();
                existNode._destroyImmediate();
                scene.insertChild(_node, index);
              } else _node.parent = scene;
            }
            console.timeEnd(ATTACH_PERSIST);
            console.time(ACTIVATE);
            scene._activate();
            console.timeEnd(ACTIVATE);
          }
          this.getRunningScene() ? this.replaceScene(sgScene) : this.runWithScene(sgScene);
          onLaunched && onLaunched(null, scene);
          this.emit(cc.Director.EVENT_AFTER_SCENE_LAUNCH, scene);
        },
        runScene: function(scene, onBeforeLoadScene, onLaunched) {
          cc.assertID(scene, 1205);
          scene instanceof cc.Scene && scene._load();
          this.once(cc.Director.EVENT_AFTER_UPDATE, (function() {
            this.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
          }));
        },
        _getSceneUuid: function(key) {
          var scenes = cc.game._sceneInfos;
          if ("string" === (__typeofVal = typeof key, "object" === __typeofVal ? __realTypeOfObj(key) : __typeofVal)) {
            key.endsWith(".fire") || (key += ".fire");
            "/" === key[0] || key.startsWith("db://assets/") || (key = "/" + key);
            for (var i = 0; i < scenes.length; i++) {
              var info = scenes[i];
              if (info.url.endsWith(key)) return info;
            }
          } else if ("number" === (__typeofVal = typeof key, "object" === __typeofVal ? __realTypeOfObj(key) : __typeofVal)) {
            if (0 <= key && key < scenes.length) return scenes[key];
            cc.errorID(1211, key);
          } else cc.errorID(1212, key);
          return null;
        },
        setRuntimeLaunchScene: function(sceneName) {
          var info = this._getSceneUuid(sceneName);
          this._launchSceneUuid = info.uuid;
        },
        loadScene: function(sceneName, onLaunched, _onUnloaded) {
          if (this._loadingScene) {
            cc.errorID(1213, sceneName, this._loadingScene);
            return false;
          }
          var info = this._getSceneUuid(sceneName);
          if (info) {
            var uuid = info.uuid;
            this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
            this._loadingScene = sceneName;
            if ((true, cc.runtime) && uuid !== this._launchSceneUuid) {
              var self = this;
              var groupName = cc.path.basename(info.url) + "_" + info.uuid;
              console.log("==> start preload: " + groupName);
              var ensureAsync = false;
              cc.LoaderLayer.preload([ groupName ], (function() {
                console.log("==> end preload: " + groupName);
                ensureAsync ? self._loadSceneByUuid(uuid, onLaunched, _onUnloaded) : setTimeout((function() {
                  self._loadSceneByUuid(uuid, onLaunched, _onUnloaded);
                }), 0);
              }));
              ensureAsync = true;
            } else this._loadSceneByUuid(uuid, onLaunched, _onUnloaded);
            return true;
          }
          cc.errorID(1214, sceneName);
          return false;
        },
        preloadScene: function(sceneName, onLoaded) {
          var info = this._getSceneUuid(sceneName);
          if (info) {
            this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
            cc.loader.load({
              uuid: info.uuid,
              type: "uuid"
            }, (function(error, asset) {
              error && cc.errorID(1215, sceneName, error.message);
              onLoaded && onLoaded(error, asset);
            }));
          } else {
            var error = 'Can not preload the scene "' + sceneName + '" because it is not in the build settings.';
            onLoaded(new Error(error));
            cc.error("preloadScene: " + error);
          }
        },
        _loadSceneByUuid: function(uuid, onLaunched, onUnloaded, dontRunScene) {
          false;
          console.time("LoadScene " + uuid);
          cc.AssetLibrary.loadAsset(uuid, (function(error, sceneAsset) {
            console.timeEnd("LoadScene " + uuid);
            var self = cc.director;
            self._loadingScene = "";
            if (error) {
              error = "Failed to load scene: " + error;
              cc.error(error);
            } else {
              if (sceneAsset instanceof cc.SceneAsset) {
                var scene = sceneAsset.scene;
                scene._id = sceneAsset._uuid;
                scene._name = sceneAsset._name;
                false;
                self.runSceneImmediate(scene, onUnloaded, onLaunched);
                return;
              }
              error = "The asset " + uuid + " is not a scene";
              cc.error(error);
            }
            onLaunched && onLaunched(error);
          }));
        },
        __fastOn: function(type, callback, target) {
          var listeners = this._bubblingListeners;
          listeners || (listeners = this._bubblingListeners = new EventListeners());
          listeners.add(type, callback, target);
          this._addEventFlag(type, listeners, false);
        },
        __fastOff: function(type, callback, target) {
          var listeners = this._bubblingListeners;
          if (listeners) {
            listeners.remove(type, callback, target);
            this._purgeEventFlag(type, listeners, false);
          }
        }
      });
      cc.defineGetterSetter(cc.director, "actionManager", cc.director.getActionManager, cc.director.setActionManager);
      cc.EventTarget.call(cc.director);
      cc.js.addon(cc.director, cc.EventTarget.prototype);
      cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
      cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
      cc.Director.EVENT_BEFORE_VISIT = "director_before_visit";
      cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
      cc.Director.EVENT_BEFORE_UPDATE = "director_before_update";
      cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
      cc.Director.EVENT_BEFORE_SCENE_LOADING = "director_before_scene_loading";
      cc.Director.EVENT_BEFORE_SCENE_LAUNCH = "director_before_scene_launch";
      cc.Director.EVENT_AFTER_SCENE_LAUNCH = "director_after_scene_launch";
      cc.Director._EVENT_NEXT_TICK = "_director_next_tick";
      cc.Director._beforeUpdateListener = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: cc.Director.EVENT_BEFORE_UPDATE,
        callback: function() {
          cc.director.emit(cc.Director._EVENT_NEXT_TICK);
          cc.director.emit(cc.Director.EVENT_BEFORE_UPDATE);
          cc.director._compScheduler.startPhase();
          var dt = cc.director.getDeltaTime();
          cc.director._compScheduler.updatePhase(dt);
        }
      });
      cc.Director._afterUpdateListener = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: cc.Director.EVENT_AFTER_UPDATE,
        callback: function() {
          var dt = cc.director.getDeltaTime();
          cc.director._compScheduler.lateUpdatePhase(dt);
          cc.director.emit(cc.Director.EVENT_AFTER_UPDATE);
          cc.Object._deferredDestroy();
          cc.director.emit(cc.Director.EVENT_BEFORE_VISIT, this);
        }
      });
      cc.Director._afterVisitListener = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: cc.Director.EVENT_AFTER_VISIT,
        callback: function() {
          cc.director.emit(cc.Director.EVENT_AFTER_VISIT, this);
        }
      });
      cc.Director._afterDrawListener = cc.EventListener.create({
        event: cc.EventListener.CUSTOM,
        eventName: cc.Director.EVENT_AFTER_DRAW,
        callback: function() {
          cc.director.emit(cc.Director.EVENT_AFTER_DRAW, this);
        }
      });
      cc.eventManager.addEventListenerWithFixedPriority(cc.Director._beforeUpdateListener, 1);
      cc.eventManager.addEventListenerWithFixedPriority(cc.Director._afterUpdateListener, 1);
      cc.eventManager.addEventListenerWithFixedPriority(cc.Director._afterVisitListener, 1);
      cc.eventManager.addEventListenerWithFixedPriority(cc.Director._afterDrawListener, 1);
    }), {
      "../cocos2d/core/component-scheduler": 33,
      "../cocos2d/core/event/event-listeners": 63,
      "../cocos2d/core/load-pipeline/auto-release-utils": 77,
      "../cocos2d/core/node-activator": 90
    } ],
    139: [ (function(require, module, exports) {
      "use strict";
      var _p = cc.EditBox.prototype;
      _p._setMaxLength = _p.setMaxLength;
      _p.setMaxLength = function(maxLength) {
        maxLength < 0 && (maxLength = 65535);
        this._setMaxLength(maxLength);
      };
      cc.defineGetterSetter(_p, "font", null, _p.setFont);
      cc.defineGetterSetter(_p, "fontName", null, _p.setFontName);
      cc.defineGetterSetter(_p, "fontSize", null, _p.setFontSize);
      cc.defineGetterSetter(_p, "fontColor", null, _p.setFontColor);
      cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
      cc.defineGetterSetter(_p, "maxLength", _p.getMaxLength, _p.setMaxLength);
      cc.defineGetterSetter(_p, "placeholder", _p.getPlaceHolder, _p.setPlaceHolder);
      cc.defineGetterSetter(_p, "placeholderFont", null, _p.setPlaceholderFont);
      cc.defineGetterSetter(_p, "placeholderFontName", null, _p.setPlaceholderFontName);
      cc.defineGetterSetter(_p, "placeholderFontSize", null, _p.setPlaceholderFontSize);
      cc.defineGetterSetter(_p, "placeholderFontColor", null, _p.setPlaceholderFontColor);
      cc.defineGetterSetter(_p, "inputFlag", null, _p.setInputFlag);
      cc.defineGetterSetter(_p, "delegate", null, _p.setDelegate);
      cc.defineGetterSetter(_p, "inputMode", null, _p.setInputMode);
      cc.defineGetterSetter(_p, "returnType", null, _p.setReturnType);
      _p.setLineHeight = function() {};
      _p.setTabIndex = function() {};
      _p.getTabIndex = function() {
        return -1;
      };
      _p.setFocus = function() {};
      _p.isFocused = function() {
        return false;
      };
      _p.stayOnTop = function() {};
      cc.EditBox.InputMode = cc.Enum({
        ANY: 0,
        EMAIL_ADDR: 1,
        NUMERIC: 2,
        PHONE_NUMBER: 3,
        URL: 4,
        DECIMAL: 5,
        SINGLE_LINE: 6
      });
      cc.EditBox.InputFlag = cc.Enum({
        PASSWORD: 0,
        SENSITIVE: 1,
        INITIAL_CAPS_WORD: 2,
        INITIAL_CAPS_SENTENCE: 3,
        INITIAL_CAPS_ALL_CHARACTERS: 4,
        DEFAULT: 5
      });
      cc.EditBox.KeyboardReturnType = cc.Enum({
        DEFAULT: 0,
        DONE: 1,
        SEND: 2,
        SEARCH: 3,
        GO: 4
      });
    }), {} ],
    140: [ (function(require, module, exports) {
      "use strict";
      cc.TextAlignment = cc.Enum({
        LEFT: 0,
        CENTER: 1,
        RIGHT: 2
      });
      cc.VerticalTextAlignment = cc.Enum({
        TOP: 0,
        CENTER: 1,
        BOTTOM: 2
      });
    }), {} ],
    141: [ (function(require, module, exports) {
      "use strict";
      cc.sys.now = function() {
        return Date.now();
      };
      var NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
      cc.js.mixin(cc.path, {
        _normalize: function(url) {
          var oldUrl = url = String(url);
          do {
            oldUrl = url;
            url = url.replace(NORMALIZE_RE, "");
          } while (oldUrl.length !== url.length);
          return url;
        },
        sep: cc.sys.os === cc.sys.OS_WINDOWS ? "\\" : "/",
        stripSep: function(path) {
          return path.replace(/[\/\\]$/, "");
        }
      });
      var nodeProto = cc.Node.prototype;
      cc.defineGetterSetter(nodeProto, "_parent", nodeProto.getParent, nodeProto.setParent);
      cc.view.isViewReady = cc.view.isOpenGLReady;
      cc.view.setOrientation = function() {};
      var _windowTimeIntervalId = 0;
      var _windowTimeFunHash = {};
      var WindowTimeFun = function(code) {
        this.__instanceId = cc.ClassManager.getNewInstanceId();
        this._intervalId = _windowTimeIntervalId++;
        this._code = code;
      };
      WindowTimeFun.prototype.fun = function() {
        if (!this._code) return;
        var code = this._code;
        "string" === (__typeofVal = typeof code, "object" === __typeofVal ? __realTypeOfObj(code) : __typeofVal) ? Function(code)() : "function" === (__typeofVal = typeof code, 
        "object" === __typeofVal ? __realTypeOfObj(code) : __typeofVal) && code.apply(null, this._args);
      };
      window.setTimeout = function(code, delay) {
        var target = new WindowTimeFun(code);
        arguments.length > 2 && (target._args = Array.prototype.slice.call(arguments, 2));
        var original = target.fun;
        target.fun = function() {
          original.apply(this, arguments);
          clearTimeout(target._intervalId);
        };
        cc.director.getScheduler().schedule(target.fun, target, delay / 1e3, 0, 0, false);
        _windowTimeFunHash[target._intervalId] = target;
        return target._intervalId;
      };
      window.setInterval = function(code, delay) {
        var target = new WindowTimeFun(code);
        arguments.length > 2 && (target._args = Array.prototype.slice.call(arguments, 2));
        cc.director.getScheduler().schedule(target.fun, target, delay / 1e3, cc.macro.REPEAT_FOREVER, 0, false);
        _windowTimeFunHash[target._intervalId] = target;
        return target._intervalId;
      };
      window.clearInterval = function(intervalId) {
        var target = _windowTimeFunHash[intervalId];
        if (target) {
          cc.director.getScheduler().unschedule(target.fun, target);
          delete _windowTimeFunHash[intervalId];
        }
      };
      window.clearTimeout = clearInterval;
      if (window.SocketIO) {
        window.io = window.SocketIO;
        SocketIO.prototype._jsbEmit = SocketIO.prototype.emit;
        SocketIO.prototype.emit = function(uri, delegate) {
          "object" === (__typeofVal = typeof delegate, "object" === __typeofVal ? __realTypeOfObj(delegate) : __typeofVal) && (delegate = JSON.stringify(delegate));
          this._jsbEmit(uri, delegate);
        };
      }
      cc.Node.prototype.setIgnoreAnchorPointForPosition = cc.Node.prototype.ignoreAnchorPointForPosition;
      window._ccsg = {
        Node: cc.Node,
        Scene: cc.Scene,
        Sprite: cc.Sprite,
        ParticleSystem: cc.ParticleSystem,
        Label: cc.Label,
        EditBox: cc.EditBox,
        VideoPlayer: cc.VideoPlayer,
        WebView: cc.WebView,
        TMXTiledMap: cc.TMXTiledMap,
        TMXObjectGroup: cc.TMXObjectGroup,
        TMXObject: cc.TMXObject,
        TMXObjectImage: cc.TMXObjetImage,
        TMXObjectShape: cc.TMXObjectShape,
        TMXLayer: cc.TMXLayer,
        MotionStreak: cc.MotionStreak,
        CameraNode: cc.CameraNode
      };
      cc.formatStr = cc.js.formatStr;
      cc.Image && cc.Image.setPNGPremultipliedAlphaEnabled && cc.Image.setPNGPremultipliedAlphaEnabled(false);
      window.__cleanup = function() {
        cc.director.getScene().destroy();
        cc.Object._deferredDestroy();
        cc.js._registeredClassIds = {};
        cc.js._registeredClassNames = {};
        cc.loader.releaseAll();
        cc.textureCache.removeAllTextures();
      };
    }), {} ],
    142: [ (function(require, module, exports) {
      "use strict";
      var Pool = require("../cocos2d/core/platform/js").Pool;
      var Event = require("../cocos2d/core/event/event");
      require("../cocos2d/core/event-manager/CCEvent");
      Event.EventMouse.pool = new Pool(5);
      Event.EventMouse.pool.get = function(fromEvt, eventType) {
        var event = this._get() || new Event.EventMouse(eventType, true);
        event._button = fromEvt.getButton();
        var loc = fromEvt.getLocation();
        event._x = loc.x;
        event._y = loc.y;
        var listener = fromEvt._listener;
        if (listener) {
          event._prevX = listener._previousX;
          event._prevY = listener._previousY;
        }
        event._scrollX = fromEvt.getScrollX();
        event._scrollY = fromEvt.getScrollY();
        event._target = null;
        event._currentTarget = null;
        event.eventPhase = cc.Event.NONE;
        event._propagationStopped = false;
        event._propagationImmediateStopped = false;
        return event;
      };
      Event.EventTouch.pool = new Pool(5);
      Event.EventTouch.pool.get = function(fromEvt) {
        var touchArr = fromEvt.getTouches();
        var event = this._get() || new Event.EventTouch(touchArr, true);
        event.eventPhase = cc.Event.NONE;
        event._eventCode = fromEvt.getEventCode();
        event._touches = touchArr;
        event._target = null;
        event._currentTarget = null;
        event._propagationStopped = false;
        event._propagationImmediateStopped = false;
        return event;
      };
      cc.eventManager.addListener = function(listener, nodeOrPriority) {
        listener instanceof cc.EventListener || (listener = cc.EventListener.create(listener));
        if ("number" === (__typeofVal = typeof nodeOrPriority, "object" === __typeofVal ? __realTypeOfObj(nodeOrPriority) : __typeofVal)) {
          if (0 === nodeOrPriority) {
            cc.logID(3500);
            return;
          }
          cc.eventManager.addEventListenerWithFixedPriority(listener, nodeOrPriority);
        } else {
          var node = nodeOrPriority;
          if (nodeOrPriority instanceof cc._BaseNode) node = nodeOrPriority._sgNode; else if (!(node instanceof _ccsg.Node)) {
            cc.warnID(3506);
            return;
          }
          cc.eventManager.addEventListenerWithSceneGraphPriority(listener, node);
        }
        return listener;
      };
      cc.eventManager._removeListeners = cc.eventManager.removeListeners;
      cc.eventManager.removeListeners = function(target, recursive) {
        target instanceof cc._BaseNode && (target = target._sgNode);
        target instanceof _ccsg.Node || cc.js.isNumber(target) ? this._removeListeners(target, recursive || false) : cc.warnID(3506);
      };
      cc.eventManager._pauseTarget = cc.eventManager.pauseTarget;
      cc.eventManager.pauseTarget = function(target, recursive) {
        var sgTarget = target;
        target._eventPaused = true;
        if (target instanceof cc._BaseNode) sgTarget = target._sgNode; else if (!(sgTarget instanceof _ccsg.Node)) {
          cc.warnID(3506);
          return;
        }
        if (sgTarget !== target && !sgTarget.isRunning()) {
          var originOnEnter = sgTarget.onEnter;
          sgTarget.onEnter = function() {
            originOnEnter.call(this);
            target._eventPaused && cc.eventManager._pauseTarget(this, recursive || false);
            this.onEnter = originOnEnter;
          };
        }
        this._pauseTarget(sgTarget, recursive || false);
      };
      cc.eventManager._resumeTarget = cc.eventManager.resumeTarget;
      cc.eventManager.resumeTarget = function(target, recursive) {
        target._eventPaused = false;
        if (target instanceof cc._BaseNode) target = target._sgNode; else if (!(target instanceof _ccsg.Node)) {
          cc.warnID(3506);
          return;
        }
        this._resumeTarget(target, recursive || false);
      };
      cc._EventListenerKeyboard = cc.EventListenerKeyboard;
      cc._EventListenerKeyboard.LISTENER_ID = "__cc_keyboard";
      cc._EventListenerAcceleration = cc.EventListenerAcceleration;
      cc._EventListenerAcceleration.LISTENER_ID = "__cc_acceleration";
      cc._EventListenerTouchAllAtOnce = cc.EventListenerTouchAllAtOnce;
      cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
      cc._EventListenerTouchOneByOne = cc.EventListenerTouchOneByOne;
      cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
      cc._EventListenerMouse = cc.EventListenerMouse;
      cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
    }), {
      "../cocos2d/core/event-manager/CCEvent": 61,
      "../cocos2d/core/event/event": 65,
      "../cocos2d/core/platform/js": 107
    } ],
    143: [ (function(require, module, exports) {
      "use strict";
      cc.game = {
        DEBUG_MODE_NONE: 0,
        DEBUG_MODE_INFO: 1,
        DEBUG_MODE_WARN: 2,
        DEBUG_MODE_ERROR: 3,
        DEBUG_MODE_INFO_FOR_WEB_PAGE: 4,
        DEBUG_MODE_WARN_FOR_WEB_PAGE: 5,
        DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6,
        EVENT_HIDE: "game_on_hide",
        EVENT_SHOW: "game_on_show",
        EVENT_RESIZE: "game_on_resize",
        _onShowListener: null,
        _onHideListener: null,
        _paused: false,
        _prepareCalled: false,
        _prepared: false,
        config: null,
        onStart: null,
        _sceneInfos: [],
        _persistRootNodes: {},
        _ignoreRemovePersistNode: null,
        RENDER_TYPE_CANVAS: 0,
        RENDER_TYPE_WEBGL: 1,
        RENDER_TYPE_OPENGL: 2,
        EVENT_GAME_INITED: "game_inited",
        CONFIG_KEY: {
          width: "width",
          height: "height",
          modules: "modules",
          debugMode: "debugMode",
          showFPS: "showFPS",
          frameRate: "frameRate",
          id: "id",
          renderMode: "renderMode",
          registerSystemEvent: "registerSystemEvent",
          jsList: "jsList",
          scenes: "scenes"
        },
        setFrameRate: function(frameRate) {
          var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
          config[CONFIG_KEY.frameRate] = frameRate;
          cc.director.setAnimationInterval(1 / frameRate);
        },
        step: function() {
          cc.director.mainLoop();
        },
        pause: function() {
          this._paused = true;
          cc.director.pause();
        },
        resume: function() {
          this._paused = false;
          cc.director.resume();
        },
        isPaused: function() {
          return this._paused;
        },
        restart: function() {
          __restartVM();
        },
        end: function() {
          close();
        },
        prepare: function(cb) {
          var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
          this._loadConfig();
          if (this._prepared) {
            cb && cb();
            return;
          }
          if (this._prepareCalled) return;
          this._prepareCalled = true;
          cc._renderType = cc.game.RENDER_TYPE_OPENGL;
          cc.director.sharedInit();
          var jsList = config[CONFIG_KEY.jsList];
          if (jsList) cc.loader.load(jsList, (function(err) {
            if (err) throw new Error(JSON.stringify(err));
            self._prepared = true;
            cb && cb();
            self.emit(self.EVENT_GAME_INITED);
          })); else {
            cb && cb();
            self.emit(self.EVENT_GAME_INITED);
          }
        },
        run: function(config, onStart) {
          if ("function" === (__typeofVal = typeof config, "object" === __typeofVal ? __realTypeOfObj(config) : __typeofVal)) cc.game.onStart = config; else {
            config && (cc.game.config = config);
            "function" === (__typeofVal = typeof onStart, "object" === __typeofVal ? __realTypeOfObj(onStart) : __typeofVal) && (cc.game.onStart = onStart);
          }
          cc.director.startAnimation();
          this.prepare(cc.game.onStart && cc.game.onStart.bind(cc.game));
        },
        addPersistRootNode: function(node) {
          if (!cc.Node.isNode(node) || !node.uuid) {
            cc.warnID(3803);
            return;
          }
          var id = node.uuid;
          if (!this._persistRootNodes[id]) {
            var scene = cc.director._scene;
            if (cc.isValid(scene)) {
              if (node.parent) {
                if (!(node.parent instanceof cc.Scene)) {
                  cc.warnID(3801);
                  return;
                }
                if (node.parent !== scene) {
                  cc.warnID(3802);
                  return;
                }
              } else node.parent = scene;
              this._persistRootNodes[id] = node;
              node._persistNode = true;
            }
          }
        },
        removePersistRootNode: function(node) {
          if (node !== this._ignoreRemovePersistNode) {
            var id = node._id || "";
            if (node === this._persistRootNodes[id]) {
              delete this._persistRootNodes[id];
              node._persistNode = false;
            }
          }
        },
        isPersistRootNode: function(node) {
          return node._persistNode;
        },
        _loadConfig: function() {
          if (this.config) this._initConfig(this.config); else try {
            var txt = jsb.fileUtils.getStringFromFile("project.json");
            var data = JSON.parse(txt);
            this._initConfig(data || {});
          } catch (e) {
            console.log("Failed to read or parse project.json");
            this._initConfig({});
          }
        },
        _initConfig: function(config) {
          var CONFIG_KEY = this.CONFIG_KEY;
          "number" !== (__typeofVal = typeof config[CONFIG_KEY.debugMode], "object" === __typeofVal ? __realTypeOfObj(config[CONFIG_KEY.debugMode]) : __typeofVal) && (config[CONFIG_KEY.debugMode] = 0);
          "number" !== (__typeofVal = typeof config[CONFIG_KEY.frameRate], "object" === __typeofVal ? __realTypeOfObj(config[CONFIG_KEY.frameRate]) : __typeofVal) && (config[CONFIG_KEY.frameRate] = 60);
          "number" !== (__typeofVal = typeof config[CONFIG_KEY.renderMode], "object" === __typeofVal ? __realTypeOfObj(config[CONFIG_KEY.renderMode]) : __typeofVal) && (config[CONFIG_KEY.renderMode] = 0);
          config[CONFIG_KEY.showFPS] = !(CONFIG_KEY.showFPS in config) || !!config[CONFIG_KEY.showFPS];
          this.groupList = config.groupList || [];
          this.collisionMatrix = config.collisionMatrix || [];
          this._sceneInfos = config[CONFIG_KEY.scenes] || [];
          cc.director.setDisplayStats(config[CONFIG_KEY.showFPS]);
          cc.director.setAnimationInterval(1 / config[CONFIG_KEY.frameRate]);
          cc._initDebugSetting(config[CONFIG_KEY.debugMode]);
          this.config = config;
        }
      };
      cc.EventTarget.call(cc.game);
      cc.js.addon(cc.game, cc.EventTarget.prototype);
      cc.game._onHideListener = cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, (function() {
        cc.game.emit(cc.game.EVENT_HIDE, cc.game);
      }));
      cc.game._onShowListener = cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, (function() {
        cc.game.emit(cc.game.EVENT_SHOW, cc.game);
      }));
      cc._initDebugSetting(cc.game.DEBUG_MODE_INFO);
    }), {} ],
    144: [ (function(require, module, exports) {
      "use strict";
      var jsbLabel = cc.Label;
      !jsbLabel.createWithTTF && jsbLabel.prototype.createWithTTF && (jsbLabel.createWithTTF = jsbLabel.prototype.createWithTTF);
      jsbLabel.prototype.setHorizontalAlign = jsbLabel.prototype.setHorizontalAlignment;
      jsbLabel.prototype.setVerticalAlign = jsbLabel.prototype.setVerticalAlignment;
      jsbLabel.prototype.setBMFontSize || (jsbLabel.prototype.setBMFontSize = function() {});
      jsbLabel.prototype.getBMFontSize || (jsbLabel.prototype.getBMFontSize = function() {});
      jsbLabel.prototype.setOverflow || (jsbLabel.prototype.setOverflow = function() {});
      jsbLabel.prototype.getOverflow || (jsbLabel.prototype.getOverflow = function() {});
      jsbLabel.prototype._setOverflow = jsbLabel.prototype.setOverflow;
      jsbLabel.prototype.setOverflow = function(overflow) {
        this._overFlow = overflow;
        this._setOverflow(this._overFlow);
      };
      jsbLabel.prototype.getOverflow = function() {
        return this._overFlow;
      };
      jsbLabel.prototype._enableBold = jsbLabel.prototype.enableBold;
      jsbLabel.prototype.enableBold = function(enabled) {
        enabled ? this._enableBold() : this.disableEffect(5);
      };
      jsbLabel.prototype._enableItalics = jsbLabel.prototype.enableItalics;
      jsbLabel.prototype.enableItalics = function(enabled) {
        enabled ? this._enableItalics() : this.disableEffect(4);
      };
      jsbLabel.prototype._enableUnderline = jsbLabel.prototype.enableUnderline;
      jsbLabel.prototype.enableUnderline = function(enabled) {
        enabled ? this._enableUnderline() : this.disableEffect(6);
      };
      jsbLabel.prototype.setFontSize = function(size) {
        this._fontSize = size;
        if (this._labelType === _ccsg.Label.Type.SystemFont) this.setSystemFontSize(size); else if (this._labelType === _ccsg.Label.Type.BMFont) this.setBMFontSize(size); else if (this._labelType === _ccsg.Label.Type.TTF) {
          var ttfConfig = this.getTTFConfig();
          ttfConfig.fontSize = size;
          this.setTTFConfig(ttfConfig);
        }
      };
      jsbLabel.prototype.getFontSize = function() {
        return this._fontSize;
      };
      jsbLabel.prototype.enableWrapText = jsbLabel.prototype.enableWrap || function() {};
      jsbLabel.prototype.isWrapTextEnabled = jsbLabel.prototype.isWrapEnabled || function() {};
      jsbLabel.prototype._setLineHeight = jsbLabel.prototype.setLineHeight;
      jsbLabel.prototype.setLineHeight = function(height) {
        this._labelType !== _ccsg.Label.Type.SystemFont ? this._setLineHeight(height) : 40 !== height && cc.warnID(4013);
      };
      jsbLabel.prototype._setColor = jsbLabel.prototype.setColor;
      jsbLabel.prototype.setColor = function(color) {
        this._labelType === _ccsg.Label.Type.BMFont ? this._setColor(color) : this.setTextColor(color);
      };
      jsbLabel.prototype.setSpacingX = jsbLabel.prototype.setAdditionalKerning;
      jsbLabel.prototype._setTTFConfig = jsbLabel.prototype.setTTFConfig;
      jsbLabel.prototype.setTTFConfig = function(config) {
        this._setTTFConfig(config);
        this._ttfConfig = config;
      };
      jsbLabel.prototype.getTTFConfig = function() {
        return this._ttfConfig;
      };
      jsbLabel.prototype._setContentSize = jsbLabel.prototype.setContentSize;
      jsbLabel.prototype.setContentSize = function(size, height) {
        var newWidth = "number" === (__typeofVal = typeof size.width, "object" === __typeofVal ? __realTypeOfObj(size.width) : __typeofVal) ? size.width : size;
        var newHeight = "number" === (__typeofVal = typeof size.height, "object" === __typeofVal ? __realTypeOfObj(size.height) : __typeofVal) ? size.height : height;
        if (this.getOverflow() === cc.Label.Overflow.NONE) {
          newWidth = 0;
          newHeight = 0;
        } else this._setContentSize(newWidth, newHeight);
        this.setDimensions(newWidth, newHeight);
      };
      jsbLabel.prototype.setFontAsset = function(fontAsset) {
        this._fontAsset = fontAsset;
        var isAsset = fontAsset instanceof cc.Font;
        if (!isAsset) {
          this.setFontFamily("Arial");
          return;
        }
        var fontHandle = isAsset ? fontAsset.rawUrl : "";
        var extName = cc.path.extname(fontHandle);
        if (".ttf" === extName) {
          var outlineWidth = this.isOutlined() ? this.getOutlineWidth() : 0;
          if (this._ttfConfig) {
            this._ttfConfig.outlineSize = outlineWidth;
            this._ttfConfig.fontFilePath = fontHandle;
          } else this._ttfConfig = {
            fontFilePath: fontHandle,
            fontSize: this._fontSize,
            outlineSize: outlineWidth,
            glyphs: 0,
            customGlyphs: "",
            distanceFieldEnable: false
          };
          this._labelType = _ccsg.Label.Type.TTF;
          this.setTTFConfig(this._ttfConfig);
        } else if (fontAsset.spriteFrame) {
          this._labelType = _ccsg.Label.Type.BMFont;
          this.setBMFontFilePath(JSON.stringify(fontAsset._fntConfig), fontAsset.spriteFrame);
          this.setFontSize(this.getFontSize());
        }
        this.getContentSize();
      };
      jsbLabel.prototype.setFontFamily = function(fontFamily) {
        fontFamily = fontFamily || "";
        this._labelType = _ccsg.Label.Type.SystemFont;
        this.setSystemFontName(fontFamily);
        this._isSystemFontUsed = true;
        this.getContentSize();
      };
      jsbLabel.prototype.setOutlined = function(value) {
        this._outlined = !!value;
        this._outlined ? this.enableOutline(this.getOutlineColor(), this.getOutlineWidth()) : this.disableEffect(1);
      };
      jsbLabel.prototype.setOutlineWidth = function(value) {
        this._outlineWidth = value;
        if (this._outlined) {
          var outlineWidth = this.getOutlineWidth();
          if (this._labelType === _ccsg.Label.Type.TTF) {
            var ttfConfig = this.getTTFConfig();
            if (ttfConfig.outlineSize !== outlineWidth) {
              ttfConfig.outlineSize = outlineWidth;
              this.setTTFConfig(ttfConfig);
            }
          } else this.enableOutline(this.getOutlineColor(), outlineWidth);
        }
      };
      jsbLabel.prototype.setOutlineColor = function(value) {
        this._outlineColor = cc.color(value);
        this._outlined && this.enableOutline(this.getOutlineColor(), this.getOutlineWidth());
      };
      jsbLabel.prototype.setMargin = function() {};
      jsbLabel.prototype.isOutlined = function() {
        return this._outlined;
      };
      jsbLabel.prototype.getOutlineWidth = function() {
        return this._outlineWidth || 1;
      };
      jsbLabel.prototype.getOutlineColor = function() {
        return this._outlineColor || cc.color(255, 255, 255, 255);
      };
      cc.Label = function(string, fontHandle, spriteFrame, fontSize) {
        fontHandle = fontHandle || "Arial";
        var extName = cc.path.extname(fontHandle);
        var type = _ccsg.Label.Type.TTF;
        this._fontSize = fontSize;
        var label;
        if (".ttf" === extName) {
          var ttfConfig = {
            fontFilePath: fontHandle,
            fontSize: this._fontSize,
            outlineSize: 0,
            glyphs: 0,
            customGlyphs: "",
            distanceFieldEnable: false
          };
          label = jsbLabel.createWithTTF(ttfConfig, string);
          label._ttfConfig = ttfConfig;
        } else if (spriteFrame) {
          label = jsbLabel.createWithBMFont(fontHandle, string, spriteFrame);
          type = _ccsg.Label.Type.BMFont;
        } else {
          label = jsbLabel.createWithSystemFont(string || "", fontHandle, this._fontSize);
          type = _ccsg.Label.Type.SystemFont;
          label._isSystemFontUsed = true;
        }
        label._labelType = type;
        return label;
      };
      cc.Label.Type = cc.Enum({
        TTF: 0,
        BMFont: 1,
        SystemFont: 2
      });
      cc.Label.Overflow = cc.Enum({
        NONE: 0,
        CLAMP: 1,
        SHRINK: 2,
        RESIZE_HEIGHT: 3
      });
      cc.Label.pool = new cc.js.Pool(0);
      cc.Label.pool.get = function(string, fontAsset, spriteFrame, fontSize) {
        this._fontAsset = fontAsset;
        fontSize = fontSize || 40;
        var isAsset = fontAsset instanceof cc.Font;
        if (!isAsset) return new _ccsg.Label(string, null, null, fontSize);
        var fontHandle = isAsset ? fontAsset.rawUrl : "";
        return new _ccsg.Label(string, fontHandle, spriteFrame, fontSize);
      };
    }), {} ],
    145: [ (function(require, module, exports) {
      "use strict";
      require("../cocos2d/core/load-pipeline");
      function empty(item, callback) {
        return null;
      }
      function downloadScript(item, callback) {
        require(item.url);
        return null;
      }
      function downloadAudio(item, callback) {
        return item.url;
      }
      cc.loader.addDownloadHandlers({
        js: downloadScript,
        jsc: downloadScript,
        png: empty,
        jpg: empty,
        bmp: empty,
        jpeg: empty,
        gif: empty,
        ico: empty,
        tiff: empty,
        webp: empty,
        image: empty,
        mp3: downloadAudio,
        ogg: downloadAudio,
        wav: downloadAudio,
        mp4: downloadAudio,
        m4a: downloadAudio,
        font: empty,
        eot: empty,
        ttf: empty,
        woff: empty,
        svg: empty,
        ttc: empty
      });
      function loadImage(item, callback) {
        var url = item.url;
        var cachedTex = cc.textureCache.getTextureForKey(url);
        if (cachedTex) return cachedTex;
        if (url.match(jsb.urlRegExp)) jsb.loadRemoteImg(url, (function(succeed, tex) {
          if (succeed) {
            tex.url = url;
            callback && callback(null, tex);
          } else callback && callback(new Error("Load image failed: " + url));
        })); else {
          var addImageCallback = function(tex) {
            if (tex instanceof cc.Texture2D) {
              tex.url = url;
              callback && callback(null, tex);
            } else callback && callback(new Error("Load image failed: " + url));
          };
          cc.textureCache._addImageAsync(url, addImageCallback);
        }
      }
      cc.loader.addLoadHandlers({
        png: loadImage,
        jpg: loadImage,
        bmp: loadImage,
        jpeg: loadImage,
        gif: loadImage,
        ico: loadImage,
        tiff: loadImage,
        webp: loadImage,
        image: loadImage,
        default: empty
      });
    }), {
      "../cocos2d/core/load-pipeline": 79
    } ],
    146: [ (function(require, module, exports) {
      "use strict";
      cc.ParticleSystem.Mode = cc.Enum({
        GRAVITY: 0,
        RADIUS: 1
      });
      cc.ParticleSystem.Type = cc.Enum({
        FREE: 0,
        RELATIVE: 1,
        GROUPED: 2
      });
      var funcNames = [ {
        tangentialAccel: "setTangentialAccel",
        tangentialAccelVar: "setTangentialAccelVar",
        radialAccel: "setRadialAccel",
        radialAccelVar: "setRadialAccelVar",
        rotationIsDir: "setRotationIsDir",
        gravity: "setGravity",
        speed: "setSpeed",
        speedVar: "setSpeedVar"
      }, {
        startRadius: "setStartRadius",
        startRadiusVar: "setStartRadiusVar",
        endRadius: "setEndRadius",
        endRadiusVar: "setEndRadiusVar",
        rotatePerS: "setRotatePerSecond",
        rotatePerSVar: "setRotatePerSecondVar"
      } ];
      function getReplacer(oldFunc, mode) {
        return function(value) {
          this.getEmitterMode() === mode && oldFunc.call(this, value);
        };
      }
      var proto = cc.ParticleSystem.prototype;
      for (var mode = 0; mode < funcNames.length; mode++) {
        var modeFuncs = funcNames[mode];
        for (var propName in modeFuncs) {
          var funcName = modeFuncs[propName];
          var func = proto[funcName];
          proto[funcName] = getReplacer(func, mode);
          var getter = funcName.replace("set", "get");
          cc.defineGetterSetter(proto, propName, proto[getter], proto[funcName]);
        }
      }
    }), {} ],
    147: [ (function(require, module, exports) {
      "use strict";
      var v2Found = false;
      if (cc.Scale9SpriteV2) {
        v2Found = true;
        cc.Scale9Sprite = cc.Scale9SpriteV2;
      }
      cc.Scale9Sprite.state = {
        NORMAL: 0,
        GRAY: 1,
        DISTORTION: 2
      };
      cc.Scale9Sprite.RenderingType = cc.Enum({
        SIMPLE: 0,
        SLICED: 1,
        TILED: 2,
        FILLED: 3
      });
      cc.Scale9Sprite.FillType = cc.Enum({
        Horizontal: 0,
        Vertical: 1,
        RADIAL: 2
      });
      var s9sPrototype = cc.Scale9Sprite.prototype;
      if (v2Found) {
        var _jsbSetContentSize = s9sPrototype.setContentSize;
        s9sPrototype.setContentSize = function(size, height) {
          void 0 !== height && (size = new cc.Size(size, height));
          _jsbSetContentSize.call(this, size);
        };
        var _jsbSetAnchorPoint = s9sPrototype.setAnchorPoint;
        s9sPrototype.setAnchorPoint = function(anchorPoint, y) {
          void 0 !== y && (anchorPoint = new cc.Vec2(anchorPoint, y));
          _jsbSetAnchorPoint.call(this, anchorPoint);
        };
      } else {
        s9sPrototype.setFillType = function() {};
        s9sPrototype.setFillCenter = function() {};
        s9sPrototype.setFillStart = function() {};
        s9sPrototype.setFillRange = function() {};
        s9sPrototype.enableTrimmedContentSize = function() {};
        s9sPrototype._lazyInit = function() {
          if (this._onceInit) return;
          this._onceInit = true;
          this._insets = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          this._trim = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
          this._contentSizeTrimmed = new cc.Size(0, 0);
          this._anchorPointTrimmed = new cc.Vec2(0, 0);
          this._sizeAfterTrimmed = new cc.Size(0, 0);
        };
        s9sPrototype._applyInsetsContentAnchor = function() {
          var renderingType = this._renderingType || this.getRenderingType && this.getRenderingType();
          var trimScaleX = 1;
          var trimScaleY = 1;
          if (renderingType === cc.Scale9Sprite.RenderingType.SIMPLE) {
            trimScaleX = this._contentSizeTrimmed.width / this._sizeAfterTrimmed.width;
            trimScaleY = this._contentSizeTrimmed.height / this._sizeAfterTrimmed.height;
          }
          var contentSize = new cc.Size(0, 0);
          contentSize.width = this._contentSizeTrimmed.width + (this._trim.left + this._trim.right) * trimScaleX;
          contentSize.height = this._contentSizeTrimmed.height + (this._trim.top + this._trim.bottom) * trimScaleY;
          this._setContentSize(contentSize);
          var anchorPoint = new cc.Vec2(0, 0);
          anchorPoint.x = this._contentSizeTrimmed.width * this._anchorPointTrimmed.x + this._trim.left * trimScaleX;
          anchorPoint.y = this._contentSizeTrimmed.height * this._anchorPointTrimmed.y + this._trim.bottom * trimScaleY;
          anchorPoint.x = anchorPoint.x / contentSize.width;
          anchorPoint.y = anchorPoint.y / contentSize.height;
          this._setAnchorPoint(anchorPoint);
          var capinsets = new cc.Rect(0, 0, 0, 0);
          capinsets.x = this._trim.left + this._insets.left;
          capinsets.y = this._trim.top + this._insets.top;
          capinsets.width = this._sizeAfterTrimmed.width - this._insets.left - this._insets.right;
          capinsets.height = this._sizeAfterTrimmed.height - this._insets.top - this._insets.bottom;
          this.setCapInsets(capinsets);
        };
        s9sPrototype._setBlendFunc = s9sPrototype.setBlendFunc;
        s9sPrototype.setBlendFunc = function(blendFunc, dst) {
          void 0 !== dst && (blendFunc = {
            src: blendFunc,
            dst: dst
          });
          this._setBlendFunc && this._setBlendFunc(blendFunc);
        };
        s9sPrototype._getContentSize = s9sPrototype.getContentSize;
        s9sPrototype.getContentSize = function() {
          return new cc.Size(this._contentSizeTrimmed);
        };
        s9sPrototype._setContentSize = s9sPrototype.setContentSize;
        s9sPrototype.setContentSize = function(size, height) {
          this._lazyInit();
          void 0 !== height && (size = new cc.Size(size, height));
          this._contentSizeTrimmed = new cc.Size(size);
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._getAnchorPoint = s9sPrototype.getAnchorPoint;
        s9sPrototype.getAnchorPoint = function() {
          return new cc.Vec2(this._anchorPointTrimmed);
        };
        s9sPrototype._setAnchorPoint = s9sPrototype.setAnchorPoint;
        s9sPrototype.setAnchorPoint = function(anchorPoint, y) {
          this._lazyInit();
          void 0 !== y && (anchorPoint = new cc.Vec2(anchorPoint, y));
          this._anchorPointTrimmed = new cc.Vec2(anchorPoint);
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._getInsetLeft = s9sPrototype.getInsetLeft;
        s9sPrototype._getInsetRight = s9sPrototype.getInsetRight;
        s9sPrototype._getInsetBottom = s9sPrototype.getInsetBottom;
        s9sPrototype._getInsetTop = s9sPrototype.getInsetTop;
        s9sPrototype.getInsetLeft = function() {
          return this._insets.left;
        };
        s9sPrototype.getInsetRight = function() {
          return this._insets.right;
        };
        s9sPrototype.getInsetBottom = function() {
          return this._insets.bottom;
        };
        s9sPrototype.getInsetTop = function() {
          return this._insets.top;
        };
        s9sPrototype._setInsetLeft = s9sPrototype.setInsetLeft;
        s9sPrototype.setInsetLeft = function(insetLeft) {
          this._lazyInit();
          this._insets.left = insetLeft;
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._setInsetRight = s9sPrototype.setInsetRight;
        s9sPrototype.setInsetRight = function(insetRight) {
          this._lazyInit();
          this._insets.right = insetRight;
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._setInsetTop = s9sPrototype.setInsetTop;
        s9sPrototype.setInsetTop = function(insetTop) {
          this._lazyInit();
          this._insets.top = insetTop;
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._setInsetBottom = s9sPrototype.setInsetBottom;
        s9sPrototype.setInsetBottom = function(insetBottom) {
          this._lazyInit();
          this._insets.bottom = insetBottom;
          this._applyInsetsContentAnchor();
        };
        s9sPrototype._setSpriteFrame = s9sPrototype.setSpriteFrame;
        s9sPrototype.setSpriteFrame = function(spriteFrame) {
          this._lazyInit();
          var originalSize = spriteFrame.getOriginalSize();
          var spriteRect = spriteFrame.getRect();
          var offset = spriteFrame.getOffset();
          var leftTrim = (originalSize.width + 2 * offset.x - spriteRect.width) / 2;
          var rightTrim = originalSize.width - leftTrim - spriteRect.width;
          var bottomTrim = (originalSize.height + 2 * offset.y - spriteRect.height) / 2;
          var topTrim = originalSize.height - bottomTrim - spriteRect.height;
          this._trim.left = leftTrim;
          this._trim.right = rightTrim;
          this._trim.top = topTrim;
          this._trim.bottom = bottomTrim;
          this._sizeAfterTrimmed = new cc.Size(spriteRect.width, spriteRect.height);
          this._setSpriteFrame(spriteFrame);
          this._applyInsetsContentAnchor();
        };
      }
    }), {} ],
    148: [ (function(require, module, exports) {
      "use strict";
      require("../cocos2d/core/platform/CCClass");
      require("../cocos2d/core/assets/CCAsset");
      cc.TextureCache.prototype._addImageAsync || (cc.TextureCache.prototype._addImageAsync = cc.TextureCache.prototype.addImageAsync);
      cc.TextureCache.prototype.addImageAsync = function(url, cb, target) {
        var localTex = null;
        cc.loader.load(url, (function(err, tex) {
          err && (tex = null);
          cb && cb.call(target, tex);
          localTex = tex;
        }));
        return localTex;
      };
      cc.TextureCache.prototype._addImage || (cc.TextureCache.prototype._addImage = cc.TextureCache.prototype.addImage);
      cc.TextureCache.prototype.addImage = function(url, cb, target) {
        return "function" === (__typeofVal = typeof cb, "object" === __typeofVal ? __realTypeOfObj(cb) : __typeofVal) ? this.addImageAsync(url, cb, target) : cb ? this._addImage(url, cb) : this._addImage(url);
      };
      cc.textureCache._textures = {};
      cc.textureCache.cacheImage = function(key, texture) {
        texture instanceof cc.Texture2D && (this._textures[key] = texture);
      };
      cc.textureCache._getTextureForKey = cc.textureCache.getTextureForKey;
      cc.textureCache.getTextureForKey = function(key) {
        var tex = this._getTextureForKey(key);
        tex || (tex = this._textures[key]);
        return tex || null;
      };
      cc.textureCache._removeTextureForKey = cc.textureCache.removeTextureForKey;
      cc.textureCache.removeTextureForKey = function(key) {
        this._textures[key] && delete this._textures[key];
        this._removeTextureForKey(key);
      };
      cc.Class._fastDefine("cc.Texture2D", cc.Texture2D, []);
      cc.js.value(cc.Texture2D, "$super", cc.RawAsset);
      var GL_NEAREST = 9728;
      var GL_LINEAR = 9729;
      var GL_REPEAT = 10497;
      var GL_CLAMP_TO_EDGE = 33071;
      var GL_MIRRORED_REPEAT = 33648;
      cc.Texture2D.PixelFormat = cc.Enum({
        RGB565: cc.Texture2D.PIXEL_FORMAT_RGB565,
        RGB5A1: cc.Texture2D.PIXEL_FORMAT_RGB5A1,
        RGBA4444: cc.Texture2D.PIXEL_FORMAT_RGBA4444,
        RGB888: cc.Texture2D.PIXEL_FORMAT_RGB888,
        RGBA8888: cc.Texture2D.PIXEL_FORMAT_RGBA8888,
        A8: cc.Texture2D.PIXEL_FORMAT_A8,
        I8: cc.Texture2D.PIXEL_FORMAT_I8,
        AI8: cc.Texture2D.PIXEL_FORMAT_AI8
      });
      cc.Texture2D.WrapMode = cc.Enum({
        REPEAT: GL_REPEAT,
        CLAMP_TO_EDGE: GL_CLAMP_TO_EDGE,
        MIRRORED_REPEAT: GL_MIRRORED_REPEAT
      });
      cc.Texture2D.Filter = cc.Enum({
        LINEAR: GL_LINEAR,
        NEAREST: GL_NEAREST
      });
      var prototype = cc.Texture2D.prototype;
      prototype.loaded = true;
      prototype.update = function(options) {
        var updateTexParam = false;
        var genMipmap = false;
        if (options) {
          if (void 0 !== options.minFilter) {
            this._minFilter = options.minFilter;
            updateTexParam = true;
          }
          if (void 0 !== options.magFilter) {
            this._magFilter = options.magFilter;
            updateTexParam = true;
          }
          if (void 0 !== options.wrapS) {
            this._wrapS = options.wrapS;
            updateTexParam = true;
          }
          if (void 0 !== options.wrapT) {
            this._wrapT = options.wrapT;
            updateTexParam = true;
          }
          void 0 !== options.mipmap && (genMipmap = this._hasMipmap = options.mipmap);
        }
        updateTexParam && this.setTexParameters(options);
        genMipmap && this.generateMipmap();
      };
      prototype.isLoaded = function() {
        return true;
      };
      prototype.getPixelWidth = prototype.getPixelsWide;
      prototype.getPixelHeight = prototype.getPixelsHigh;
      prototype.description = prototype.getDescription;
      cc.js.get(prototype, "pixelWidth", prototype.getPixelWidth);
      cc.js.get(prototype, "pixelHeight", prototype.getPixelHeight);
      cc.js.get(prototype, "_glID", prototype.getName);
      cc.Class._fastDefine("cc.SpriteFrame", cc.SpriteFrame, []);
      cc.js.value(cc.SpriteFrame, "$super", cc.Asset);
      prototype = cc.SpriteFrame.prototype;
      prototype._setTexture = prototype.setTexture;
      prototype._initWithTexture = prototype.initWithTexture;
      cc.js.mixin(prototype, cc.EventTarget.prototype);
      prototype._ctor = function(filename, rect, rotated, offset, originalSize) {
        this._name = "";
        this.insetTop = 0;
        this.insetBottom = 0;
        this.insetLeft = 0;
        this.insetRight = 0;
        void 0 !== filename && this.initWithTexture(filename, rect, rotated, offset, originalSize);
      };
      prototype.textureLoaded = function() {
        return null !== this.getTexture();
      };
      prototype.setTexture = function(textureOrTextureFile, rect, rotated, offset, originalSize) {
        rect && this.setRect(rect);
        offset && this.setOffset(offset);
        originalSize && this.setOriginalSize(originalSize);
        this.setRotated(rotated || false);
        var texture = textureOrTextureFile;
        if (cc.js.isString(textureOrTextureFile)) {
          this._textureFilename = textureOrTextureFile;
          this._loadTexture();
        } else texture instanceof cc.Texture2D && this._refreshTexture(texture);
        return true;
      };
      prototype.initWithTexture = prototype.setTexture;
      prototype._loadTexture = function() {
        if (this._textureFilename) {
          var texture = cc.textureCache.addImage(this._textureFilename);
          this._refreshTexture(texture);
        }
      };
      prototype.ensureLoadTexture = function() {
        this._texture || this._loadTexture();
      };
      prototype.clearTexture = function() {
        this._setTexture(null);
      };
      prototype._refreshTexture = function(texture) {
        if (this.getTexture() !== texture) {
          var w = texture.width, h = texture.height;
          var rect = this.getRect();
          0 === rect.width || 0 === rect.height ? rect = cc.rect(0, 0, w, h) : this._checkRect(texture);
          var originalSize = this.getOriginalSize();
          0 !== originalSize.width && 0 !== originalSize.height || (originalSize = cc.size(w, h));
          var offset = this.getOffset();
          var rotated = this.isRotated();
          this._initWithTexture(texture, rect, rotated, offset, originalSize);
          this.emit("load");
        }
      };
      prototype._deserialize = function(data, handle) {
        var rect = data.rect;
        rect && this.setRect(new cc.Rect(rect[0], rect[1], rect[2], rect[3]));
        data.offset && this.setOffset(new cc.Vec2(data.offset[0], data.offset[1]));
        data.originalSize && this.setOriginalSize(new cc.Size(data.originalSize[0], data.originalSize[1]));
        this.setRotated(1 === data.rotated);
        this._name = data.name;
        var capInsets = data.capInsets;
        if (capInsets) {
          this.insetLeft = capInsets[0];
          this.insetTop = capInsets[1];
          this.insetRight = capInsets[2];
          this.insetBottom = capInsets[3];
        }
        var textureUuid = data.texture;
        if (textureUuid) {
          var dontLoadTexture = handle.customEnv && handle.customEnv.deferredLoadRaw;
          var receiver = dontLoadTexture ? "_textureFilename" : "_textureFilenameSetter";
          handle.result.push(this, receiver, textureUuid);
        }
      };
      prototype._checkRect = function(texture) {
        var rect = this.getRect();
        var maxX = rect.x, maxY = rect.y;
        if (this.isRotated()) {
          maxX += rect.height;
          maxY += rect.width;
        } else {
          maxX += rect.width;
          maxY += rect.height;
        }
        maxX > texture.getPixelWidth() && cc.errorID(3300, texture.url);
        maxY > texture.getPixelHeight() && cc.errorID(3400, texture.url);
      };
      prototype._getTexture = prototype.getTexture;
      prototype.getTexture = function() {
        var tex = this._getTexture();
        this._texture = tex;
        return tex;
      };
      prototype._clone = prototype.clone;
      prototype.clone = function() {
        var cloned = this._clone();
        cloned._name = this._name;
        cloned.insetTop = this.insetTop;
        cloned.insetBottom = this.insetBottom;
        cloned.insetLeft = this.insetLeft;
        cloned.insetRight = this.insetRight;
        return cloned;
      };
      cc.js.set(prototype, "_textureFilenameSetter", (function(url) {
        this._textureFilename = url;
        url && this._loadTexture();
      }));
      cc.js.getset(prototype, "name", (function() {
        return this._name;
      }), (function(value) {
        this._name = value;
      }));
    }), {
      "../cocos2d/core/assets/CCAsset": 18,
      "../cocos2d/core/platform/CCClass": 92
    } ],
    149: [ (function(require, module, exports) {
      "use strict";
      if (!cc.runtime) {
        var _p = cc.TMXObject.prototype;
        cc.defineGetterSetter(_p, "type", _p.getType, null);
        cc.defineGetterSetter(_p, "name", _p.getObjectName, _p.setObjectName);
        cc.defineGetterSetter(_p, "id", _p.getId, null);
        cc.defineGetterSetter(_p, "gid", _p.getGid, null);
        cc.defineGetterSetter(_p, "offset", _p.getOffset, null);
        cc.defineGetterSetter(_p, "objectSize", _p.getObjectSize, null);
        cc.defineGetterSetter(_p, "objectVisible", _p.getObjectVisible, null);
        cc.defineGetterSetter(_p, "objectRotation", _p.getObjectRotation, null);
        cc.defineGetterSetter(_p, "sgNode", _p.getNode, null);
      }
    }), {} ],
    150: [ (function(require, module, exports) {
      cc.VideoPlayer = ccui.VideoPlayer;
      cc.sys.os !== cc.sys.OS_OSX && cc.sys.os !== cc.sys.OS_WINDOWS || (cc.VideoPlayer = {});
      cc.VideoPlayer.EventType = {
        PLAYING: 0,
        PAUSED: 1,
        STOPPED: 2,
        COMPLETED: 3,
        META_LOADED: 4,
        CLICKED: 5,
        READY_TO_PLAY: 6
      };
    }), {} ],
    151: [ (function(require, module, exports) {
      cc.WebView = ccui.WebView;
      cc.sys.os !== cc.sys.OS_OSX && cc.sys.os !== cc.sys.OS_WINDOWS || (cc.WebView = {});
      cc.WebView.EventType = {
        LOADING: 0,
        LOADED: 1,
        ERROR: 2,
        JS_EVALUATED: 3
      };
    }), {} ],
    152: [ (function(require, module, exports) {
      Math.sign || (Math.sign = function(x) {
        x = +x;
        if (0 === x || isNaN(x)) return x;
        return x > 0 ? 1 : -1;
      });
      Number.isInteger || (Number.isInteger = function(value) {
        return "number" === (__typeofVal = typeof value, "object" === __typeofVal ? __realTypeOfObj(value) : __typeofVal) && isFinite(value) && Math.floor(value) === value;
      });
      true;
      var Timer = window.performance || Date;
      var _timerTable = Object.create(null);
      console.time = function(label) {
        _timerTable[label] = Timer.now();
      };
      console.timeEnd = function(label) {
        var startTime = _timerTable[label];
        var duration = Timer.now() - startTime;
        console.log(label + ": " + duration + "ms");
      };
    }), {} ],
    153: [ (function(require, module, exports) {
      String.prototype.startsWith || (String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.lastIndexOf(searchString, position) === position;
      });
      String.prototype.endsWith || (String.prototype.endsWith = function(searchString, position) {
        ("undefined" === (__typeofVal = typeof position, "object" === __typeofVal ? __realTypeOfObj(position) : __typeofVal) || position > this.length) && (position = this.length);
        position -= searchString.length;
        var lastIndex = this.indexOf(searchString, position);
        return -1 !== lastIndex && lastIndex === position;
      });
    }), {} ],
    154: [ (function(require, module, exports) {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      window.__extends = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      window.__assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      window.__rest = function(s, e) {
        var t = {};
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
        if (null != s && "function" === (__typeofVal = typeof Object.getOwnPropertySymbols, 
        "object" === __typeofVal ? __realTypeOfObj(Object.getOwnPropertySymbols) : __typeofVal)) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && (t[p[i]] = s[p[i]]);
        return t;
      };
      window.__decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" === (__typeofVal = typeof Reflect, "object" === __typeofVal ? __realTypeOfObj(Reflect) : __typeofVal) && "function" === (__typeofVal = typeof Reflect.decorate, 
        "object" === __typeofVal ? __realTypeOfObj(Reflect.decorate) : __typeofVal)) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      window.__param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      window.__metadata = function(metadataKey, metadataValue) {
        if ("object" === (__typeofVal = typeof Reflect, "object" === __typeofVal ? __realTypeOfObj(Reflect) : __typeofVal) && "function" === (__typeofVal = typeof Reflect.metadata, 
        "object" === __typeofVal ? __realTypeOfObj(Reflect.metadata) : __typeofVal)) return Reflect.metadata(metadataKey, metadataValue);
      };
      window.__awaiter = function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      window.__generator = function(thisArg, body) {
        var _ = {
          label: 0,
          sent: function() {
            if (1 & t[0]) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        }, f, y, t, g;
        return g = {
          next: verb(0),
          throw: verb(1),
          return: verb(2)
        }, "function" === (__typeofVal = typeof Symbol, "object" === __typeofVal ? __realTypeOfObj(Symbol) : __typeofVal) && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([ n, v ]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = y[2 & op[0] ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            (y = 0, t) && (op = [ 0, t.value ]);
            switch (op[0]) {
             case 0:
             case 1:
              t = op;
              break;

             case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

             case 5:
              _.label++;
              y = op[1];
              op = [ 0 ];
              continue;

             case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;

             default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                _ = 0;
                continue;
              }
              if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (6 === op[0] && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              t[2] && _.ops.pop();
              _.trys.pop();
              continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [ 6, e ];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (5 & op[0]) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      window.__exportStar = function(m, exports) {
        for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p]);
      };
      window.__values = function(o) {
        var m = "function" === (__typeofVal = typeof Symbol, "object" === __typeofVal ? __realTypeOfObj(Symbol) : __typeofVal) && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
          next: function() {
            o && i >= o.length && (o = void 0);
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      };
      window.__read = function(o, n) {
        var m = "function" === (__typeofVal = typeof Symbol, "object" === __typeofVal ? __realTypeOfObj(Symbol) : __typeofVal) && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            r && !r.done && (m = i["return"]) && m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
      window.__spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      window.__await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      window.__asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          g[n] && (i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([ n, v, a, b ]) > 1 || resume(n, v);
            });
          });
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          (f(v), q.shift(), q.length) && resume(q[0][0], q[0][1]);
        }
      };
      window.__asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", (function(e) {
          throw e;
        })), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          o[n] && (i[n] = function(v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: "return" === n
            } : f ? f(v) : v;
          });
        }
      };
      window.__asyncValues = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : "function" === (__typeofVal = typeof __values, "object" === __typeofVal ? __realTypeOfObj(__values) : __typeofVal) ? __values(o) : o[Symbol.iterator]();
      };
    }), {} ]
  }, {}, [ 135 ]);
  function __realTypeOfObj(obj) {
    if (obj && obj.toString && "[object CallbackConstructor]" === obj.toString()) return "function";
    return "object";
  }
  var __typeofVal = "";
})();